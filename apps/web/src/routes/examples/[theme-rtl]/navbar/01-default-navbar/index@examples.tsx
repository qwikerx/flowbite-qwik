/**
 * title: Default Navbar
 * description: Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.
 */

import { component$ } from '@builder.io/qwik'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-qwik'
import { Link, StaticGenerateHandler } from '@builder.io/qwik-city'

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

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const themes = ['blue', 'green', 'red', 'yellow', 'purple', 'pink']
  const rtls = ['rtl', 'ltr']

  return {
    params: themes.flatMap((theme) => rtls.map((rtl) => ({ 'theme-rtl': `${theme}-${rtl}` }))),
  }
}
