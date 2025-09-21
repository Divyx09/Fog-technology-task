import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react';
import { ToastData, ToastContextType } from '../types';

// Action types for toast reducer
type ToastAction =
  | { type: 'ADD_TOAST'; payload: ToastData }
  | { type: 'REMOVE_TOAST'; payload: string }
  | { type: 'CLEAR_ALL_TOASTS' };

// Toast reducer
const toastReducer = (state: ToastData[], action: ToastAction): ToastData[] => {
  switch (action.type) {
    case 'ADD_TOAST':
      // Limit to maximum 5 toasts
      const newToasts = [action.payload, ...state];
      return newToasts.slice(0, 5);
    
    case 'REMOVE_TOAST':
      return state.filter(toast => toast.id !== action.payload);
    
    case 'CLEAR_ALL_TOASTS':
      return [];
    
    default:
      return state;
  }
};

// Create toast context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Generate unique toast ID
const generateToastId = (): string => {
  return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Toast provider component
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  // Add toast function
  const addToast = useCallback((toastData: Omit<ToastData, 'id'>): string => {
    const id = generateToastId();
    const duration = toastData.duration ?? 5000; // Default 5 seconds

    const toast: ToastData = {
      ...toastData,
      id,
      duration,
    };

    dispatch({ type: 'ADD_TOAST', payload: toast });

    // Auto-remove toast after duration (if duration is not 0)
    if (duration > 0) {
      setTimeout(() => {
        dispatch({ type: 'REMOVE_TOAST', payload: id });
      }, duration);
    }

    return id;
  }, []);

  // Listen for global toast events
  useEffect(() => {
    const handleToastEvent = (event: CustomEvent) => {
      addToast(event.detail);
    };

    window.addEventListener('toast', handleToastEvent as EventListener);
    return () => {
      window.removeEventListener('toast', handleToastEvent as EventListener);
    };
  }, [addToast]);

  // Remove toast function
  const removeToast = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_TOAST', payload: id });
  }, []);

  // Clear all toasts function
  const clearAllToasts = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL_TOASTS' });
  }, []);

  const contextValue: ToastContextType = {
    toasts,
    addToast,
    removeToast,
    clearAllToasts,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};

// Custom hook to use toast context
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Convenience function for quick toast creation
export const toast = {
  success: (title: string, description?: string, duration?: number) => {
    const context = React.useContext(ToastContext);
    if (!context) {
      console.warn('Toast called outside of ToastProvider');
      return '';
    }
    return context.addToast({ title, description, variant: 'success', duration });
  },
  
  error: (title: string, description?: string, duration?: number) => {
    const context = React.useContext(ToastContext);
    if (!context) {
      console.warn('Toast called outside of ToastProvider');
      return '';
    }
    return context.addToast({ title, description, variant: 'error', duration });
  },
  
  warning: (title: string, description?: string, duration?: number) => {
    const context = React.useContext(ToastContext);
    if (!context) {
      console.warn('Toast called outside of ToastProvider');
      return '';
    }
    return context.addToast({ title, description, variant: 'warning', duration });
  },
  
  info: (title: string, description?: string, duration?: number) => {
    const context = React.useContext(ToastContext);
    if (!context) {
      console.warn('Toast called outside of ToastProvider');
      return '';
    }
    return context.addToast({ title, description, variant: 'info', duration });
  },
  
  default: (title: string, description?: string, duration?: number) => {
    const context = React.useContext(ToastContext);
    if (!context) {
      console.warn('Toast called outside of ToastProvider');
      return '';
    }
    return context.addToast({ title, description, variant: 'default', duration });
  },
};