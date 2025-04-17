export type TInitializeFirebaseAppCheck = () => Promise<void>;

export type TUseFirebaseAppCheck = () => [isReady: boolean];
