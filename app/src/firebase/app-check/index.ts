import { useEffect, useState } from "react";

import type { TUseFirebaseAppCheck } from "./types";

import { initializeFirebaseAppCheck } from "./api";

export const useFirebaseAppCheck: TUseFirebaseAppCheck = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    initializeFirebaseAppCheck().then(() => setIsReady(true));
  }, []);

  return [isReady];
};
