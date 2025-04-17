import { useCallback, useEffect, useState } from "react";

import type { TUseIsFirstLaunch } from "./types";

import { getIsFirstLaunch, setIsFirstLaunch } from "./api";

export const useIsFirstLaunch: TUseIsFirstLaunch = () => {
  const [state, setState] = useState<boolean>();

  const handleSetIsFirstLaunch = useCallback(async (value: boolean) => {
    setState(value);
    await setIsFirstLaunch(value);
  }, []);

  useEffect(() => {
    getIsFirstLaunch().then(setState);
  }, []);

  return [state, handleSetIsFirstLaunch];
};
