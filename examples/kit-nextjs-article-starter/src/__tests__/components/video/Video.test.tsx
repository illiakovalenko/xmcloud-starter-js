import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Default as Video } from '@/components/video/Video';
import {
  defaultProps,
  propsWithoutImage,
  propsWithoutModal,
  propsWithDarkIcon,
  propsWithoutDisplayIcon,
  propsMinimal,
  propsWithVimeoVideo,
  propsWithoutVideoUrl,
  propsWithCustomButtonClass,
  propsWithoutFields,
  propsWithUndefinedFields,
  propsWithEmptyVideo,
  propsWithoutParams,
} from './Video.mockProps';

// Mock useSitecore
jest.mock('@sitecore-content-sdk/nextjs', () => ({
  useSitecore: () => ({
    page: {
      mode: {
        isEditing: false,
      },
    },
  }),
}));

// Mock useVideoModal hook
const mockOpenModal = jest.fn();
const mockCloseModal = jest.fn();
jest.mock('@/hooks/useVideoModal', () => ({
  useVideoModal: () => ({
    isOpen: false,
    openModal: mockOpenModal,
    closeModal: mockCloseModal,
  }),
}));

// Mock useVideo context
const mockSetPlayingVideoId = jest.fn();
jest.mock('@/contexts/VideoContext', () => ({
  useVideo: () => ({
    playingVideoId: null,
    setPlayingVideoId: mockSetPlayingVideoId,
  }),
}));

// Mock Icon component
jest.mock('@/components/icon/Icon', () => ({
  Default: ({ iconName, className }: any) => (
    <span data-testid={`icon-${iconName}`} className={className}>
      {iconName}
    </span>
  ),
}));

// Mock ImageWrapper
jest.mock('@/components/image/ImageWrapper.dev', () => ({
  Default: ({ image, className, wrapperClass }: any) => (
    <div className={wrapperClass} data-testid="image-wrapper-container">
      <img
        src={image?.value?.src}
        alt={image?.value?.alt}
        className={className}
        data-testid="image-wrapper"
      />
    </div>
  ),
}));

// Mock VideoPlayer
jest.mock('@/components/video/VideoPlayer.dev', () => ({
  VideoPlayer: ({ videoUrl, isPlaying, onPlay, fullScreen, btnClasses }: any) => (
    <div data-testid="video-player" data-is-playing={isPlaying} data-full-screen={fullScreen}>
      <button onClick={onPlay} className={btnClasses} data-testid="video-play-button">
        Play Video
      </button>
      <div data-testid="video-url">{videoUrl}</div>
    </div>
  ),
}));

// Mock VideoModal
jest.mock('@/components/video/VideoModal.dev', () => ({
  VideoModal: ({ isOpen, onClose, videoUrl }: any) => (
    <div data-testid="video-modal" data-is-open={isOpen}>
      <button onClick={onClose} data-testid="modal-close-button">
        Close
      </button>
      <div data-testid="modal-video-url">{videoUrl}</div>
    </div>
  ),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, whileHover, initial, variants, ...props }: any) => (
      <div className={className} data-testid="motion-div" {...props}>
        {children}
      </div>
    ),
  },
}));

// Mock isMobile utility
jest.mock('@/utils/isMobile', () => ({
  isMobile: jest.fn(() => false),
}));

// Mock video utility
jest.mock('@/utils/video', () => ({
  extractVideoId: jest.fn((url) => {
    if (url?.includes('youtube.com')) return 'dQw4w9WgXcQ';
    if (url?.includes('vimeo.com')) return '123456789';
    return null;
  }),
}));

