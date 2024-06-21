export * from './dropdown-types'
import { Dropdown as DropdownRoot, DropdownItem } from './Dropdown'

export const Dropdown = Object.assign(DropdownRoot, {
  Item: DropdownItem,
})
