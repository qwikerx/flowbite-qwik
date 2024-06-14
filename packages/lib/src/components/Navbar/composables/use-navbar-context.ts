import { $, createContextId, useComputed$, useContext } from '@builder.io/qwik'

type NavbarContextProps = { isOpen: boolean }
export const navbarContext = createContextId<NavbarContextProps>('FLOWBITE_NAVBAR_CONTEXT')

export function useNavbarContext() {
  const state = useContext(navbarContext)

  const isOpen = useComputed$(() => state.isOpen)
  const setIsOpen = $((value: boolean) => {
    state.isOpen = value
  })

  return {
    isOpen,
    setIsOpen,
  }
}
