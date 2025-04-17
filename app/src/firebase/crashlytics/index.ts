import { useCallback, useEffect, useState } from "react";

import type { TFirebaseCrashlyticsState, TUseFirebaseCrashlytics } from "./types";

import { getFirebaseCrashlyticsState, setFirebaseCrashlyticsState } from "./api";

export const useFirebaseCrashlytics: TUseFirebaseCrashlytics = () => {
  const [state, setState] = useState<TFirebaseCrashlyticsState>();

  const handleSetState = useCallback(async (state: TFirebaseCrashlyticsState) => {
    setState(state);
    await setFirebaseCrashlyticsState(state);
  }, []);

  useEffect(() => {
    getFirebaseCrashlyticsState().then(handleSetState);
  }, []);

  return [state, handleSetState];
};
