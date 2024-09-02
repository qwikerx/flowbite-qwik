import { QRL, Slot, component$, useComputed$, PropsOf, Signal, JSXChildren, useSignal, useTask$ } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { FlowbiteTheme } from '../FlowbiteThemable'
import { useRadioClasses } from './composables/use-radio-classes'

type RadioProps = Omit<PropsOf<'input'>, 'children'> & {
  color?: FlowbiteTheme
  'bind:option'?: Signal<PropsOf<'input'>['value']>
  onChange$?: QRL<(checked: boolean, value: string) => void>
  children?: JSXChildren
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Radio = component$<RadioProps>(({ ['bind:option']: bindOption, color, children, class: classNames, onChange$, ...props }) => {
  const internalColor = useComputed$(() => color)
  const { radioClasses, labelClasses } = useRadioClasses(internalColor)

  const checked = useSignal(Boolean(props.checked) || Boolean(bindOption && props.value === bindOption.value))
  const option = bindOption || useSignal(props.value)
  useTask$(({ track }) => {
    const innerChecked = track(() => props.checked)
    const innerValue = track(() => props.value)
    const innerOption = track(() => bindOption)
    checked.value = Boolean(innerChecked) || Boolean(innerOption && innerValue === innerOption.value)
    option.value = innerOption?.value || props.value
  })

  return (
    <label class={['flex items-center justify-start gap-3', labelClasses.value]}>
      <input
        {...props}
        type="radio"
        bind:checked={props['bind:checked'] || checked}
        class={twMerge(radioClasses.value, clsx(classNames))}
        onChange$={(_, elm) => {
          option.value = props.value
          onChange$?.(elm.checked, elm.value)
        }}
      />
      <Slot />
    </label>
  )
})
