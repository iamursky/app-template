import { clsx } from "clsx";
import { SafeAreaView as RNSaveAreaView } from "react-native-safe-area-context";

import { TScreen } from "./types";

export const Screen: TScreen = ({ className, ...props }) => (
  <RNSaveAreaView className={clsx("screen", className)} {...props} />
);
