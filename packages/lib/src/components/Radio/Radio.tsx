import { QRL, Slot, component$, useComputed$, PropsOf, Signal, JSXChildren } from '@builder.io/qwik'
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
export const Radio = component$<RadioProps>(({ color, children, class: classNames, onChange$, ...props }) => {
  const internalColor = useComputed$(() => color)
  const { radioClasses, labelClasses } = useRadioClasses(internalColor)

  return (
    <label class={['flex items-center justify-start gap-3', labelClasses.value]}>
      <input
        {...props}
        type="radio"
        checked={props['bind:option']?.value === props.value}
        class={twMerge(radioClasses.value, clsx(classNames))}
        onChange$={(_, elm) => {
          if (props['bind:option']) {
            props['bind:option'].value = props.value
          }
          onChange$?.(elm.checked, elm.value)
        }}
      />
      <Slot />
    </label>
  )
})
