import React, { useState, useEffect } from 'react';
import { X, CheckCircle, XCircle, AlertTriangle, Info, Bell } from 'lucide-react';
import { ToastData, ToastVariant } from '../../types';
import { cn } from '../../lib/utils';

interface ToastProps {
  toast: ToastData;
  onRemove: (id: string) => void;
}

// Toast variant styling configurations
const toastVariants: Record<ToastVariant, {
  containerClass: string;
  iconClass: string;
  icon: React.ComponentType<{ className?: string }>;
}> = {
  default: {
    containerClass: 'bg-white border-gray-200 text-gray-900',
    iconClass: 'text-gray-500',
    icon: Bell,
  },
  success: {
    containerClass: 'bg-green-50 border-green-200 text-green-900',
    iconClass: 'text-green-600',
    icon: CheckCircle,
  },
  error: {
    containerClass: 'bg-red-50 border-red-200 text-red-900',
    iconClass: 'text-red-600',
    icon: XCircle,
  },
  warning: {
    containerClass: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    iconClass: 'text-yellow-600',
    icon: AlertTriangle,
  },
  info: {
    containerClass: 'bg-blue-50 border-blue-200 text-blue-900',
    iconClass: 'text-blue-600',
    icon: Info,
  },
};

export const Toast: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const variant = toast.variant || 'default';
  const variantConfig = toastVariants[variant];
  const IconComponent = variantConfig.icon;

  // Animation effect on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Handle toast removal with animation
  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(toast.id);
    }, 300); // Wait for exit animation
  };

  // Handle close button click with proper event handling (following memory)
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    handleRemove();
  };

  // Handle action button click
  const handleActionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (toast.action) {
      toast.action.onClick();
      handleRemove();
    }
  };

  return (
    <div
      className={cn(
        'relative flex w-full max-w-sm items-start space-x-3 rounded-lg border p-4 shadow-lg transition-all duration-300 ease-in-out',
        variantConfig.containerClass,
        isVisible && !isRemoving
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0',
        isRemoving && 'scale-95'
      )}
      role="alert"
      aria-live="polite"
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <IconComponent className={cn('h-5 w-5', variantConfig.iconClass)} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {toast.title && (
          <p className="text-sm font-semibold leading-5">
            {toast.title}
          </p>
        )}
        {toast.description && (
          <p className={cn(
            'text-sm leading-5',
            toast.title ? 'mt-1' : '',
            'opacity-90'
          )}>
            {toast.description}
          </p>
        )}
        
        {/* Action button */}
        {toast.action && (
          <div className="mt-3">
            <button
              type="button"
              className={cn(
                'text-sm font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded',
                variant === 'success' && 'text-green-700 hover:text-green-800 focus:ring-green-500',
                variant === 'error' && 'text-red-700 hover:text-red-800 focus:ring-red-500',
                variant === 'warning' && 'text-yellow-700 hover:text-yellow-800 focus:ring-yellow-500',
                variant === 'info' && 'text-blue-700 hover:text-blue-800 focus:ring-blue-500',
                variant === 'default' && 'text-gray-700 hover:text-gray-800 focus:ring-gray-500'
              )}
              onClick={handleActionClick}
            >
              {toast.action.label}
            </button>
          </div>
        )}
      </div>

      {/* Close button with proper event handling */}
      <div className="flex-shrink-0">
        <button
          type="button"
          className={cn(
            'inline-flex rounded-md p-1.5 transition-colors hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2',
            variant === 'success' && 'text-green-500 hover:bg-green-100 focus:ring-green-500',
            variant === 'error' && 'text-red-500 hover:bg-red-100 focus:ring-red-500',
            variant === 'warning' && 'text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-500',
            variant === 'info' && 'text-blue-500 hover:bg-blue-100 focus:ring-blue-500',
            variant === 'default' && 'text-gray-400 hover:bg-gray-100 focus:ring-gray-500'
          )}
          onClick={handleCloseClick}
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};