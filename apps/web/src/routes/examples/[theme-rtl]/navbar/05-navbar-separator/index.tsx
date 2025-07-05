/**
 * title: Navbar with separator
 * description: The separator props add a separator under the navbar
 * height: 400
 */

import { component$ } from '@builder.io/qwik'
import { Navbar } from 'flowbite-qwik'
import { Link, StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Navbar fluid rounded separator>
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
