type TransactionResult = {
  status_code: string;
  status_message: string;
  transaction_id: string;
  order_id: string;
  gross_amount: string;
  transaction_status: string;
  bank: string;
};

type SnapCallback = {
  onSuccess?: (result: TransactionResult) => void;
  onPending?: (result: TransactionResult) => void;
  onError?: (result: TransactionResult) => void;
  onClose?: () => void;
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    snap?: {
      show: () => void;
      hide: () => void;
      pay: (token: string, callback?: SnapCallback) => void;
    };
  }
}

export {};
