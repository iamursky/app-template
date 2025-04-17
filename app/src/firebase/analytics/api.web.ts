import { getAnalytics, logEvent, setAnalyticsCollectionEnabled } from "firebase/analytics";

import type {
  TGetFirebaseAnalyticsState,
  TSetFirebaseAnalyticsState,
  TTrackScreenView,
} from "./types";

import { getFirebaseApp } from "../app/index.web";
import { STORAGE_KEY } from "./constants";

export const getFirebaseAnalyticsState: TGetFirebaseAnalyticsState = async () => {
  const value = localStorage.getItem(STORAGE_KEY);

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

    setAnalyticsCollectionEnabled(firebaseAnalytics, state === "enabled");
  }

  localStorage.setItem(STORAGE_KEY, state);
};

export const trackScreenView: TTrackScreenView = async (pathnameWithSearchParams) => {
  if (process.env.NODE_ENV !== "production") return;

  const firebaseApp = getFirebaseApp();
  const firebaseAnalytics = getAnalytics(firebaseApp);

  logEvent(firebaseAnalytics, "screen_view", {
    firebase_screen: pathnameWithSearchParams,
    firebase_screen_class: pathnameWithSearchParams,
  });
};
