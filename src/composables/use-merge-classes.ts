import { twMerge } from 'tailwind-merge'
import { $ } from '@builder.io/qwik'

export const useMergeClasses = $((componentClasses: string | string[]): string => twMerge(componentClasses))
