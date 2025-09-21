import React from 'react';
import { createPortal } from 'react-dom';
import { useToast } from '../../context/ToastContext';
import { Toast } from './toast';

export const Toaster: React.FC = () => {
  const { toasts, removeToast } = useToast();

  // Don't render anything if no toasts
  if (toasts.length === 0) {
    return null;
  }

  return createPortal(
    <div
      className="fixed top-4 right-4 z-[9999] flex flex-col space-y-3 pointer-events-none"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast toast={toast} onRemove={removeToast} />
        </div>
      ))}
    </div>,
    document.body
  );
};