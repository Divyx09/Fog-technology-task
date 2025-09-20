import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
} from "./toast"
import { useToast } from "../../hooks/use-toast"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]">
      {toasts.map(function (toast) {
        const { id, title, description, action, variant, ...props } = toast;
        return (
          <div
            key={id}
            className="relative group mb-2 transform transition-all duration-300 ease-in-out"
          >
            <Toast variant={variant} {...props}>
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              {action}
              <ToastClose onClick={() => dismiss(id)} />
            </Toast>
          </div>
        )
      })}
    </div>
  )
}