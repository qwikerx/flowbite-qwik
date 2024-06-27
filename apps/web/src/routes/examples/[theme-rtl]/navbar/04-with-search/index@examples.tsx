/**
 * title: Navbar with search
 * description: Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.
 * height: 400
 */
import { component$, useSignal } from '@builder.io/qwik'
import { Input, Navbar } from 'flowbite-qwik'
import { IconSearchOutline } from 'flowbite-qwik-icons'
import { Link, StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  const searchValue = useSignal('')

  return (
    <Navbar fluid rounded>
      <Navbar.Brand tag={Link} href="https://flowbite-qwik.com/">
        <img src="/small-logo.png" alt="Flowbite qwik logo" width="215" height="195" class="h-8 w-auto" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>
      </Navbar.Brand>
      <div class="flex items-center md:order-2">
        <IconSearchOutline class="me-1 h-5 w-5 text-gray-500 dark:text-gray-400 md:hidden" />
        <Input
          bind:value={searchValue}
          placeholder="Search ..."
          class="hidden md:block"
          prefix={<IconSearchOutline class="h-5 w-5 text-gray-500 dark:text-gray-400" />}
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
