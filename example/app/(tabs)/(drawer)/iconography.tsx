import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { UrIcon, UrText, UrView } from "uride-dsl";
import { IconName } from "uride-dsl/components/UrIcon/helper";
import { Colors } from "uride-dsl/utils";
import { snakeToNormal } from "uride-dsl/utils/text";

import ParallaxScrollView from "@/components/ParallaxScrollView";

const ICON_NAMES: IconName[] = [
  "abc",
  "apple",
  "apple_pay",
  "auto_withdraw",
  "award",
  "back_seats",
  "bill",
  "business",
  "calendar",
  "camera_b",
  "camera_c",
  "camera_d",
  "canada",
  "cancel",
  "car_back",
  "car_charge",
  "car_child",
  "car_fuel",
  "car_mileage",
  "car_pet",
  "car_seat",
  "car_trunk",
  "car_type",
  "card",
  "card_a",
  "card_c",
  "cash",
  "change",
  "chat",
  "chat_a",
  "check",
  "check_a",
  "chevron_down",
  "chevron_up",
  "close",
  "close_a",
  "color",
  "coordinates",
  "copy",
  "correct",
  "delete",
  "doc",
  "documents_verified",
  "dollar",
  "dot",
  "double_check",
  "download",
  "drag_area",
  "edit",
  "email",
  "empty",
  "eye",
  "eye_closed",
  "facebook",
  "favorites",
  "favorites_a",
  "favorites_b",
  "first_name",
  "front_seats",
  "goal",
  "google",
  "google_pay",
  "image",
  "information",
  "information_a",
  "last_name",
  "licence_plate",
  "loading",
  "location_pin",
  "location_pin_a",
  "logout",
  "menu",
  "minus",
  "more",
  "multi_stops",
  "navigation",
  "no_cash",
  "notification",
  "number",
  "passport",
  "password",
  "pause",
  "paypal",
  "phone_a",
  "phone_b",
  "phone_c",
  "plus",
  "plus_a",
  "point_a",
  "point_b",
  "point_c",
  "post",
  "profile",
  "progress",
  "promo",
  "promo_applied",
  "question",
  "repeat",
  "report",
  "return",
  "reverse",
  "ride",
  "route",
  "search",
  "settings",
  "settings_a",
  "share",
  "share_a",
  "share_b",
  "shift_1",
  "shift_2",
  "shift_3",
  "smile",
  "sos",
  "stamp",
  "star",
  "star_a",
  "star_b",
  "stats",
  "success",
  "success_a",
  "support",
  "thumb_down",
  "thumb_down_a",
  "thumb_down_b",
  "thumb_up",
  "thumb_up_a",
  "thumb_up_b",
  "timer",
  "trainings",
  "trainings_completed",
  "uncheck",
  "vibro",
  "video",
  "voice",
  "wallet",
  "warning",
  "warning_a",
  "warning_b",
  "wheel",
];

const IconographyScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.blue2, dark: Colors.blue }}
      headerImage={
        <Ionicons size={310} name="apps" style={styles.headerImage} />
      }
    >
      <UrView style={{ padding: 20 }}>
        <UrText type="headline" style={{ marginBottom: 8 }}>
          Uride 2.0 Iconography
        </UrText>
      </UrView>
      <UrView
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {ICON_NAMES.map((name) => (
          <UrView
            key={`icon-container-${name}`}
            style={{
              alignItems: "center",
              gap: 4,
              width: "50%",
              paddingVertical: 8,
            }}
          >
            <UrIcon name={name} size="xl" />
            <UrView style={{ alignItems: "center" }}>
              <UrText
                type="body_small"
                bold
                style={{ textTransform: "capitalize" }}
              >
                {snakeToNormal(name)}
              </UrText>
              <UrText type="body_small">Code: {name}</UrText>
            </UrView>
          </UrView>
        ))}
      </UrView>
    </ParallaxScrollView>
  );
};

export default IconographyScreen;

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
