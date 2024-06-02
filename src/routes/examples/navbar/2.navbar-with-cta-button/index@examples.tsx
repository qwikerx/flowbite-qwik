/**
 * title: Navbar with CTA button
 * description: Use the following navbar element to show a call to action button alongside the logo and page links.
 */
import { component$ } from '@builder.io/qwik'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from '~/components/Navbar'
import { Link } from '@builder.io/qwik-city'
import { Button } from '~/components/Button/Button'

export default component$(() => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">
        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>
      </NavbarBrand>
      <div class="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/navbars" active>
          Home
        </NavbarLink>
        <NavbarLink href="/navbars">About</NavbarLink>
        <NavbarLink href="/navbars">Services</NavbarLink>
        <NavbarLink href="/navbars">Pricing</NavbarLink>
        <NavbarLink href="/navbars">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
})
