import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, AlertCircle, Info, XCircle, X } from "lucide-react";
import "./Toast.scss";

export type ToastVariant = "success" | "error" | "info" | "warning";

export interface ToastItem {
  id: string;
  message: string;
  variant: ToastVariant;
  duration: number;
}

export interface ToastContextValue {
  toast: (message: string, variant?: ToastVariant, duration?: number) => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}

const variantConfig: Record<
  ToastVariant,
  { icon: React.ElementType; color: string; bg: string }
> = {
  success: { icon: CheckCircle2, color: "#34D399", bg: "rgba(16, 185, 129, 0.12)" },
  error: { icon: XCircle, color: "#F87171", bg: "rgba(239, 68, 68, 0.12)" },
  info: { icon: Info, color: "#60A5FA", bg: "rgba(59, 130, 246, 0.12)" },
  warning: { icon: AlertCircle, color: "#FBBF24", bg: "rgba(245, 158, 11, 0.12)" },
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const toast = useCallback(
    (message: string, variant: ToastVariant = "info", duration: number = 3000) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const newToast: ToastItem = { id, message, variant, duration };
      setToasts((prev) => [...prev, newToast]);

      const timer = setTimeout(() => {
        dismiss(id);
      }, duration);
      timersRef.current.set(id, timer);
    },
    [dismiss]
  );

  const success = useCallback(
    (message: string, duration?: number) => toast(message, "success", duration),
    [toast]
  );
  const error = useCallback(
    (message: string, duration?: number) => toast(message, "error", duration),
    [toast]
  );
  const info = useCallback(
    (message: string, duration?: number) => toast(message, "info", duration),
    [toast]
  );
  const warning = useCallback(
    (message: string, duration?: number) => toast(message, "warning", duration),
    [toast]
  );

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current.clear();
    };
  }, []);

  const contextValue: ToastContextValue = {
    toast,
    success,
    error,
    info,
    warning,
    dismiss,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {createPortal(
        <div className="toast-container">
          {toasts.map((t) => {
            const config = variantConfig[t.variant];
            const Icon = config.icon;
            return (
              <div
                key={t.id}
                className={`toast-item toast-${t.variant}`}
                style={{ borderLeftColor: config.color }}
              >
                <div
                  className="toast-icon-wrapper"
                  style={{ backgroundColor: config.bg }}
                >
                  <Icon size={18} style={{ color: config.color }} />
                </div>
                <span className="toast-message">{t.message}</span>
                <button
                  type="button"
                  onClick={() => dismiss(t.id)}
                  className="toast-close-btn"
                  aria-label="Dismiss notification"
                >
                  <X size={14} />
                </button>
              </div>
            );
          })}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
