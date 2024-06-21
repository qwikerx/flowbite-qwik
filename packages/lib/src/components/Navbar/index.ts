import { Navbar as NavbarRoot } from './Navbar'
import { NavbarBrand } from './NavbarBrand'
import { NavbarCollapse } from './NavbarCollapse'
import { NavbarToggle } from './NavbarToggle'
import { NavbarLink } from './NavbarLink'

export const Navbar = Object.assign(NavbarRoot, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Toggle: NavbarToggle,
  Link: NavbarLink,
})
