import type { QRL } from '@builder.io/qwik'
import { createContextId } from '@builder.io/qwik'

export const TOAST_CONTEXT = 'TOAST_CONTEXT'

export type ToastCriticism = 'SUCCESS' | 'WARNING' | 'ERROR'

export interface ToastEntry {
  criticism: ToastCriticism
  message: string
}

export interface Toast extends ToastEntry {
  id: string
}

export interface ToastState {
  toasts: Toast[]
  add$: QRL<(toast: ToastEntry) => void>
}

export default createContextId<ToastState>(TOAST_CONTEXT)
