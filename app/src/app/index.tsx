import { Button } from "@/components/button";
import { PrivacyNotice } from "@/components/privacy-notice";
import { Screen } from "@/components/screen";
import { Switch } from "@/components/switch";
import { useFirebaseAnalytics } from "@/firebase/analytics";
import { useFirebaseCrashlytics } from "@/firebase/crashlytics";
import { useFirebasePerformance } from "@/firebase/performance";
import { useIsFirstLaunch } from "@/hooks/use-first-launch";
import { HomeScreen } from "@/screens/home-screen";
import { Link as ExpoLink } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

type TScreenMode = "home" | "privacy-settings" | "welcome";

export default function IndexScreen() {
  const [, setIsFirstLaunch] = useIsFirstLaunch();
  const [analyticsState, setAnalyticsState] = useFirebaseAnalytics();
  const [crashlyticsState, setCrashlyticsState] = useFirebaseCrashlytics();
  const [performanceState, setPerformanceState] = useFirebasePerformance();

  const [screenMode, setScreenMode] = useState<TScreenMode>("welcome");

  const handlePressChangePrivacySettings = () => {
    setAnalyticsState("enabled");
    setCrashlyticsState("enabled");
    setPerformanceState("enabled");
    setScreenMode("privacy-settings");
  };

  const handlePressContinue = () => {
    setIsFirstLaunch(false);
    setScreenMode("home");
  };

  if (screenMode === "welcome") {
    return (
      <Screen>
        <View className="min-h-fit flex-1 gap-xl">
          <View className="gap-sm">
            <Text className="text-style-h1">App Template</Text>
          </View>
        </View>
        <View className="gap-xs">
          <Button onPress={handlePressChangePrivacySettings} variant="ghost">
            Change privacy settings
          </Button>
          <Button onPress={handlePressContinue}>Continue</Button>
          <PrivacyNotice />
        </View>
      </Screen>
    );
  }

  if (screenMode === "privacy-settings") {
    return (
      <Screen>
        <View className="min-h-fit flex-1 gap-xl">
          <View className="gap-sm">
            <Text className="text-style-h1">Privacy Settings</Text>
            <Text className="text-style-p">
              Select what you&apos;d like to send us to help improve the app. We value your privacy
              and do not use personal data.
            </Text>
          </View>
          <View className="gap-md">
            <Switch
              description="We track how users interact with our app to enhance its features."
              onValueChange={(value) => setAnalyticsState(value ? "enabled" : "disabled")}
              title="Analytics"
              value={analyticsState === "enabled"}
            />
            <Switch
              description="We collect crash reports to fix bugs and improve stability."
              onValueChange={(value) => setCrashlyticsState(value ? "enabled" : "disabled")}
              title="Crash Reports"
              value={crashlyticsState === "enabled"}
            />
            <Switch
              description="We monitor app performance to ensure it runs smoothly."
              onValueChange={(value) => setPerformanceState(value ? "enabled" : "disabled")}
              title="Performance Data"
              value={performanceState === "enabled"}
            />
          </View>
        </View>
        <View className="gap-xs">
          <ExpoLink asChild href="/">
            <Button onPress={handlePressContinue}>Continue</Button>
          </ExpoLink>
          <PrivacyNotice />
        </View>
      </Screen>
    );
  }

  return <HomeScreen />;
}
