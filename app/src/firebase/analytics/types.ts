export type TFirebaseAnalyticsState = "disabled" | "enabled" | "unset";

export type TGetFirebaseAnalyticsState = () => Promise<TFirebaseAnalyticsState>;

export type TSetFirebaseAnalyticsState = (state: TFirebaseAnalyticsState) => Promise<void>;

export type TTrackScreenView = (pathnameWithSearchParams: string) => Promise<void>;

export type TUseFirebaseAnalyticsState = () => [
  state: TFirebaseAnalyticsState | undefined,
  setState: (state: TFirebaseAnalyticsState) => Promise<void>,
];
