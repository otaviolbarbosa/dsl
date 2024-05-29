import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { UrDSLViewProps } from './UrDSL.types';

const NativeView: React.ComponentType<UrDSLViewProps> =
  requireNativeViewManager('UrDSL');

export default function UrDSLView(props: UrDSLViewProps) {
  return <NativeView {...props} />;
}
