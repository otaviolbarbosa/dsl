import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { UrView, UrText } from "uride-dsl";
import { Colors, camelToNormal } from "uride-dsl/utils";

const ColorsScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.brown2, dark: Colors.brown }}
      headerImage={
        <Ionicons size={310} name="color-palette" style={styles.headerImage} />
      }
    >
      <UrView style={{ padding: 20 }}>
        <UrText type={"headline"} style={{ marginBottom: 8 }}>
          Uride 2.0 Colors
        </UrText>
        <UrView style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {Object.entries(Colors).map(([name, value], index) => (
            <UrView
              key={`color-item-${index}`}
              style={{
                flexDirection: "row",
                width: "50%",
                gap: 8,
                paddingVertical: 8,
              }}
            >
              <UrView
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderColor: Colors.lightBlue2,
                  borderWidth: 3,
                  backgroundColor: value,
                }}
              ></UrView>
              <UrView>
                <UrText
                  type={"body_small"}
                  style={{ textTransform: "capitalize" }}
                >
                  {camelToNormal(name)}
                </UrText>
                <UrText type={"body_small"} style={{ color: Colors.grey2 }}>
                  {value}
                </UrText>
              </UrView>
            </UrView>
          ))}
        </UrView>
      </UrView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default ColorsScreen;