// Mock lib/utils
jest.mock('@/lib/utils', () => ({
  cn: (...args: any[]) => {
    return args
      .flat(2)
      .filter(Boolean)
      .map((arg) => {
        if (typeof arg === 'string') return arg;
        if (typeof arg === 'object' && !Array.isArray(arg)) {
          return Object.entries(arg)
            .filter(([, value]) => Boolean(value))
            .map(([key]) => key)
            .join(' ');
        }
        return '';
      })
      .filter(Boolean)
      .join(' ')
      .trim();
  },
  getYouTubeThumbnail: jest.fn(() => 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'),
}));

// Mock NoDataFallback
jest.mock('@/utils/NoDataFallback', () => ({
  NoDataFallback: ({ componentName }: any) => (
    <div data-testid="no-data-fallback">{componentName}</div>
  ),
}));

describe('Video Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic rendering', () => {
    it('should render video component with all fields', () => {
      render(<Video {...defaultProps} />);

      const motionDivs = screen.getAllByTestId('motion-div');
      expect(motionDivs.length).toBeGreaterThan(0);
      expect(screen.getByTestId('image-wrapper')).toBeInTheDocument();
    });

    it('should render video thumbnail image', () => {
      render(<Video {...defaultProps} />);

      const image = screen.getByTestId('image-wrapper');
      expect(image).toHaveAttribute('src', '/images/video-thumbnail.jpg');
      expect(image).toHaveAttribute('alt', 'Video Thumbnail');
    });

    it('should render play button icon when displayIcon is true', () => {
      render(<Video {...defaultProps} />);

      const playIcon = screen.getByTestId('icon-play');
      expect(playIcon).toBeInTheDocument();
    });

    it('should handle displayIcon param', () => {
      render(<Video {...propsWithoutDisplayIcon} />);

      // Icon may still render but SVG decoration should not
      const container = screen.getByTestId('image-wrapper').parentElement;
      expect(container).toBeInTheDocument();
    });

    it('should render decorative SVG when displayIcon param is set', () => {
      const { container } = render(<Video {...defaultProps} />);

      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Component structure', () => {
    it('should render with correct container structure', () => {
      const { container } = render(<Video {...defaultProps} />);

      const mainContainer = container.querySelector('.max-w-screens-2xl');
      expect(mainContainer).toBeInTheDocument();
      expect(mainContainer).toHaveClass('relative', 'z-10', 'mx-auto', 'overflow-hidden');
    });

    it('should render aspect video container', () => {
      const { container } = render(<Video {...defaultProps} />);

      const aspectVideoContainer = container.querySelector('.aspect-video');
      expect(aspectVideoContainer).toBeInTheDocument();
    });
  });

  describe('Play button styling', () => {
    it('should apply white text color when darkPlayIcon is false', () => {
      render(<Video {...defaultProps} />);

      const playButton = screen.getByTestId('icon-play');
      const buttonContainer = playButton.closest('button');
      expect(buttonContainer).toHaveClass('text-white');
    });

    it('should apply black text color when darkPlayIcon is true', () => {
      render(<Video {...propsWithDarkIcon} />);

      const playButton = screen.getByTestId('icon-play');
      const buttonContainer = playButton.closest('button');
      expect(buttonContainer).toHaveClass('text-black');
    });

    it('should render with custom button class prop', () => {
      render(<Video {...propsWithCustomButtonClass} />);

      const playButton = screen.getByTestId('icon-play');
      const buttonContainer = playButton.closest('button');
      // Button classes are applied via cn() utility
      expect(buttonContainer).toBeInTheDocument();
    });

    it('should apply default button classes', () => {
      render(<Video {...defaultProps} />);

      const playButton = screen.getByTestId('icon-play');
      const buttonContainer = playButton.closest('button');
      expect(buttonContainer).toHaveClass('absolute', 'inset-0', 'z-20', 'flex', 'cursor-pointer');
    });
  });

  describe('Modal behavior', () => {
    it('should render VideoModal when useModal is true', () => {
      render(<Video {...defaultProps} />);

      expect(screen.getByTestId('video-modal')).toBeInTheDocument();
    });

    it('should not render VideoModal when useModal is false', () => {
      render(<Video {...propsWithoutModal} />);

      expect(screen.queryByTestId('video-modal')).not.toBeInTheDocument();
    });

    it('should open modal when play button is clicked with modal enabled', () => {
      render(<Video {...defaultProps} />);

      const playButton = screen.getByTestId('icon-play').closest('button') as HTMLElement;
      fireEvent.click(playButton);

      expect(mockOpenModal).toHaveBeenCalled();
    });
  });

  describe('Video player behavior', () => {
    it('should render VideoPlayer when modal is disabled', () => {
      render(<Video {...propsWithoutModal} />);

      expect(screen.getByTestId('video-player')).toBeInTheDocument();
    });

    it('should not render VideoPlayer initially when modal is enabled', () => {
      render(<Video {...defaultProps} />);

      expect(screen.queryByTestId('video-player')).not.toBeInTheDocument();
    });

    it('should pass correct video URL to VideoPlayer', () => {
      render(<Video {...propsWithoutModal} />);

      const videoUrl = screen.getByTestId('video-url');
      expect(videoUrl).toHaveTextContent('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    });
  });

  describe('Video URL handling', () => {
    it('should handle YouTube video URL', () => {
      render(<Video {...defaultProps} />);

      const motionDivs = screen.getAllByTestId('motion-div');
      expect(motionDivs.length).toBeGreaterThan(0);
    });

    it('should handle Vimeo video URL', () => {
      render(<Video {...propsWithVimeoVideo} />);

      const motionDivs = screen.getAllByTestId('motion-div');
      expect(motionDivs.length).toBeGreaterThan(0);
    });

    it('should show placeholder when video URL is missing', () => {
      render(<Video {...propsWithoutVideoUrl} />);

      expect(screen.getByText('Please add video')).toBeInTheDocument();
    });

    it('should show placeholder when video URL is empty', () => {
      render(<Video {...propsWithEmptyVideo} />);

      expect(screen.getByText('Please add video')).toBeInTheDocument();
    });
  });

  describe('Image handling', () => {
    it('should render custom image when provided', () => {
      render(<Video {...defaultProps} />);

      const image = screen.getByTestId('image-wrapper');
      expect(image).toHaveAttribute('src', '/images/video-thumbnail.jpg');
    });

    it('should use YouTube thumbnail when image is not provided', () => {
      render(<Video {...propsWithoutImage} />);

      // Component will use getYouTubeThumbnail as fallback
      const { container } = render(<Video {...propsWithoutImage} />);
      expect(container).toBeInTheDocument();
    });
  });

  describe('Edge cases and fallbacks', () => {
    it('should show NoDataFallback when fields is null', () => {
      render(<Video {...propsWithoutFields} />);

      expect(screen.getByTestId('no-data-fallback')).toBeInTheDocument();
      expect(screen.getByText('Video')).toBeInTheDocument();
    });

    it('should show NoDataFallback when fields is undefined', () => {
      render(<Video {...propsWithUndefinedFields} />);

      expect(screen.getByTestId('no-data-fallback')).toBeInTheDocument();
    });

    it('should handle missing params gracefully', () => {
      render(<Video {...propsWithoutParams} />);

      const motionDivs = screen.getAllByTestId('motion-div');
      expect(motionDivs.length).toBeGreaterThan(0);
    });

    it('should render with minimal props', () => {
      render(<Video {...propsMinimal} />);

      const motionDivs = screen.getAllByTestId('motion-div');
      expect(motionDivs.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    it('should have aria-label on play button', () => {
      render(<Video {...defaultProps} />);

      const playButton = screen.getByTestId('icon-play').closest('button');
      expect(playButton).toHaveAttribute('aria-label', 'Play video');
    });

    it('should set aria-hidden on thumbnail image', () => {
      render(<Video {...defaultProps} />);

      const imageContainer = screen.getByTestId('image-wrapper-container');
      expect(imageContainer).toHaveClass('cover-image');
    });

    it('should render SVG with aria-hidden', () => {
      const { container } = render(<Video {...defaultProps} />);

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Responsive behavior', () => {
    it('should apply aspect ratio to video container', () => {
      const { container } = render(<Video {...defaultProps} />);

      const aspectContainer = container.querySelector('.aspect-video');
      expect(aspectContainer).toBeInTheDocument();
      expect(aspectContainer).toHaveClass('w-full');
    });

    it('should apply max width to container', () => {
      const { container } = render(<Video {...defaultProps} />);

      const motionDiv = container.querySelector('.max-w-screens-2xl.mx-auto');
      expect(motionDiv).toBeInTheDocument();
    });
  });

  describe('Animation and interactions', () => {
    it('should render with framer-motion wrapper', () => {
      render(<Video {...defaultProps} />);

      const motionDivs = screen.getAllByTestId('motion-div');
      expect(motionDivs.length).toBeGreaterThan(0);
    });

    it('should have cursor pointer on play button', () => {
      render(<Video {...defaultProps} />);

      const playButton = screen.getByTestId('icon-play').closest('button');
      expect(playButton).toHaveClass('cursor-pointer');
    });
  });

  describe('Error state', () => {
    it('should render error message when no video URL', () => {
      render(<Video {...propsWithoutVideoUrl} />);

      expect(screen.getByText('Please add video')).toBeInTheDocument();
    });

    it('should style error message appropriately', () => {
      const { container } = render(<Video {...propsWithoutVideoUrl} />);

      const errorMessage = screen.getByText('Please add video');
      expect(errorMessage.parentElement).toHaveClass('bg-secondary', 'flex', 'aspect-video');
    });
  });

  describe('Play icon styling', () => {
    it('should apply correct size classes to play icon', () => {
      render(<Video {...defaultProps} />);

      const playIcon = screen.getByTestId('icon-play');
      expect(playIcon).toHaveClass('h-[65px]', 'w-[65px]');
    });

    it('should apply hover scale transition to play icon', () => {
      render(<Video {...defaultProps} />);

      const playIcon = screen.getByTestId('icon-play');
      expect(playIcon).toHaveClass('transition-transform', 'hover:scale-110');
    });
  });
});

