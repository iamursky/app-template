import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializePerformance } from "@react-native-firebase/perf";

import type { TGetFirebasePerformanceState, TSetFirebasePerformanceState } from "./types";

import { getFirebaseApp } from "../app";
import { STORAGE_KEY } from "./constants";

export const getFirebasePerformanceState: TGetFirebasePerformanceState = async () => {
  const value = await AsyncStorage.getItem(STORAGE_KEY);

  switch (value) {
    case "disabled":
    case "enabled":
      return value;

    default:
      return "unset";
  }
};

export const setFirebasePerformanceState: TSetFirebasePerformanceState = async (state) => {
  if (process.env.NODE_ENV === "production") {
    const firebaseApp = getFirebaseApp();

    await initializePerformance(firebaseApp, {
      dataCollectionEnabled: state === "enabled",
    });
  }

  await AsyncStorage.setItem(STORAGE_KEY, state);
};
