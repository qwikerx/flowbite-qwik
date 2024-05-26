import { component$, useComputed$, Signal, useSignal, QRL, useTask$, ClassList } from '@builder.io/qwik'
import { InputSize } from '../Input/input-types'
import { useToggleClasses } from './composables/use-toggle-classes'

type ToggleProps = {
  color?: string
  disabled?: boolean
  label?: string
  'bind:checked'?: Signal<boolean>
  size?: InputSize
  onChange$?: QRL<(value: boolean) => void>
  class?: ClassList
}

export const Toggle = component$<ToggleProps>(
  ({
    size = 'md' as InputSize,
    label = '',
    color = '',
    disabled = false,
    'bind:checked': bindChecked = useSignal(false),
    onChange$,
    class: classNames,
  }) => {
    const { labelClasses, toggleSize, toggleClasses, toggleColor, toggleBallClasses } = useToggleClasses(
      useComputed$(() => size),
      useComputed$(() => color),
    )

    useTask$(({ track }) => {
      track(bindChecked)

      if (onChange$) {
        onChange$(bindChecked.value)
      }
    })

    return (
      <label class={[classNames, labelClasses.value]}>
        <input bind:checked={bindChecked} type="checkbox" class="peer sr-only" disabled={disabled} />
        <span class={[toggleClasses.value, toggleSize.value, toggleColor.value]} />
        <span class={toggleBallClasses.value}>{label}</span>
      </label>
    )
  },
)
