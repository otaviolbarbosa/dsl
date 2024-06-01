// import {
//   NativeModulesProxy,
//   EventEmitter,
//   Subscription,
// } from "expo-modules-core";

// Import the native module. On web, it will be resolved to UrDSL.web.ts
// and on native platforms to UrDSL.ts
// import { ChangeEventPayload, UrDSLViewProps } from "./UrDSL.types";
// import UrDSLModule, {
import {
  // test,
  UrView,
  UrText,
  UrButton,
  UrIcon,
  UrTabs,
} from "./UrDSLModule";
// import UrDSLView from "./UrDSLView";

// Get the native constant value.
// export const PI = UrDSLModule.PI;

// export function hello(): string {
//   return UrDSLModule.hello();
// }

// export function doTest(): string {
//   return test();
// }

export { UrView, UrText, UrButton, UrIcon, UrTabs };

// export async function setValueAsync(value: string) {
//   return await UrDSLModule.setValueAsync(value);
// }

// const emitter = new EventEmitter(UrDSLModule ?? NativeModulesProxy.UrDSL);

// export function addChangeListener(
//   listener: (event: ChangeEventPayload) => void,
// ): Subscription {
//   return emitter.addListener<ChangeEventPayload>("onChange", listener);
// }

// export { UrDSLView, UrDSLViewProps, ChangeEventPayload };
