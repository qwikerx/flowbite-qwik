import { SpinnerColor, SpinnerSize } from '~/components/Spinner/spinner-types'
import { Signal, useComputed$ } from '@builder.io/qwik'
import clsx from 'clsx'

const sizes: Record<SpinnerSize, string> = {
  0: 'w-0 h-0',
  0.5: 'w-0.5 h-0.5',
  1: 'w-1 h-1',
  1.5: 'w-1.5 h-1.5',
  10: 'w-10 h-10',
  11: 'w-11 h-11',
  12: 'w-12 h-12',
  2: 'w-2 h-2',
  2.5: 'w-2.5 h-2.5',
  3: 'w-3 h-3',
  4: 'w-4 h-4',
  5: 'w-5 h-5',
  6: 'w-6 h-6',
  7: 'w-7 h-7',
  8: 'w-8 h-8',
  9: 'w-9 h-9',
}

const colors: Record<SpinnerColor, string> = {
  blue: 'fill-blue-600',
  gray: 'fill-gray-600 dark:fill-gray-300',
  green: 'fill-green-500',
  pink: 'fill-pink-600',
  purple: 'fill-purple-600',
  red: 'fill-red-600',
  white: 'fill-white',
  yellow: 'fill-yellow-400',
}

export type UseSpinnerClassesProps = {
  color: SpinnerColor
  size: SpinnerSize
}

export function useSpinnerClasses(props: UseSpinnerClassesProps): { spinnerClasses: Signal<string> } {
  const sizeClasses = useComputed$(() => sizes[props.size])
  const colorClasses = useComputed$(() => colors[props.color])
  const bgColorClasses = useComputed$(() => 'text-gray-200 dark:text-gray-600')
  const animateClasses = useComputed$(() => 'animate-spin')
  const spinnerClasses = useComputed$(() => clsx(animateClasses.value, bgColorClasses.value, colorClasses.value, sizeClasses.value))

  return { spinnerClasses }
}
