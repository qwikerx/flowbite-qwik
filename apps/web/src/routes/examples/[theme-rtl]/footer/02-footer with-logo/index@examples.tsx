/**
 * title: Default with Logo
 * description: Use this component to show your brand’s logo, a few website links and the copyright notice on a second row.
 */

import { component$ } from '@builder.io/qwik'
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup, FooterBrand, FooterDivider } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Footer container>
      <div class="w-full text-center">
        <div class="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Flowbite™" />
      </div>
    </Footer>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
