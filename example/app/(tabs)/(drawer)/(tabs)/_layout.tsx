import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { UrView, UrTabs, UrText } from "uride-dsl";
import { UrTabsScreen } from "uride-dsl/components/UrTabs";
import { Colors } from "uride-dsl/utils";

import ParallaxScrollView from "@/components/ParallaxScrollView";

const TabScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.blue2, dark: Colors.blue }}
      headerImage={
        <Ionicons
          size={310}
          name="ellipsis-horizontal"
          style={styles.headerImage}
        />
      }
    >
      <UrText type="headline" style={{ padding: 20 }}>
        Uride 2.0 Tabs
      </UrText>
      <UrView style={{ height: 400 }}>
        <UrView style={{ height: 400 }}>
          <UrTabs>
            <UrTabsScreen name="index" options={{ title: "Nearby" }} />
            <UrTabsScreen name="recent" options={{ title: "Recent" }} />
            <UrTabsScreen name="saved" options={{ title: "Saved Places" }} />
          </UrTabs>
        </UrView>
      </UrView>
    </ParallaxScrollView>
  );
};

export default TabScreen;

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
