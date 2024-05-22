declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    snap?: {
      show: () => void;
      hide: () => void;
      pay: (token: string) => void;
    };
  }
}

export {};
