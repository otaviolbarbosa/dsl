// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { Ionicons, Entypo } from '@expo/vector-icons';

import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={24} style={[{ marginBottom: -3 }, style]} {...rest} />;
}