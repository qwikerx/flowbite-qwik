import { QRL, Slot, component$, useComputed$, PropsOf, Signal, JSXChildren } from '@builder.io/qwik'
import clsx from 'clsx'
import { useCheckboxClasses } from './composables/use-checkbox-classes'
import { twMerge } from 'tailwind-merge'
import { FlowbiteTheme } from '../FlowbiteThemable'

type CheckboxProps = Omit<PropsOf<'input'>, 'children'> & {
  color?: FlowbiteTheme
  'bind:checked'?: Signal<boolean | undefined>
  onChange$?: QRL<(checked: boolean, value: string) => void>
  children?: JSXChildren
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Checkbox = component$<CheckboxProps>(({ color, class: classNames, onChange$, children, ...props }) => {
  const internalColor = useComputed$(() => color)
  const { checkboxClasses, labelClasses } = useCheckboxClasses(internalColor)

  return (
    <label class={['flex items-center justify-start gap-3', labelClasses.value]}>
      <input
        {...props}
        type="checkbox"
        bind:checked={props['bind:checked']}
        class={twMerge(checkboxClasses.value, clsx(classNames))}
        // FIXME : qwik issue, error if onInput$ is not redefined with the "if"
        onInput$={(_, elm) => {
          if (props['bind:checked']) {
            props['bind:checked'].value = elm.checked
          }
        }}
        onChange$={(_, elm) => {
          onChange$?.(elm.checked, elm.value)
        }}
      />
      <Slot />
    </label>
  )
})
