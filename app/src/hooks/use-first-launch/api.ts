import AsyncStorage from "@react-native-async-storage/async-storage";

import type { TGetIsFirstLaunch, TSetIsFirstLaunch } from "./types";

import { STORAGE_KEY } from "./constants";

export const getIsFirstLaunch: TGetIsFirstLaunch = async () => {
  return (await AsyncStorage.getItem(STORAGE_KEY)) !== "false";
};

export const setIsFirstLaunch: TSetIsFirstLaunch = async (state) => {
  await AsyncStorage.setItem(STORAGE_KEY, `${state}`);
};
