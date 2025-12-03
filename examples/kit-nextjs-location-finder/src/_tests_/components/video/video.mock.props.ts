import { VideoComponentProps } from '@/components/video/video-props';

const mockVideoFields = {
  video: {
    value: {
      href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      text: 'Alaris Emergency Vehicle Tour',
      linktype: 'external',
      target: '_blank',
    },
  },
  image: {
    value: {
      src: 'https://example.com/alaris-ambulance-thumbnail.jpg',
      alt: 'Alaris Type I Ambulance Tour',
      width: '1920',
      height: '1080',
    },
  },
  title: {
    value: 'Alaris Emergency Vehicle Tour',
  },
  caption: {
    value: 'Take a virtual tour of our advanced emergency response vehicles',
  },
};

const mockVideoFieldsWithoutImage = {
  video: {
    value: {
      href: 'https://www.youtube.com/watch?v=abc123xyz',
      text: 'Fire Truck Equipment Overview',
      linktype: 'external',
      target: '_blank',
    },
  },
  title: {
    value: 'Fire Truck Equipment Overview',
  },
  caption: {
    value: 'Explore the advanced firefighting equipment in Alaris fire trucks',
  },
};

const mockVideoParams = {
  darkPlayIcon: '0',
  useModal: '1',
  displayIcon: '1',
};

const mockVideoParamsWithDarkIcon = {
  darkPlayIcon: '1',
  useModal: '0',
  displayIcon: '0',
};

export const mockVideoProps: VideoComponentProps = {
  rendering: {
    componentName: 'Video',
    dataSource: 'mock-datasource',
    uid: 'mock-uid',
  },
  params: {
    styles: '',
    ...mockVideoParams,
  },
  fields: mockVideoFields,
};

export const mockVideoPropsWithoutImage: VideoComponentProps = {
  rendering: {
    componentName: 'Video',
    dataSource: 'mock-datasource',
    uid: 'mock-uid',
  },
  params: {
    styles: '',
    ...mockVideoParamsWithDarkIcon,
  },
  fields: mockVideoFieldsWithoutImage,
};

export const mockVideoPropsWithoutVideo: VideoComponentProps = {
  rendering: {
    componentName: 'Video',
    dataSource: 'mock-datasource',
    uid: 'mock-uid',
  },
  params: {
    styles: '',
  },
  fields: {
    title: {
      value: 'No video available',
    },
  },
};
