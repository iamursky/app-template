# Expo + Next.js App Template

## Tech Stack

### Expo

React Native has received strong web support over the past few years, eliminating the need to build separate apps for mobile and web. Using Expo to build a cross-platform app makes development faster and easier. [API Routes](https://docs.expo.dev/router/reference/api-routes/) are used to avoid directly accessing Firestore from the client. See the Firebase section below for more details.

### Next.js

Next.js is a powerful framework for building SEO-optimized websites and is used here for building landing pages.

### Firebase

Firebase is a backend service provided by Google that offers a wide range of functionality out of the box for authentication, database management, storage, analytics, crash reporting and other services. I chose it over Supabase because it grants access to the entire Google Cloud Platform ecosystem when needed, and I did not opt for AWS Amplify due to AWS’s higher complexity compared to Google Cloud Platform.

Note that the client app should not interact directly with Firestore. Instead, it should use [API Routes](https://docs.expo.dev/router/reference/api-routes/), through which the [Firebase Admin SDK](https://firebase.google.com/docs/reference/admin) performs sensitive operations such as reading from and writing to the database. This approach is more secure and offers better control over data flow. Firestore Security Rules should restrict all queries by default so that only the Admin SDK can access the database.

### Tailwind CSS / NativeWind

Tailwind CSS is a utility‑first framework that enables rapid UI development. Here, it’s used to style both the website and the mobile app. NativeWind brings Tailwind CSS to React Native, ensuring a consistent styling experience across platforms.

### Development Stack

- [TypeScript](https://www.typescriptlang.org/) as the programming language
- [Prettier](https://prettier.io/) for formating code according to the rules
- [ESLint](https://eslint.org/) for checking code quality and formatting

## Setting up services

1. Create a new Expo app in [Expo Console](https://expo.dev/)
2. Create a new iOS app in [Apple Developer Console](https://developer.apple.com/account/)
3. Create a new Android app in [Google Play Console](https://play.google.com/console)
4. Create a new Firebase project in [Firebase Console](https://console.firebase.google.com/)

### Setting up Firebase

1. Set up App Check following [App Attest](https://firebase.google.com/docs/app-check/ios/app-attest-provider), [DeviceCheck](https://firebase.google.com/docs/app-check/ios/devicecheck-provider), [App Integrity](https://firebase.google.com/docs/app-check/android/play-integrity-provider) and [Recaptcha](http://firebase.google.com/docs/app-check/web/recaptcha-enterprise-provider) guides
2. Create an App Check debug token for iOS, Android and web apps (use the same token for all platforms)
3. In project settings, download `google-services.json`, `GoogleService-Info.plist` and `service-account.json` files
4. Create Firestore database and find your [database url](https://firebase.google.com/docs/database/locations) for the next step
5. Add environment variables to [Expo](https://expo.dev/), mark them as Sensitive:
   - EXPO_PUBLIC_FIREBASE_API_KEY
   - EXPO_PUBLIC_FIREBASE_APP_CHECK_DEBUG_TOKEN
   - EXPO_PUBLIC_FIREBASE_APP_ID
   - EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN
   - EXPO_PUBLIC_FIREBASE_DATABASE_URL
   - EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
   - EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   - EXPO_PUBLIC_FIREBASE_PROJECT_ID
   - EXPO_PUBLIC_FIREBASE_RECAPTCHA_SITE_KEY
   - EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET
   - GOOGLE_SERVICES_FILE_ADMIN
   - GOOGLE_SERVICES_FILE_ANDROID
   - GOOGLE_SERVICES_FILE_IOS
6. Set values in the `app/app.config.ts` file

## App

### Running in Development Mode

1. Install dependencies

```bash
cd app
npm ci
```

2. Pull environment variables:

```bash
npx eas login
npm run pull-env
```

3. Start the development server and follow instructions in the terminal

```bash
npm run ios
# or
npm run android
# or
npm run web
```

## Website

### Running in Development Mode

1. Install dependencies

```bash
cd website
npm ci
```

2. Start the development server

```bash
npm run dev
```
