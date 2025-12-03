import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default as MediaSection } from '@/components/media-section/MediaSection.dev';

//  Mock dependencies
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  useSitecore: () => ({
    page: { mode: { isNormal: true } },
  }),
}));

jest.mock('@/hooks/use-intersection-observer', () => ({
  useIntersectionObserver: () => [true, { current: document.createElement('div') }],
}));

jest.mock('@/components/image/ImageWrapper.dev', () => {
  const ImageWrapper = ({
    image,
  }: {
    image?: {
      value?: {
        src?: string;
        width?: number;
        height?: number;
      };
    };
  }) => <img src={image?.value?.src} alt="" />;
  ImageWrapper.displayName = 'MockImageWrapper';
  return {
    __esModule: true,
    default: ImageWrapper,
  };
});

beforeAll(() => {
  Object.defineProperty(HTMLMediaElement.prototype, 'play', {
    configurable: true,
    value: jest.fn().mockResolvedValue(undefined),
  });

  Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
    configurable: true,
    value: jest.fn(),
  });
});

describe('MediaSection Component', () => {
  const mockImageField = {
    value: {
      src: '/test-image.jpg',
      width: 100,
      height: 100,
    },
  };

  it('renders video when reducedMotion is false and video is provided', () => {
    render(
      <MediaSection
        video="/test-video.mp4"
        image={mockImageField}
        pause={false}
        reducedMotion={false}
      />
    );
    const video = screen.getByRole('video', { hidden: true });
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('poster', expect.stringContaining('/test-image.jpg'));
  });

  it('renders image when reducedMotion is true', () => {
    render(
      <MediaSection
        video="/test-video.mp4"
        image={mockImageField}
        pause={false}
        reducedMotion={true}
      />
    );
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-image.jpg');
  });

  it('renders image when video is not provided', () => {
    render(<MediaSection image={mockImageField} pause={false} reducedMotion={false} />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('returns null when neither video nor image is provided', () => {
    const { container } = render(<MediaSection pause={false} reducedMotion={false} />);
    expect(container.firstChild).toBeNull();
  });
});
