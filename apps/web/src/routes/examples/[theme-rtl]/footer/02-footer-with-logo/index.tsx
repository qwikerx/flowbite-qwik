/**
 * title: Default with Logo
 * description: Use this component to show your brand’s logo, a few website links and the copyright notice on a second row.
 * height: 200
 */

import { component$ } from '@builder.io/qwik'
import { Footer } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Footer container>
      <div class="w-full text-center">
        <div class="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" />
      </div>
    </Footer>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
