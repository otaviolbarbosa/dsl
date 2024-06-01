import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { UrView, UrText } from "uride-dsl";
import { Colors } from "uride-dsl/utils";

const FormsScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.blue2, dark: Colors.blue }}
      headerImage={
        <Ionicons size={310} name="checkbox" style={styles.headerImage} />
      }
    >
      <UrView style={{ padding: 20 }}>
        <UrText type={"headline"} style={{ marginBottom: 8 }}>
          Uride 2.0 Forms
        </UrText>
      </UrView>
    </ParallaxScrollView>
  );
};

export default FormsScreen;

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
