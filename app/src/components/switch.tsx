import type { FC } from "react";
import type { SwitchProps } from "react-native";

import { Switch as RNSwitch, Text, View } from "react-native";

export type TSwitchProps = SwitchProps & {
  description?: string;
  title: string;
};

export const Switch: FC<TSwitchProps> = ({ description, title, ...props }) => {
  return (
    <View className="w-full flex-row gap-xs">
      <View className="flex-1 gap-xs">
        <Text className="text-style-p font-bold">{title}</Text>
        {description ? <Text className="text-style-p">{description}</Text> : null}
      </View>
      <RNSwitch
        // @ts-expect-error Incompatible types
        activeThumbColor="#ffffff"
        ios_backgroundColor="#eeeeee"
        thumbColor="#ffffff"
        trackColor={{ false: "#eeeeee", true: "#000000" }}
        {...props}
      />
    </View>
  );
};
