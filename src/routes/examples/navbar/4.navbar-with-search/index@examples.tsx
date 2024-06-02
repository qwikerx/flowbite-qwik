/**
 * title: Navbar with search
 * description: Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.
 */
import { component$, useSignal } from '@builder.io/qwik'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from '~/components/Navbar'
import { Link } from '@builder.io/qwik-city'
import { Input } from '~/components/Input/Input'
import { IconSearchOutline } from '~/components/Icon'

export default component$(() => {
  const searchValue = useSignal('')

  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">
        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>
      </NavbarBrand>
      <div class="flex md:order-2">
        <Input bind:value={searchValue} placeholder="Search ..." prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />} />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/navbars" active>
          Home
        </NavbarLink>
        <NavbarLink href="/navbars">About</NavbarLink>
        <NavbarLink href="/navbars">Services</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
})
