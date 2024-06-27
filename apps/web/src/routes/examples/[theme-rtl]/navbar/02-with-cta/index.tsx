/**
 * title: Navbar with CTA button
 * description: Use the following navbar element to show a call to action button alongside the logo and page links.
 * height: 400
 */
import { component$ } from '@builder.io/qwik'
import { Button, Navbar } from 'flowbite-qwik'
import { Link, StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand tag={Link} href="https://flowbite-qwik.com/">
        <img src="/small-logo.png" alt="Flowbite qwik logo" width="215" height="195" class="h-8 w-auto" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>
      </Navbar.Brand>
      <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
        <Button>Start</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
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
