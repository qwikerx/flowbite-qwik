/**
 * title: Default navbar
 * description: Use the default navbar component to showcase the logo and a list of menu items with links to other pages of your website by adding the <NavbarBrand> and <NavbarLink> components inside the <Navbar> component. On mobile device the navigation bar will be collapsed, and you will be able to use the hamburger menu to toggle the menu items by adding the <NavbarToggle> component.
 */
import { component$ } from '@builder.io/qwik'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from '~/components/Navbar'
import { Link } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Navbar fluid rounded separator>
      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">
        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/navbars" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/navbars">
          About
        </NavbarLink>
        <NavbarLink href="/navbars">Services</NavbarLink>
        <NavbarLink href="/navbars">Pricing</NavbarLink>
        <NavbarLink href="/navbars">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
})
