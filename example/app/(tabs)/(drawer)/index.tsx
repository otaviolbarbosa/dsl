import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { UrView, UrText } from "uride-dsl";
import {Colors} from "uride-dsl/utils";

const TypographyScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.blue2, dark: Colors.blue }}
      headerImage={
        <Ionicons size={310} name="text" style={styles.headerImage} />
      }
    >
      <UrView style={{ padding: 20 }}>
        <UrText type={"headline"}>
          Uride 2.0 Typography
        </UrText>
      </UrView>
      <UrView style={{ paddingHorizontal: 20, gap: 16 }}>
        <UrView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <UrText type={"body_small"}>Display:</UrText>
          <UrText type={"display"}>Display</UrText>
        </UrView>
        <UrView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <UrText type={"body_small"}>Headline:</UrText>
          <UrText type={"headline"}>Headline</UrText>
        </UrView>
        <UrView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <UrText type={"body_small"}>Subtitle:</UrText>
          <UrText type={"subtitle"}>Subtitle</UrText>
        </UrView>
        <UrView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <UrText type={"body_small"}>Button:</UrText>
          <UrText type={"button"}>Button</UrText>
        </UrView>
        <UrView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <UrText type={"body_small"}>Body:</UrText>
          <UrText type={"body"}>Body</UrText>
        </UrView>
        <UrView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <UrText type={"body_small"}>Body - bold:</UrText>
          <UrText type={"body"} bold>
            Body - bold
          </UrText>
        </UrView>
        <UrView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <UrText type={"body_small"}>Body small:</UrText>
          <UrText type={"body_small"}>Body small</UrText>
        </UrView>
        <UrView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <UrText type={"body_small"}>Caption:</UrText>
          <UrText type={"caption"} upperCase>
            Caption
          </UrText>
        </UrView>
        <UrView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <UrText type={"body_small"}>Caption bold:</UrText>
          <UrText type={"caption"} upperCase bold>
            Caption bold
          </UrText>
        </UrView>
        <UrView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <UrText type={"body_small"}>Caption:</UrText>
          <UrText type={"caption"}>Caption</UrText>
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
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});

export default TypographyScreen;
