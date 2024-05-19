import type { ButtonGradient, ButtonSize, ButtonVariant } from './button-types'
import type { SpinnerColor, SpinnerSize } from '../spinner/spinner-types'
import { Signal, useComputed$ } from '@builder.io/qwik'

export type UseButtonSpinnerProps = {
  outline: boolean
  size: ButtonSize
  color: ButtonVariant
  gradient?: ButtonGradient
}

export function useButtonSpinner(props: UseButtonSpinnerProps): {
  size: Signal<SpinnerSize>
  color: Signal<SpinnerColor>
} {
  const btnSizeSpinnerSizeMap: Record<ButtonSize, SpinnerSize> = {
    xs: '2.5',
    sm: '3',
    md: '4',
    lg: '5',
    xl: '6',
  }

  const size = useComputed$<SpinnerSize>(() => btnSizeSpinnerSizeMap[props.size])

  const color = useComputed$<SpinnerColor>(() => {
    if (!props.outline) return 'white'

    if (props.gradient) {
      if (props.gradient.includes('purple')) {
        return 'purple'
      } else if (props.gradient.includes('blue')) {
        return 'blue'
      } else if (props.gradient.includes('pink')) {
        return 'pink'
      } else if (props.gradient.includes('red')) {
        return 'red'
      }
      return 'white'
    }

    if (['alternative', 'dark', 'light'].includes(props.color)) {
      return 'white'
    } else if (props.color === 'default') {
      return 'blue'
    }
    return props.color as SpinnerColor
  })

  return {
    color,
    size,
  }
}
