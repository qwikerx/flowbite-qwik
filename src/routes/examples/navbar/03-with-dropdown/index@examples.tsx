/**
 * title: Navbar with dropdown
 * description: This example can be used to show a secondary dropdown menu when clicking on one of the navigation links.
 */
import { component$ } from '@builder.io/qwik'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from '~/components/Navbar'
import { Link } from '@builder.io/qwik-city'
import { Dropdown, DropdownItem } from '~/components/Dropdown/Dropdown'

export default component$(() => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">
        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>
      </NavbarBrand>
      <div class="flex md:order-2">
        <Dropdown as={<img class="w-8 h-8 rounded-full" src="/profile-picture.jpg" alt="user photo" />}>
          <DropdownItem header>
            <span class="block text-sm">Bonnie Green</span>
            <span class="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownItem>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/navbars" active>
          Home
        </NavbarLink>
        <NavbarLink href="/navbars">About</NavbarLink>
        <NavbarLink href="/navbars" as="div">
          <Dropdown label="Services" inline>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
          </Dropdown>
        </NavbarLink>
        <NavbarLink href="/navbars">Pricing</NavbarLink>
        <NavbarLink href="/navbars">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
})
