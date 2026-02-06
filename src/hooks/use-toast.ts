import { useState } from "react"

export interface Toast {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

type ToastInput = Omit<Toast, "id">

// Standalone toast function for use outside of React components
let toastFn: (props: ToastInput) => { id: string; dismiss: () => void } = () => {
  console.warn("Toast not initialized yet")
  return { id: "", dismiss: () => {} }
}

export const toast = (props: ToastInput) => toastFn(props)

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const internalToast = ({ ...props }: ToastInput) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { id, ...props }
    setToasts((prev) => [...prev, newToast])
    
    // Auto remove toast after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)
    
    return {
      id,
      dismiss: () => setToasts((prev) => prev.filter((t) => t.id !== id)),
    }
  }

  // Update the global toast function
  toastFn = internalToast

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return {
    toast: internalToast,
    toasts,
    dismiss,
  }
}