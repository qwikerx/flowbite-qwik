import { PropsOf, Slot, component$ } from '@builder.io/qwik'
import { ThemableChildrenApply } from './type'
import { FlowbiteTheme } from './useFlowbiteThemable'
import { useFlowbiteThemableChildClasses } from './useFlowbiteThemableChildClasses'
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
