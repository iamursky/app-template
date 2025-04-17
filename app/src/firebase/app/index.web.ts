import { type FirebaseApp, getApps, initializeApp } from "firebase/app";

export function getFirebaseApp(): FirebaseApp {
  return (
    getApps()[0] ??
    initializeApp({
      apiKey: `${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
      appId: `${process.env.EXPO_PUBLIC_FIREBASE_APP_ID}`,
      authDomain: `${process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
      databaseURL: `${process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL}`,
      measurementId: `${process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID}`,
      messagingSenderId: `${process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}`,
      projectId: `${process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID}`,
      storageBucket: `${process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
    })
  );
}
