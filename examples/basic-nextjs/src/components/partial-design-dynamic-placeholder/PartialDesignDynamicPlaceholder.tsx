import React, { JSX } from 'react';
import { ComponentProps } from 'lib/component-props';
import componentMap from '.sitecore/component-map';
import Placeholder from 'components/content-sdk/Placeholder';

const PartialDesignDynamicPlaceholder = (props: ComponentProps): JSX.Element => (
  <Placeholder
    name={props.rendering?.params?.sig || ''}
    rendering={props.rendering}
    page={props.page}
    componentMap={componentMap}
  />
);

export default PartialDesignDynamicPlaceholder;
