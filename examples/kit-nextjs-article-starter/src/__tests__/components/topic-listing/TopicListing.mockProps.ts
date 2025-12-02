import { Field, LinkField } from '@sitecore-content-sdk/nextjs';
import { TopicListingProps, TopicItemProps } from '@/components/topic-listing/topic-listing.props';

// Mock topic items
export const mockTopicItem1: TopicItemProps = {
  link: {
    jsonValue: {
      value: {
        href: '/topics/technology',
        text: 'Technology',
        linktype: 'internal',
        url: '/topics/technology',
      },
    } as LinkField,
  },
};

export const mockTopicItem2: TopicItemProps = {
  link: {
    jsonValue: {
      value: {
        href: '/topics/design',
        text: 'Design',
        linktype: 'internal',
        url: '/topics/design',
      },
    } as LinkField,
  },
};

export const mockTopicItem3: TopicItemProps = {
  link: {
    jsonValue: {
      value: {
        href: '/topics/business',
        text: 'Business',
        linktype: 'internal',
        url: '/topics/business',
      },
    } as LinkField,
  },
};

export const mockTopicItem4: TopicItemProps = {
  link: {
    jsonValue: {
      value: {
        href: '/topics/marketing',
        text: 'Marketing',
        linktype: 'internal',
        url: '/topics/marketing',
      },
    } as LinkField,
  },
};

export const mockTopicItemWithoutLink: TopicItemProps = {};

// Mock title
export const mockTitle: Field<string> = {
  value: 'Explore Our Topics',
};

// Default props with all fields
export const defaultProps: TopicListingProps = {
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: mockTitle,
        },
        children: {
          results: [mockTopicItem1, mockTopicItem2, mockTopicItem3, mockTopicItem4],
        },
      },
    },
  },
  params: {
    backgroundTheme: 'shooting-star',
  },
  rendering: { componentName: 'TopicListing' } as any,
};

// Props without shooting star theme
export const propsWithoutShootingStar: TopicListingProps = {
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: mockTitle,
        },
        children: {
          results: [mockTopicItem1, mockTopicItem2, mockTopicItem3],
        },
      },
    },
  },
  params: {
    backgroundTheme: 'default',
  },
  rendering: { componentName: 'TopicListing' } as any,
};

// Props with shooting star theme
export const propsWithShootingStar: TopicListingProps = {
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: mockTitle,
        },
        children: {
          results: [mockTopicItem1, mockTopicItem2],
        },
      },
    },
  },
  params: {
    backgroundTheme: 'shooting-star',
  },
  rendering: { componentName: 'TopicListing' } as any,
};

// Props with single topic
export const propsWithSingleTopic: TopicListingProps = {
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: mockTitle,
        },
        children: {
          results: [mockTopicItem1],
        },
      },
    },
  },
  params: {
    backgroundTheme: 'default',
  },
  rendering: { componentName: 'TopicListing' } as any,
};

// Props without title
export const propsWithoutTitle: TopicListingProps = {
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: { value: '' },
        },
        children: {
          results: [mockTopicItem1, mockTopicItem2],
        },
      },
    },
  },
  params: {
    backgroundTheme: 'default',
  },
  rendering: { componentName: 'TopicListing' } as any,
};

// Props with empty topics array
export const propsWithEmptyTopics: TopicListingProps = {
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: mockTitle,
        },
        children: {
          results: [],
        },
      },
    },
  },
  params: {
    backgroundTheme: 'default',
  },
  rendering: { componentName: 'TopicListing' } as any,
};

// Props without children
export const propsWithoutChildren: TopicListingProps = {
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: mockTitle,
        },
      },
    },
  },
  params: {
    backgroundTheme: 'default',
  },
  rendering: { componentName: 'TopicListing' } as any,
};

// Props without fields (null scenario)
export const propsWithoutFields: TopicListingProps = {
  fields: null as any,
  params: {
    backgroundTheme: 'default',
  },
  rendering: { componentName: 'TopicListing' } as any,
};

// Props with undefined fields
export const propsWithUndefinedFields: TopicListingProps = {
  fields: undefined as any,
  params: {
    backgroundTheme: 'default',
  },
  rendering: { componentName: 'TopicListing' } as any,
};

// Props with topics including one without link
export const propsWithMixedTopics: TopicListingProps = {
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: mockTitle,
        },
        children: {
          results: [mockTopicItem1, mockTopicItemWithoutLink, mockTopicItem2],
        },
      },
    },
  },
  params: {
    backgroundTheme: 'default',
  },
  rendering: { componentName: 'TopicListing' } as any,
};

