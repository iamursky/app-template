export type TFirebasePerformanceState = "disabled" | "enabled" | "unset";

export type TGetFirebasePerformanceState = () => Promise<TFirebasePerformanceState>;

export type TSetFirebasePerformanceState = (state: TFirebasePerformanceState) => Promise<void>;

export type TUseFirebasePerformance = () => [
  state: TFirebasePerformanceState | undefined,
  setState: (state: TFirebasePerformanceState) => Promise<void>,
];
