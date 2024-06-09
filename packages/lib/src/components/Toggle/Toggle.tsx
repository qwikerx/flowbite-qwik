import { component$, useComputed$, Signal, QRL, ClassList } from '@builder.io/qwik'
import { InputSize } from '../Input/input-types'
import { FlowbiteToggleColor, useToggleClasses } from './composables/use-toggle-classes'

type ToggleProps = {
  color?: FlowbiteToggleColor
  disabled?: boolean
  label?: string
  'bind:checked': Signal<boolean>
  size?: InputSize
  onChange$?: QRL<(value: boolean) => void>
  class?: ClassList
}

export const Toggle = component$<ToggleProps>(
  ({ size = 'md' as InputSize, label = '', color = 'default' as FlowbiteToggleColor, disabled = false, onChange$, class: classNames, ...props }) => {
    const { labelClasses, toggleSize, toggleClasses, toggleColor, toggleBallClasses } = useToggleClasses(
      useComputed$(() => size),
      useComputed$(() => color),
    )

    return (
      <label class={[classNames, labelClasses.value]}>
        <input
          bind:checked={props['bind:checked']}
          type="checkbox"
          class="peer sr-only"
          disabled={disabled}
          onChange$={() => {
            if (onChange$) {
              onChange$(props['bind:checked'].value)
            }
          }}
        />
        <span class={[toggleClasses.value, toggleSize.value, toggleColor.value]} />
        <span class={toggleBallClasses.value}>{label}</span>
      </label>
    )
  },
)
