import { PropsOf } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { getChild } from '~/utils/getChild'
import { JumbotronSubText } from './JumbotronSubText'

type JumbotronProps = PropsOf<'div'> & {
  align?: 'center' | 'left' | 'right'
}

export const Jumbotron = ({ children, class: classNames, align = 'center', ...attrs }: JumbotronProps) => {
  getChild(children, [
    {
      component: JumbotronSubText,
      foundComponentCallback: (child) => {
        child.props.class = twMerge(clsx(child.props.class ?? ''), align === 'center' && 'lg:text-xl sm:px-16 lg:px-48')
      },
    },
  ])
  return (
    <div
      {...attrs}
      class={twMerge(
        'bg-white dark:bg-gray-900 py-8 lg:py-16 px-4 mx-auto max-w-screen-xl',
        clsx(classNames),
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        align === 'right' && 'text-right',
      )}
    >
      {children}
    </div>
  )
}
