import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useNavbarContext } from '~/components/Navbar/composables/use-navbar-context'

type NavbarCollapseProps = PropsOf<'div'>

export const NavbarCollapse = component$<NavbarCollapseProps>(({ class: classNames, ...props }) => {
  const { isOpen } = useNavbarContext()

  return (
    <div class={twMerge('w-full md:block md:w-auto', !isOpen.value ? 'hidden' : 'z-10', clsx(classNames))} {...props}>
      <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
        <Slot />
      </ul>
    </div>
  )
})
