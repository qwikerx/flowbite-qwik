import { $, createContextId, useComputed$, useContext } from '@builder.io/qwik'
import { NavbarTheme } from '~/components/Navbar/Navbar'

type NavbarContextProps = { isOpen: boolean; theme?: NavbarTheme }
export const navbarContext = createContextId<NavbarContextProps>('FLOWBITE_QWIK_NAVBAR_CONTEXT')

export function useNavbarContext() {
  const state = useContext(navbarContext)

  const isOpen = useComputed$(() => state.isOpen)
  const setIsOpen = $((value: boolean) => {
    state.isOpen = value
  })

  const theme = useComputed$(() => state.theme)

  return {
    isOpen,
    setIsOpen,
    theme,
  }
}
