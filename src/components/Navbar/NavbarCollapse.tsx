import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useNavbarContext } from '~/components/Navbar/composables/use-navbar-context'

type NavbarCollapseProps = PropsOf<'div'>

export const NavbarCollapse = component$<NavbarCollapseProps>(({ class: classNames, ...props }) => {
  const { isOpen } = useNavbarContext()

  return (
    <div class={twMerge('w-full md:block md:w-auto', !isOpen.value ? 'hidden' : '', clsx(classNames))} {...props}>
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
        <Slot />
      </ul>
    </div>
  )
})
