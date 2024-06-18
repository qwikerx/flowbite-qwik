import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingProps = PropsOf<'h1'> & {
  tag?: HeadingTag
}

const tagSizeClasses: Record<string, string> = {
  h1: 'text-5xl font-extrabold',
  h2: 'text-4xl font-bold',
  h3: 'text-3xl font-bold',
  h4: 'text-2xl font-bold',
  h5: 'text-xl font-bold',
  h6: 'text-lg font-bold',
}

export const Heading = component$<HeadingProps>(({ class: className, tag: Tag = 'h1', ...attrs }) => {
  return (
    <Tag class={twMerge('leading-none tracking-tight text-gray-900 dark:text-white', tagSizeClasses[Tag], clsx(className))} {...attrs}>
      <Slot />
    </Tag>
  )
})
