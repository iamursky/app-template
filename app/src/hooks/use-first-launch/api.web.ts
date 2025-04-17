import type { TGetIsFirstLaunch, TSetIsFirstLaunch } from "./types";

import { STORAGE_KEY } from "./constants";

export const getIsFirstLaunch: TGetIsFirstLaunch = async () => {
  return localStorage.getItem(STORAGE_KEY) !== "false";
};

export const setIsFirstLaunch: TSetIsFirstLaunch = async (state) => {
  localStorage.setItem(STORAGE_KEY, `${state}`);
};
