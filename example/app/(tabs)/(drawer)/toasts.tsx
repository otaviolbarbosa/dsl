import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { UrText, UrView } from "uride-dsl";
import { Colors } from "uride-dsl/utils";

const ToastsScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.blue2, dark: Colors.blue }}
      headerImage={
        <Ionicons
          size={310}
          name="information-circle"
          style={styles.headerImage}
        />
      }
    >
      <UrView style={{ padding: 20 }}>
        <UrText type={"headline"} style={{ marginBottom: 8 }}>
          Uride 2.0 Toasts
        </UrText>
      </UrView>
    </ParallaxScrollView>
  );
};

export default ToastsScreen;

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
