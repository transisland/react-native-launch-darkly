export interface LaunchDarklyUser {
    key: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    isAnonymous?: boolean;
  }

export function configure(apiKey: string, user: LaunchDarklyUser): Promise;
export function boolVariation(flagName: string, fallback: boolean, callback: (status: boolean) => any): boolean;
export function stringVariation(flagName: string, fallback: string, callback: (status: string) => void): string;
export function addFeatureFlagChangeListener(flagName: string, callback: (flagName: string) => void): void;
export function unsubscribe(): void;