import { QRL, Slot, component$, useComputed$, PropsOf, JSXChildren, useSignal, useTask$ } from '@builder.io/qwik'
import clsx from 'clsx'
import { useCheckboxClasses } from './composables/use-checkbox-classes'
import { twMerge } from 'tailwind-merge'
import { FlowbiteTheme } from '../FlowbiteThemable'

type CheckboxProps = Omit<PropsOf<'input'>, 'children'> & {
  color?: FlowbiteTheme
  onChange$?: QRL<(checked: boolean, value: string) => void>
  children?: JSXChildren
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Checkbox = component$<CheckboxProps>(({ color, class: classNames, onChange$, children, ...rest }) => {
  const internalColor = useComputed$(() => color)
  const { checkboxClasses, labelClasses } = useCheckboxClasses(internalColor)

  const checked = useSignal(Boolean(rest.checked))
  useTask$(({ track }) => {
    const innerChecked = track(() => rest.checked)
    checked.value = Boolean(innerChecked)
  })

  return (
    <label class={['flex items-center justify-start gap-3', labelClasses.value]}>
      <input
        {...rest}
        type="checkbox"
        bind:checked={rest['bind:checked'] || checked}
        class={twMerge(checkboxClasses.value, clsx(classNames))}
        onChange$={(_, elm) => {
          onChange$?.(elm.checked, elm.value)
        }}
      />
      <Slot />
    </label>
  )
})
