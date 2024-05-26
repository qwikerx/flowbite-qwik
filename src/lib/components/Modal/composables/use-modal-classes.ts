import { Signal, useComputed$ } from '@builder.io/qwik'
import { ModalSize } from '~/lib/components/Modal/modal-types'

const sizeClasses: Record<ModalSize, string> = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
}

export function useModalClasses(size: Signal<ModalSize>, popup: Signal<boolean>) {
  const rootClasses = useComputed$(() => {
    return sizeClasses[size.value]
  })

  const footerClasses = useComputed$(() => {
    return popup ? 'border-b-0 p-2' : ''
  })

  return {
    rootClasses,
    footerClasses,
  }
}
