import { component$, PropsOf, Slot } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type JumbotronHeadingProps = PropsOf<'h1'> & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const JumbotronHeading = component$<JumbotronHeadingProps>(({ tag: Tag = 'h2', class: classNames, ...attrs }) => {
  return (
    <Tag
      {...attrs}
      class={twMerge([
        'mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white',
        clsx(classNames),
      ])}
    >
      <Slot />
    </Tag>
  )
})
