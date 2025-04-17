import type { FC } from "react";

import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const LoadingOverlay: FC = () => (
  <SafeAreaView className="flex-1 items-center justify-center bg-white">
    <ActivityIndicator size="large" />
  </SafeAreaView>
);
