import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getAnalytics,
  logScreenView,
  setAnalyticsCollectionEnabled,
} from "@react-native-firebase/analytics";

import type {
  TGetFirebaseAnalyticsState,
  TSetFirebaseAnalyticsState,
  TTrackScreenView,
} from "./types";

import { getFirebaseApp } from "../app";
import { STORAGE_KEY } from "./constants";

export const getFirebaseAnalyticsState: TGetFirebaseAnalyticsState = async () => {
  const value = await AsyncStorage.getItem(STORAGE_KEY);

  switch (value) {
    case "disabled":
    case "enabled":
      return value;

    default:
      return "unset";
  }
};

export const setFirebaseAnalyticsState: TSetFirebaseAnalyticsState = async (state) => {
  if (process.env.NODE_ENV === "production") {
    const firebaseApp = getFirebaseApp();
    const firebaseAnalytics = getAnalytics(firebaseApp);

    await setAnalyticsCollectionEnabled(firebaseAnalytics, state === "enabled");
  }

  await AsyncStorage.setItem(STORAGE_KEY, state);
};

export const trackScreenView: TTrackScreenView = async (pathnameWithSearchParams) => {
  if (process.env.NODE_ENV !== "production") return;

  const firebaseApp = getFirebaseApp();
  const firebaseAnalytics = getAnalytics(firebaseApp);

  await logScreenView(firebaseAnalytics, {
    screen_class: pathnameWithSearchParams,
    screen_name: pathnameWithSearchParams,
  });
};
