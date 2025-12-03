import { ImageGalleryProps } from '@/components/image-gallery/image-gallery.props';

export const mockImageGalleryProps: ImageGalleryProps = {
  fields: {
    title: {
      value: 'Our Amazing Gallery',
    },
    description: {
      value: 'Explore our collection of stunning images showcasing design and innovation.',
    },
    image1: {
      value: {
        src: '/gallery-image-1.jpg',
        alt: 'Gallery Image 1',
        width: '800',
        height: '600',
      },
    },
    image2: {
      value: {
        src: '/gallery-image-2.jpg',
        alt: 'Gallery Image 2',
        width: '800',
        height: '600',
      },
    },
    image3: {
      value: {
        src: '/gallery-image-3.jpg',
        alt: 'Gallery Image 3',
        width: '800',
        height: '600',
      },
    },
    image4: {
      value: {
        src: '/gallery-image-4.jpg',
        alt: 'Gallery Image 4',
        width: '800',
        height: '600',
      },
    },
  },
  params: {
    styles: '',
  },
  rendering: {
    dataSource: '',
    componentName: 'ImageGallery',
  },
  isPageEditing: false,
};
