import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "typography",
            drawerLabel: "Typography",
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "text" : "text-outline"}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="iconography"
          options={{
            title: "iconography",
            drawerLabel: "Iconography",
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "apps" : "apps-outline"}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="colors"
          options={{
            title: "colors",
            drawerLabel: "Colors",
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "color-palette" : "color-palette-outline"}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="buttons"
          options={{
            title: "buttons",
            drawerLabel: "Buttons",
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "add-circle" : "add-circle-outline"}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="toasts"
          options={{
            title: "toasts",
            drawerLabel: "Toasts",
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="forms"
          options={{
            title: "forms",
            drawerLabel: "Forms",
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "checkbox" : "checkbox-outline"}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "tabs",
            drawerLabel: "Tabs",
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon
                name={
                  focused
                    ? "ellipsis-horizontal"
                    : "ellipsis-horizontal-outline"
                }
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="cards"
          options={{
            title: "cards",
            drawerLabel: "Cards",
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "browsers" : "browsers-outline"}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="lists"
          options={{
            title: "lists",
            drawerLabel: "Lists",
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "list" : "list-outline"}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="tiles"
          options={{
            title: "tiles",
            drawerLabel: "Tiles",
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "chatbox" : "chatbox-outline"}
                color={color}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
