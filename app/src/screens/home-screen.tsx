import type { FC } from "react";

import { Screen } from "@/components/screen";
import { Text, View } from "react-native";

export const HomeScreen: FC = () => {
  return (
    <Screen>
      <View className="min-h-fit flex-1">
        <Text className="text-style-h1">Home</Text>
      </View>
    </Screen>
  );
};
