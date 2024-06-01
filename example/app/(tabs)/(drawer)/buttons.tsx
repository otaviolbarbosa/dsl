import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { UrView, UrText, UrButton } from "uride-dsl";
import { Colors } from "uride-dsl/utils";

const ButtonsScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.green2, dark: Colors.green }}
      headerImage={
        <Ionicons size={310} name="add-circle" style={styles.headerImage} />
      }
    >
      <UrView style={{ padding: 20 }}>
        <UrText type={"headline"}>Uride 2.0 Buttons</UrText>
      </UrView>
      <UrView style={{ paddingHorizontal: 20, rowGap: 24 }}>
        <UrView style={{ flexDirection: "row", flexWrap: "wrap", rowGap: 12 }}>
          <UrText type={"body"}>Primary button</UrText>
          <UrButton onPress={() => {}} label={"Active"} />
          <UrButton onPress={() => {}} label={"Disabled"} disabled />
        </UrView>
        <UrView style={{ flexDirection: "row", flexWrap: "wrap", rowGap: 12 }}>
          <UrText type={"body"}>Secondary button</UrText>
          <UrButton onPress={() => {}} variant={"secondary"} label={"Active"} />
          <UrButton
            onPress={() => {}}
            variant={"secondary"}
            label={"Disabled"}
            disabled
          />
        </UrView>
        <UrView style={{ flexDirection: "row", flexWrap: "wrap", rowGap: 12 }}>
          <UrText type={"body"}>Tertiary button</UrText>
          <UrButton onPress={() => {}} variant={"tertiary"} label={"Active"} />
          <UrButton
            onPress={() => {}}
            variant={"tertiary"}
            label={"Disabled"}
            disabled
          />
        </UrView>
        <View style={{ rowGap: 12, alignItems: "center" }}>
          <UrView style={{ width: "100%" }}>
            <UrText type={"body"}>Small button</UrText>
          </UrView>
          <UrView>
            <UrButton onPress={() => {}} variant={"small"} label={"Active"} />
            <UrButton
              onPress={() => {}}
              variant={"small"}
              label={"Disabled"}
              disabled
            />
          </UrView>
        </View>
        <UrView
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            rowGap: 12,
          }}
        >
          <UrView style={{ width: "100%" }}>
            <UrText type={"body"}>UrButton with icon</UrText>
          </UrView>
          <UrButton
            onPress={() => {}}
            variant={"primary"}
            label="Active"
            icon="settings"
          />
          <UrButton
            onPress={() => {}}
            variant={"primary"}
            label="Disabled"
            icon="settings"
            disabled
          />
          <UrButton
            onPress={() => {}}
            variant={"secondary"}
            label={"Active"}
            icon="settings"
          />
          <UrButton
            onPress={() => {}}
            variant={"secondary"}
            label={"Disabled"}
            icon="settings"
            disabled
          />
          <UrButton
            onPress={() => {}}
            variant={"tertiary"}
            label={"Active"}
            icon="settings"
          />
          <UrButton
            onPress={() => {}}
            variant={"tertiary"}
            label={"Disabled"}
            icon="settings"
            disabled
          />
          <View style={{ rowGap: 12, alignItems: "center" }}>
            <UrView>
              <UrButton
                onPress={() => {}}
                variant={"small"}
                label={"Active"}
                icon="settings"
              />
              <UrButton
                onPress={() => {}}
                variant={"small"}
                label={"Disabled"}
                icon="settings"
                disabled
              />
            </UrView>
          </View>
        </UrView>
        <UrView style={{ flexWrap: "wrap", alignItems: "center", gap: 12 }}>
          <UrView style={{ width: "100%" }}>
            <UrText type={"body"}>Icon button</UrText>
          </UrView>
          <UrView style={{ flexDirection: "row", gap: 12 }}>
            <UrButton
              onPress={() => {}}
              variant={"icon-primary"}
              label="Active"
              icon="settings"
            />
            <UrButton
              onPress={() => {}}
              variant={"icon-primary"}
              label="Disabled"
              icon="settings"
              disabled
            />
          </UrView>
          <UrView style={{ flexDirection: "row", gap: 12 }}>
            <UrButton
              onPress={() => {}}
              variant={"icon-secondary"}
              label="Active"
              icon="settings"
            />
            <UrButton
              onPress={() => {}}
              variant={"icon-secondary"}
              label="Disabled"
              icon="settings"
              disabled
            />
          </UrView>
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

export default ButtonsScreen;
