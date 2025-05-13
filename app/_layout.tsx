import { SplashScreen, Stack } from "expo-router";
import "./globals.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
