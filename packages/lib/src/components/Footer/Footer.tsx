import { FunctionComponent, PropsOf } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type FooterProps = PropsOf<'footer'> & {
  bgDark?: boolean
  container?: boolean
}

export const Footer: FunctionComponent<FooterProps> = ({ bgDark = false, class: className, children, container = false, ...props }) => {
  return (
    <footer
      class={twMerge(
        'w-full rounded-lg bg-white shadow-sm dark:bg-gray-800 md:flex md:items-center md:justify-between',
        bgDark && 'bg-gray-800',
        container && 'w-full p-6',
        clsx(className),
      )}
      {...props}
    >
      {children}
    </footer>
  )
}
