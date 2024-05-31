import { component$, useSignal } from '@builder.io/qwik'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from '~/components/Navbar'
import { Link } from '@builder.io/qwik-city'
import { Button } from '~/components/Button/Button'
import { Dropdown, DropdownItem } from '~/components/Dropdown/Dropdown'
import { IconSearchOutline } from '~/components/Icon'
import { Input } from '~/components/Input/Input'
import { Preview } from '~/components/__Preview/__Preview'

export default component$(() => {
  const searchValue = useSignal('')

  return (
    <section id="navbars">
      <div>
        <h2 class="my-3">Default navbar</h2>
        <Preview url="/examples/navbar/default-navbar" height="300" />
      </div>

      <div>
        <h2 class="my-3">Navbar with CTA button</h2>
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
      </div>

      <div>
        <h2 class="my-3">Navbar with dropdown</h2>
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
      </div>

      <div>
        <h2 class="my-3">Navbar with search</h2>
        <Navbar fluid rounded>
          <NavbarBrand as={Link} href="https://flowbite-qwik.com/">
            <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>
          </NavbarBrand>
          <div class="flex md:order-2">
            <Input
              bind:value={searchValue}
              placeholder="Search ..."
              prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />}
            />
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
      </div>
    </section>
  )
})
