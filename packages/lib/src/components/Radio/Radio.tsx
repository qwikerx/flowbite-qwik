import { ClassList, QRL, Slot, component$, useComputed$, Signal } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { FlowbiteTheme } from '../FlowbiteThemable'
import { useRadioClasses } from './composables/use-radio-classes'

type CheckboxProps = {
  disabled?: boolean
  name: string
  color?: FlowbiteTheme
  value: string
  class?: ClassList
  'bind:option': Signal<string | undefined>
  onChange$?: QRL<(value: string) => void>
}

export const Radio = component$<CheckboxProps>(({ disabled = false, color, name, class: classNames, onChange$, ...props }) => {
  const internalColor = useComputed$(() => color)
  const { radioClasses, labelClasses } = useRadioClasses(internalColor)

  return (
    <label class={['flex gap-3 items-center justify-start', labelClasses.value]}>
      <input
        type="radio"
        value={props.value}
        checked={props['bind:option'].value === props.value}
        name={name}
        disabled={disabled}
        class={twMerge(clsx(classNames), radioClasses.value)}
        onChange$={() => {
          props['bind:option'].value = props.value
          if (onChange$) {
            onChange$(props.value)
          }
        }}
      />
      <Slot />
    </label>
  )
})
