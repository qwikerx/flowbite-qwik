/**
 * title: Default Navbar
 * description: Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.
 * height: 400
 */

import { component$ } from '@builder.io/qwik'
import { Navbar } from 'flowbite-qwik'
import { Link, StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand tag={Link} href="https://flowbite-qwik.com/">
        <img src="/logo.svg" alt="Flowbite qwik logo" width="306" height="306" class="h-8 w-auto" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite Qwik</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link tag={Link} href="/navbars">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
