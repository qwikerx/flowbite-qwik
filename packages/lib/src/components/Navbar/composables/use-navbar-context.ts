import { $, createContextId, useComputed$, useContext } from '@builder.io/qwik'

type NavbarContextProps = { isOpen: boolean }
export const NavbarContext = createContextId<NavbarContextProps>('Navbar')

export function useNavbarContext() {
  const navbarContext = useContext(NavbarContext)

  const isOpen = useComputed$(() => navbarContext.isOpen)
  const setIsOpen = $((value: boolean) => {
    navbarContext.isOpen = value
  })

  return {
    isOpen,
    setIsOpen,
  }
}
