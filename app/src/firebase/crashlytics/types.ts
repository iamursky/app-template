export type TFirebaseCrashlyticsState = "disabled" | "enabled" | "unset";

export type TGetFirebaseCrashlyticsState = () => Promise<TFirebaseCrashlyticsState>;

export type TSetFirebaseCrashlyticsState = (state: TFirebaseCrashlyticsState) => Promise<void>;

export type TUseFirebaseCrashlytics = () => [
  state: TFirebaseCrashlyticsState | undefined,
  setState: (state: TFirebaseCrashlyticsState) => Promise<void>,
];
