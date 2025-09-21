import { useToast as useToastContext } from '../context/ToastContext';
import { ToastData } from '../types';

// Re-export the useToast hook from context for convenience
export const useToast = () => {
  const context = useToastContext();
  
  return {
    ...context,
    // Convenience methods with better API
    toast: (toastData: Omit<ToastData, 'id'>) => context.addToast(toastData),
    success: (title: string, description?: string) => 
      context.addToast({ title, description, variant: 'success' }),
    error: (title: string, description?: string) => 
      context.addToast({ title, description, variant: 'error' }),
    warning: (title: string, description?: string) => 
      context.addToast({ title, description, variant: 'warning' }),
    info: (title: string, description?: string) => 
      context.addToast({ title, description, variant: 'info' }),
  };
};

// Standalone toast function that can be used anywhere
export const toast = {
  success: (title: string, description?: string) => {
    // Create a temporary event to trigger toast
    const event = new CustomEvent('toast', {
      detail: { title, description, variant: 'success' }
    });
    window.dispatchEvent(event);
  },
  
  error: (title: string, description?: string) => {
    const event = new CustomEvent('toast', {
      detail: { title, description, variant: 'error' }
    });
    window.dispatchEvent(event);
  },
  
  warning: (title: string, description?: string) => {
    const event = new CustomEvent('toast', {
      detail: { title, description, variant: 'warning' }
    });
    window.dispatchEvent(event);
  },
  
  info: (title: string, description?: string) => {
    const event = new CustomEvent('toast', {
      detail: { title, description, variant: 'info' }
    });
    window.dispatchEvent(event);
  },
  
  default: (title: string, description?: string) => {
    const event = new CustomEvent('toast', {
      detail: { title, description, variant: 'default' }
    });
    window.dispatchEvent(event);
  },
};