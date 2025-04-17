export type TGetIsFirstLaunch = () => Promise<boolean>;

export type TSetIsFirstLaunch = (value: boolean) => Promise<void>;

export type TUseIsFirstLaunch = () => [
  isFirstLaunch: boolean | undefined,
  setIsFirstLaunch: (value: boolean) => Promise<void>,
];
