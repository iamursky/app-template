import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getCrashlytics,
  setCrashlyticsCollectionEnabled,
} from "@react-native-firebase/crashlytics";

import type { TGetFirebaseCrashlyticsState, TSetFirebaseCrashlyticsState } from "./types";

import { STORAGE_KEY } from "./constants";

export const getFirebaseCrashlyticsState: TGetFirebaseCrashlyticsState = async () => {
  const value = await AsyncStorage.getItem(STORAGE_KEY);

  switch (value) {
    case "disabled":
    case "enabled":
      return value;

    default:
      return "unset";
  }
};

export const setFirebaseCrashlyticsState: TSetFirebaseCrashlyticsState = async (state) => {
  if (process.env.NODE_ENV === "production") {
    const firebaseCrashlytics = getCrashlytics();
    await setCrashlyticsCollectionEnabled(firebaseCrashlytics, state === "enabled");
  }

  await AsyncStorage.setItem(STORAGE_KEY, state);
};
