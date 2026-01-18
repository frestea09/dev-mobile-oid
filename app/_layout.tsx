import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { View } from "react-native";

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate some initialization if needed
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <View />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="register/index" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="home" />
    </Stack>
  );
}
