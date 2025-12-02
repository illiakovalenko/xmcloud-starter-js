import React, { JSX } from 'react';
import { ComponentProps } from 'lib/component-props';
import { AppPlaceholder } from "@sitecore-content-sdk/nextjs";

// Import componentMap - this will only be used in production
let componentMap: any;
try {
  // Dynamic require to avoid circular dependency during module initialization
  componentMap = require('.sitecore/component-map').default;
} catch {
  // In test environment, componentMap might not be available
  componentMap = {};
}

const PartialDesignDynamicPlaceholder = (
  props: ComponentProps
): JSX.Element => {
  return (
    <AppPlaceholder
      name={props.rendering?.params?.sig || ""}
      rendering={props.rendering}
      page={props.page}
      componentMap={componentMap}
    />
  );
};

export default PartialDesignDynamicPlaceholder;
