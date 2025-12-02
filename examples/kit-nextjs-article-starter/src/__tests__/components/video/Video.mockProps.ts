import { ImageField, LinkField, TextField } from '@sitecore-content-sdk/nextjs';
import { VideoComponentProps, VideoParams, VideoFields } from '@/components/video/video-props';

// Mock video link fields
export const mockYouTubeVideo: LinkField = {
  value: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    text: 'Watch Video',
    linktype: 'external',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
};

export const mockVimeoVideo: LinkField = {
  value: {
    href: 'https://vimeo.com/123456789',
    text: 'Watch Video',
    linktype: 'external',
    url: 'https://vimeo.com/123456789',
  },
};

export const mockVideoWithoutUrl: LinkField = {
  value: {
    href: '',
    text: '',
    linktype: 'external',
    url: '',
  },
};

// Mock image field for video thumbnail
export const mockVideoImage: ImageField = {
  value: {
    src: '/images/video-thumbnail.jpg',
    alt: 'Video Thumbnail',
    width: 1920,
    height: 1080,
  },
};

export const mockVideoImageWithoutSrc: ImageField = {
  value: {
    src: '',
    alt: '',
    width: 0,
    height: 0,
  },
};

// Mock text fields
export const mockVideoTitle: TextField = {
  value: 'Product Demo Video',
};

export const mockVideoCaption: TextField = {
  value: 'Learn how to use our amazing product',
};

// Mock video fields
export const mockVideoFields: VideoFields = {
  video: mockYouTubeVideo,
  image: mockVideoImage,
  title: mockVideoTitle,
  caption: mockVideoCaption,
};

export const mockVideoFieldsWithoutImage: VideoFields = {
  video: mockYouTubeVideo,
  title: mockVideoTitle,
  caption: mockVideoCaption,
};

export const mockVideoFieldsWithoutVideo: VideoFields = {
  image: mockVideoImage,
  title: mockVideoTitle,
  caption: mockVideoCaption,
};

export const mockVideoFieldsMinimal: VideoFields = {
  video: mockYouTubeVideo,
};

// Mock video params
export const mockVideoParamsDefault: VideoParams = {
  useModal: '1',
  darkPlayIcon: '0',
  displayIcon: '1',
};

export const mockVideoParamsNoModal: VideoParams = {
  useModal: '0',
  darkPlayIcon: '0',
  displayIcon: '1',
};

export const mockVideoParamsDarkIcon: VideoParams = {
  useModal: '1',
  darkPlayIcon: '1',
  displayIcon: '1',
};

export const mockVideoParamsNoDisplayIcon: VideoParams = {
  useModal: '1',
  darkPlayIcon: '0',
  displayIcon: '0',
};

// Default props with all fields
export const defaultProps: VideoComponentProps = {
  fields: mockVideoFields,
  params: mockVideoParamsDefault,
  rendering: { componentName: 'Video' } as any,
};

// Props without image (will use YouTube thumbnail)
export const propsWithoutImage: VideoComponentProps = {
  fields: mockVideoFieldsWithoutImage,
  params: mockVideoParamsDefault,
  rendering: { componentName: 'Video' } as any,
};

// Props without modal
export const propsWithoutModal: VideoComponentProps = {
  fields: mockVideoFields,
  params: mockVideoParamsNoModal,
  rendering: { componentName: 'Video' } as any,
};

// Props with dark play icon
export const propsWithDarkIcon: VideoComponentProps = {
  fields: mockVideoFields,
  params: mockVideoParamsDarkIcon,
  rendering: { componentName: 'Video' } as any,
};

// Props without display icon
export const propsWithoutDisplayIcon: VideoComponentProps = {
  fields: mockVideoFields,
  params: mockVideoParamsNoDisplayIcon,
  rendering: { componentName: 'Video' } as any,
};

// Props with minimal fields
export const propsMinimal: VideoComponentProps = {
  fields: mockVideoFieldsMinimal,
  params: mockVideoParamsDefault,
  rendering: { componentName: 'Video' } as any,
};

// Props with Vimeo video
export const propsWithVimeoVideo: VideoComponentProps = {
  fields: {
    ...mockVideoFields,
    video: mockVimeoVideo,
  },
  params: mockVideoParamsDefault,
  rendering: { componentName: 'Video' } as any,
};

// Props without video URL
export const propsWithoutVideoUrl: VideoComponentProps = {
  fields: mockVideoFieldsWithoutVideo,
  params: mockVideoParamsDefault,
  rendering: { componentName: 'Video' } as any,
};

// Props with custom play button class
export const propsWithCustomButtonClass: VideoComponentProps = {
  fields: mockVideoFields,
  params: mockVideoParamsDefault,
  playButtonClassName: 'custom-play-button',
  rendering: { componentName: 'Video' } as any,
};

// Props without fields (null scenario)
export const propsWithoutFields: VideoComponentProps = {
  fields: null as any,
  params: mockVideoParamsDefault,
  rendering: { componentName: 'Video' } as any,
};

// Props with undefined fields
export const propsWithUndefinedFields: VideoComponentProps = {
  fields: undefined as any,
  params: mockVideoParamsDefault,
  rendering: { componentName: 'Video' } as any,
};

// Props with empty video
export const propsWithEmptyVideo: VideoComponentProps = {
  fields: {
    video: mockVideoWithoutUrl,
    image: mockVideoImage,
  },
  params: mockVideoParamsDefault,
  rendering: { componentName: 'Video' } as any,
};

// Props without params
export const propsWithoutParams: VideoComponentProps = {
  fields: mockVideoFields,
  rendering: { componentName: 'Video' } as any,
};

