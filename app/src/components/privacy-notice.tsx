import { Link } from "@/components/link";
import { Text } from "react-native";

export const PrivacyNotice = () => (
  <Text className="text-style-tooltip text-center">
    By pressing Continue, you agree to the <Link href="/">Terms of Service</Link> and that you have
    read the <Link href="/">Privacy Policy</Link>
  </Text>
);
