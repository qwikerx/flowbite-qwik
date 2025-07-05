/**
 * title: Navbar with dropdown
 * description: This example can be used to show a secondary dropdown menu when clicking on one of the navigation links.
 * height: 400
 */
import { component$ } from '@builder.io/qwik'
import { Dropdown, Navbar } from 'flowbite-qwik'
import { Link, StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand tag={Link} href="https://flowbite-qwik.com/">
        <img src="/logo.svg" alt="Flowbite qwik logo" width="306" height="306" class="h-8 w-auto" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite Qwik</span>
      </Navbar.Brand>
      <div class="flex items-center md:order-2">
        <Dropdown
          as={
            <img
              class="h-8 w-8 rounded-full"
              src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"
              alt="user photo"
            />
          }
        >
          <Dropdown.Item header>
            <span class="block text-sm">Bonnie Green</span>
            <span class="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Item>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link tag="div">
          <Dropdown label="Services" inline>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
