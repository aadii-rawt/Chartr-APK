import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { UserProvider } from "../context/UserContext";

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
    <UserProvider >
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name='singlePass' options={{headerShown : false}} />
        <Stack.Screen name='buyPass' options={{headerShown : false}} />
        <Stack.Screen name='passDetails' options={{headerShown : false}} />
        <Stack.Screen name='buyTicket' options={{headerShown : false}} />
        <Stack.Screen name='dailyPass' options={{headerShown : false}} />
        <Stack.Screen name='profile' options={{headerShown : false}} />
        <Stack.Screen name='login' options={{headerShown : false}} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
    </UserProvider>
  );
}
