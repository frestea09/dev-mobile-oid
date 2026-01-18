import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { labels } from '@/constants/labels';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="book-appointment" options={{ title: labels.stack.booking }} />
        <Stack.Screen name="booking-success" options={{ title: labels.stack.success }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: labels.stack.modal }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
