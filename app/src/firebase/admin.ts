import { initializeApp } from "firebase-admin";

export function getFirebaseAdminApp() {
  return initializeApp({
    credential: process.env.GOOGLE_SERVICES_FILE_ADMIN
      ? JSON.parse(process.env.GOOGLE_SERVICES_FILE_ADMIN)
      : undefined,
    databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  });
}
