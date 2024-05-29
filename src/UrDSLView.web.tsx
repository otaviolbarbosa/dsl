import * as React from 'react';

import { UrDSLViewProps } from './UrDSL.types';

export default function UrDSLView(props: UrDSLViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
