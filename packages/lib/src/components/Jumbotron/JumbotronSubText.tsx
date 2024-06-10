import { component$, PropsOf, Slot } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type JumbotronSubTextProps = PropsOf<'h2'> & {
  tag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const JumbotronSubText = component$<JumbotronSubTextProps>(({ tag: Tag = 'h2', class: classNames, ...attrs }) => {
  return (
    <Tag {...attrs} class={twMerge(['mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400', clsx(classNames)])}>
      <Slot />
    </Tag>
  )
})
