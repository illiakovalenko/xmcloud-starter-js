import { HeroProps } from '@/components/hero/hero.props';

export const mockHeroProps: HeroProps = {
  fields: {
    title: {
      value: 'Welcome to Our Platform',
    },
    description: {
      value: 'Discover amazing features and services tailored for you.',
    },
    image: {
      value: {
        src: '/hero-image.jpg',
        alt: 'Hero Image',
        width: '1200',
        height: '800',
      },
    },
    bannerText: {
      value: 'Special Offer: Get 20% off on all services',
    },
    bannerCTA: {
      value: {
        href: '/offers',
        text: 'Learn More',
        linktype: 'internal',
      },
    },
    searchLink: {
      value: {
        href: '/search-results',
        text: 'Search',
        linktype: 'internal',
      },
    },
    dictionary: {
      SubmitCTALabel: 'Search',
      ZipPlaceholder: 'Enter your ZIP code',
    },
  },
  params: {
    styles: 'position-left',
  },
  rendering: {
    dataSource: '',
    componentName: 'Hero',
  },
  isPageEditing: false,
};
