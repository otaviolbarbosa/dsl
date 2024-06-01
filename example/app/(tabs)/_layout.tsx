import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(drawer)"
        options={{
          title: "Demo",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "layers" : "layers-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="credits"
        options={{
          title: "Credits",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
