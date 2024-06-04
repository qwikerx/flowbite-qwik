import { FunctionComponent } from '@builder.io/qwik/jsx-runtime'
import { twMerge } from 'tailwind-merge'

export const FooterDivider: FunctionComponent = ({ class: className, ...props }) => {
  return <hr class={twMerge('my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8', className)} {...props} />
}
