import { ClassList, QRL, Signal, Slot, component$, useComputed$ } from '@builder.io/qwik'
import clsx from 'clsx'
import { useCheckboxClasses } from './composables/use-checkbox-classes'
import { twMerge } from 'tailwind-merge'
import { FlowbiteTheme } from '../FlowbiteThemable'

type CheckboxProps = {
  name?: string
  value?: string | number
  disabled?: boolean
  color?: FlowbiteTheme
  'bind:checked': Signal<boolean>
  class?: ClassList
  onChange$?: QRL<(value: boolean) => void>
}

export const Checkbox = component$<CheckboxProps>(({ disabled = false, color, value, name, class: classNames, onChange$, ...props }) => {
  const internalColor = useComputed$(() => color)
  const { checkboxClasses, labelClasses } = useCheckboxClasses(internalColor)

  return (
    <label class={['flex gap-3 items-center justify-start', labelClasses.value]}>
      <input
        bind:checked={props['bind:checked']}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        class={twMerge(clsx(classNames), checkboxClasses.value)}
        onChange$={() => {
          if (onChange$) {
            onChange$(props['bind:checked'].value)
          }
        }}
      />
      <Slot />
    </label>
  )
})
