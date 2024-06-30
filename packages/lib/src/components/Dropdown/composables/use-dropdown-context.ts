import { createContextId, useComputed$, useContext } from '@builder.io/qwik'
import { DropdownSize } from '~/components/Dropdown'

type DropdownContextProps = { size: DropdownSize; inline: boolean }
export const DropdownContext = createContextId<DropdownContextProps>('FLOWBITE_DROPDOWN_CONTEXT')

export function useDropdownContext() {
  const dropdownContext = useContext(DropdownContext)

  const size = useComputed$(() => dropdownContext.size)
  const inline = useComputed$(() => dropdownContext.inline)

  return {
    size,
    inline,
  }
}
