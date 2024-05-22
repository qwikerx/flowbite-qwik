import { PropsOf, Slot, component$ } from '@builder.io/qwik'
import { ThemableChildrenApply } from './flowbite-themable-type'
import { FlowbiteTheme } from './composables/use-flowbite-themable'
import { useFlowbiteThemableChildClasses } from './composables/use-flowbite-themable-child-classes'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type FlowbiteChildThemableProps = PropsOf<'div'> & {
  apply: ThemableChildrenApply[]
  tag?: string
  theme?: FlowbiteTheme
}

export const FlowbiteChildThemable = component$<FlowbiteChildThemableProps>(({ tag = 'div', apply, theme, ...attrs }) => {
  const { classes } = useFlowbiteThemableChildClasses({
    apply,
    theme,
  })

  const Tag = tag as any

  return (
    <Tag data-el="test" class={twMerge([classes.value, clsx(attrs.class)])}>
      <Slot />
    </Tag>
  )
})
