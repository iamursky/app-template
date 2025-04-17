import type { ConfigContext, ExpoConfig } from "expo/config";

const APP_NAME: string = "xxx";
const APP_PACKAGE_NAME_ANDROID: string = "xxx.xxx.xxx";
const APP_PACKAGE_NAME_IOS: string = "xxx.xxx.xxx";
const APP_SCHEME: string = "xxx";
const APP_SLUG: string = "xxx";
const EAS_OWNER: string = "xxx";
const EAS_PROJECT_ID: string = "xxx-xxx-xxx-xxx-xxx";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  android: {
    adaptiveIcon: {
      backgroundColor: "#ffffff",
      foregroundImage: "./assets/images/adaptive-icon.png",
    },
    googleServicesFile: process.env.GOOGLE_SERVICES_FILE_ANDROID,
    package: APP_PACKAGE_NAME_ANDROID,
  },
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: EAS_PROJECT_ID,
    },
    router: {
      origin: false,
    },
  },
  icon: "./assets/images/icon.png",
  ios: {
    bundleIdentifier: APP_PACKAGE_NAME_IOS,
    googleServicesFile: process.env.GOOGLE_SERVICES_FILE_IOS,
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
    supportsTablet: true,
  },
  name: APP_NAME,
  newArchEnabled: true,
  orientation: "portrait",
  owner: EAS_OWNER,
  plugins: [
    "expo-router",
    [
      "expo-build-properties",
      {
        ios: {
          useFrameworks: "static",
        },
      },
    ],
    [
      "expo-splash-screen",
      {
        backgroundColor: "#ffffff",
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
      },
    ],
    "@react-native-firebase/app",
    "@react-native-firebase/crashlytics",
    "@react-native-firebase/perf",
  ],
  runtimeVersion: {
    policy: "appVersion",
  },
  scheme: APP_SCHEME,
  slug: APP_SLUG,
  updates: {
    url: `https://u.expo.dev/${EAS_PROJECT_ID}`,
  },
  userInterfaceStyle: "light",
  version: "1.0.0",
  web: {
    favicon: "./assets/images/favicon.png",
    output: "server",
  },
});
