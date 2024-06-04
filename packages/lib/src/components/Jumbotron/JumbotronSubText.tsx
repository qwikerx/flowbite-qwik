import { component$, PropsOf, Slot } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type JumbotronSubTextProps = PropsOf<'p'>

export const JumbotronSubText = component$<JumbotronSubTextProps>(({ class: classNames, ...attrs }) => {
  return (
    <p {...attrs} class={twMerge(['mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400', clsx(classNames)])}>
      <Slot />
    </p>
  )
})
