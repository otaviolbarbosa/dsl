import { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

// import { useColorScheme } from "@/src/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "GoogleSans-Black": require("../src/assets/fonts/ProductSans-Black.ttf"),
    "GoogleSans-BlackItalic": require("../src/assets/fonts/ProductSans-BlackItalic.ttf"),
    "GoogleSans-Bold": require("../src/assets/fonts/ProductSans-Bold.ttf"),
    "GoogleSans-BoldItalic": require("../src/assets/fonts/ProductSans-BoldItalic.ttf"),
    "GoogleSans-Italic": require("../src/assets/fonts/ProductSans-Italic.ttf"),
    "GoogleSans-Light": require("../src/assets/fonts/ProductSans-Light.ttf"),
    "GoogleSans-LightItalic": require("../src/assets/fonts/ProductSans-LightItalic.ttf"),
    "GoogleSans-Medium": require("../src/assets/fonts/ProductSans-Medium.ttf"),
    "GoogleSans-MediumItalic": require("../src/assets/fonts/ProductSans-MediumItalic.ttf"),
    "GoogleSans-Regular": require("../src/assets/fonts/ProductSans-Regular.ttf"),
    "GoogleSans-Thin": require("../src/assets/fonts/ProductSans-Thin.ttf"),
    "GoogleSans-ThinItalic": require("../src/assets/fonts/ProductSans-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
    {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
