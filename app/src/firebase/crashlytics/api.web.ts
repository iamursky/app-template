import type { TGetFirebaseCrashlyticsState, TSetFirebaseCrashlyticsState } from "./types";

import { STORAGE_KEY } from "./constants";

export const getFirebaseCrashlyticsState: TGetFirebaseCrashlyticsState = async () => {
  const value = localStorage.getItem(STORAGE_KEY);

  switch (value) {
    case "disabled":
    case "enabled":
      return value;

    default:
      return "unset";
  }
};

export const setFirebaseCrashlyticsState: TSetFirebaseCrashlyticsState = async (state) => {
  // Crashlytics is no supported on web yet
  localStorage.setItem(STORAGE_KEY, state);
};
