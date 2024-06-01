import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import { ReactNode } from "react";

import { Colors } from "../../utils";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

// export default MaterialTopTabs;
export const UrTabsScreen = MaterialTopTabs.Screen;

const UrTabs = ({ children }: { children: ReactNode }) => {
  return (
    <MaterialTopTabs
      screenOptions={{
        // animationEnabled: false,
        tabBarStyle: {},
        tabBarContentContainerStyle: {},
        tabBarIndicatorContainerStyle: {},
        tabBarItemStyle: {
          borderBottomColor: Colors.grey3,
          borderBottomWidth: 1,
          paddingHorizontal: 0,
        },
        tabBarIndicatorStyle: {
          position: "absolute",
          bottom: 0,
          backgroundColor: Colors.flameRed,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          height: 4,
        },
        // tabBarLabel: (props) => {
        //   return (
        //     <UrText
        //       bold
        //       style={{ color: props.focused ? Colors.flameRed : Colors.grey2 }}
        //     >
        //       {props.children}
        //     </UrText>
        //   );
        // },
      }}
    >
      {children}
    </MaterialTopTabs>
  );
};

export default UrTabs;
