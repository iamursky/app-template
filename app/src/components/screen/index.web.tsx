import { clsx } from "clsx";
import { View } from "react-native";

import type { TScreen } from "./types";

export const Screen: TScreen = ({ className, ...props }) => (
  <View className={clsx("screen", className)} {...props} />
);
