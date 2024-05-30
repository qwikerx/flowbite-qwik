import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useNavbarContext } from '~/components/Navbar/composables/use-navbar-context'

type NavbarCollapseProps = PropsOf<'div'>

export const NavbarCollapse = component$<NavbarCollapseProps>(({ class: classNames, ...props }) => {
  const { isOpen } = useNavbarContext()

  return (
    <div class={twMerge('w-full md:block md:w-auto', !isOpen.value ? 'hidden' : '', clsx(classNames))} {...props}>
      <ul class="mt-4 flex items-center flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
        <Slot />
      </ul>
    </div>
  )
})
