import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to UrDSL.web.ts
// and on native platforms to UrDSL.ts
import UrDSLModule from './UrDSLModule';
import UrDSLView from './UrDSLView';
import { ChangeEventPayload, UrDSLViewProps } from './UrDSL.types';

// Get the native constant value.
export const PI = UrDSLModule.PI;

export function hello(): string {
  return UrDSLModule.hello();
}

export async function setValueAsync(value: string) {
  return await UrDSLModule.setValueAsync(value);
}

const emitter = new EventEmitter(UrDSLModule ?? NativeModulesProxy.UrDSL);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { UrDSLView, UrDSLViewProps, ChangeEventPayload };
