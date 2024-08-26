export type InputSize = 'sm' | 'md' | 'lg'

export const validationStatusMap = {
  Success: 'success',
  Error: 'error',
} as const

export type ValidationStatus = (typeof validationStatusMap)[keyof typeof validationStatusMap]
