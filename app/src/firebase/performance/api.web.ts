import { getPerformance } from "firebase/performance";

import type { TGetFirebasePerformanceState, TSetFirebasePerformanceState } from "./types";

import { getFirebaseApp } from "../app/index.web";
import { STORAGE_KEY } from "./constants";

export const getFirebasePerformanceState: TGetFirebasePerformanceState = async () => {
  const value = localStorage.getItem(STORAGE_KEY);

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
    const performance = getPerformance(firebaseApp);

    performance.dataCollectionEnabled = state === "enabled";
  }

  localStorage.setItem(STORAGE_KEY, state);
};
