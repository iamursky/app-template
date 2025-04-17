import { useCallback, useEffect, useState } from "react";

import type { TFirebasePerformanceState, TUseFirebasePerformance } from "./types";

import { getFirebasePerformanceState, setFirebasePerformanceState } from "./api";

export const useFirebasePerformance: TUseFirebasePerformance = () => {
  const [state, setState] = useState<TFirebasePerformanceState>();

  const handleSetState = useCallback(async (state: TFirebasePerformanceState) => {
    setState(state);
    await setFirebasePerformanceState(state);
  }, []);

  useEffect(() => {
    getFirebasePerformanceState().then(handleSetState);
  }, []);

  return [state, handleSetState];
};
