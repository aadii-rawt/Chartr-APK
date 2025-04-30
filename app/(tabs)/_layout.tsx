import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black', // Changed to black for light theme
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground, // Make sure this is light in your component
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'white', // White background for light theme
          },
          default: {
            backgroundColor: 'white', // White background for light theme
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Nearby',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="location-on" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="location-on" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
