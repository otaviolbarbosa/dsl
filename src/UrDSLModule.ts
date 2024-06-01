import { requireNativeModule } from "expo-modules-core";
export { default as UrView } from "./components/UrView";
export { default as UrText } from "./components/UrText";
export { default as UrButton } from "./components/UrButton";
export { default as UrIcon } from "./components/UrIcon";
export { default as UrTabs } from "./components/UrTabs";

// It loads the native module object from the JSI or falls back to
// the bridge module (from NativeModulesProxy) if the remote debugger is on.
export default requireNativeModule("UrDSL");

export const test = () => {
  return "test text";
};
