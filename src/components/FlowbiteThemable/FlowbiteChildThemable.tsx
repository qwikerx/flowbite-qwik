import { PropsOf, Slot, component$ } from '@builder.io/qwik'
import { ThemableChildrenApply } from './flowbite-themable-type'
import { useFlowbiteThemableChildClasses } from './composables/use-flowbite-themable-child-classes'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type FlowbiteChildThemableProps = PropsOf<'div'> & {
  apply: ThemableChildrenApply[]
  tag?: 'div' | 'section'
}

export const FlowbiteChildThemable = component$<FlowbiteChildThemableProps>(({ tag = 'div', apply, ...attrs }) => {
  const { classes } = useFlowbiteThemableChildClasses({
    apply,
  })

  const Tag = tag

  return (
    <Tag class={twMerge([classes.value, clsx(attrs.class)])}>
      <Slot />
    </Tag>
  )
})
