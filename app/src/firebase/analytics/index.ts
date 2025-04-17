import { useGlobalSearchParams, usePathname } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { TFirebaseAnalyticsState, TUseFirebaseAnalyticsState } from "./types";

import { getFirebaseAnalyticsState, setFirebaseAnalyticsState, trackScreenView } from "./api";

export const useFirebaseAnalytics: TUseFirebaseAnalyticsState = () => {
  const pathname = usePathname();
  const searchParams = useGlobalSearchParams();

  const pathnameWithSearchParams = useMemo(() => {
    const params = new URLSearchParams();

    for (const key in searchParams) {
      const value = searchParams[key];
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, item));
      } else {
        params.append(key, value);
      }
    }

    return params.toString() ? `${pathname}?${params.toString()}` : pathname;
  }, [pathname, searchParams]);

  const [state, setState] = useState<TFirebaseAnalyticsState>();

  const handleSetState = useCallback(async (state: TFirebaseAnalyticsState) => {
    setState(state);
    await setFirebaseAnalyticsState(state);
  }, []);

  useEffect(() => {
    getFirebaseAnalyticsState().then(handleSetState);
  }, []);

  useEffect(() => {
    trackScreenView(pathnameWithSearchParams);
  }, [pathnameWithSearchParams]);

  return [state, handleSetState];
};
