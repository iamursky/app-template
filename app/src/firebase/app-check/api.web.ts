import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";

import type { TInitializeFirebaseAppCheck } from "./types";

import { getFirebaseApp } from "../app/index.web";

export const initializeFirebaseAppCheck: TInitializeFirebaseAppCheck = async () => {
  if (__DEV__) {
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = process.env.EXPO_PUBLIC_GCP_APP_CHECK_DEBUG_TOKEN;
  }

  const provider = new ReCaptchaEnterpriseProvider(
    `${process.env.EXPO_PUBLIC_FIREBASE_RECAPTCHA_SITE_KEY}`,
  );

  initializeAppCheck(getFirebaseApp(), {
    isTokenAutoRefreshEnabled: true,
    provider,
  });
};

declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: string;
  }
}
