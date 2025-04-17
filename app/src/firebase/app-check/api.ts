import { firebase, initializeAppCheck } from "@react-native-firebase/app-check";

import type { TInitializeFirebaseAppCheck } from "./types";

import { getFirebaseApp } from "../app";

export const initializeFirebaseAppCheck: TInitializeFirebaseAppCheck = async () => {
  const provider = firebase.appCheck().newReactNativeFirebaseAppCheckProvider();

  provider.configure({
    android: {
      debugToken: process.env.EXPO_PUBLIC_GCP_APP_CHECK_DEBUG_TOKEN,
      provider: __DEV__ ? "debug" : "playIntegrity",
    },
    apple: {
      debugToken: process.env.EXPO_PUBLIC_GCP_APP_CHECK_DEBUG_TOKEN,
      provider: __DEV__ ? "debug" : "appAttestWithDeviceCheckFallback",
    },
    isTokenAutoRefreshEnabled: true,
  });

  await initializeAppCheck(getFirebaseApp(), {
    isTokenAutoRefreshEnabled: true,
    provider,
  });
};
