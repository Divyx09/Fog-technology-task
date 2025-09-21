import React from 'react';
import { useToast, toast } from '../../hooks/use-toast';

export const ToastDemo: React.FC = () => {
  const { addToast, clearAllToasts, toasts } = useToast();

  const handleDefaultToast = () => {
    addToast({
      title: 'Default Toast',
      description: 'This is a default toast message.',
      variant: 'default'
    });
  };

  const handleSuccessToast = () => {
    addToast({
      title: 'Success!',
      description: 'Operation completed successfully.',
      variant: 'success'
    });
  };

  const handleErrorToast = () => {
    addToast({
      title: 'Error Occurred',
      description: 'Something went wrong. Please try again.',
      variant: 'error'
    });
  };

  const handleWarningToast = () => {
    addToast({
      title: 'Warning',
      description: 'Please check your input before proceeding.',
      variant: 'warning'
    });
  };

  const handleInfoToast = () => {
    addToast({
      title: 'Information',
      description: 'Here is some useful information for you.',
      variant: 'info'
    });
  };

  const handleToastWithAction = () => {
    addToast({
      title: 'Action Required',
      description: 'Click the action button to proceed.',
      variant: 'info',
      action: {
        label: 'Take Action',
        onClick: () => {
          alert('Action taken!');
        }
      }
    });
  };

  const handlePersistentToast = () => {
    addToast({
      title: 'Persistent Toast',
      description: 'This toast will not auto-dismiss.',
      variant: 'warning',
      duration: 0 // 0 means no auto-dismiss
    });
  };

  const handleStandaloneToast = () => {
    toast.success('Standalone Toast', 'This toast was created using the standalone function.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Toast System Demo
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <button
              onClick={handleDefaultToast}
              className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Default Toast
            </button>
            
            <button
              onClick={handleSuccessToast}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Success Toast
            </button>
            
            <button
              onClick={handleErrorToast}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Error Toast
            </button>
            
            <button
              onClick={handleWarningToast}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Warning Toast
            </button>
            
            <button
              onClick={handleInfoToast}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Info Toast
            </button>
            
            <button
              onClick={handleToastWithAction}
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Toast with Action
            </button>
            
            <button
              onClick={handlePersistentToast}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Persistent Toast
            </button>
            
            <button
              onClick={handleStandaloneToast}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Standalone Toast
            </button>
            
            <button
              onClick={clearAllToasts}
              className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Clear All ({toasts.length})
            </button>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              New Toast System Features:
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Built from scratch with modern React patterns
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Five toast variants: Default, Success, Error, Warning, Info
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Smooth animations with slide-in/slide-out effects
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Auto-dismiss with configurable duration
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Support for persistent toasts (no auto-dismiss)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Action buttons with custom onClick handlers
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Proper close button event handling (preventDefault & stopPropagation)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Responsive design and accessibility support
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Portal-based rendering to avoid z-index issues
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Both hook-based and standalone function APIs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};