/**
 * title: Default footer
 * description: Use this footer component to show a copyright notice and some helpful website links.
 */

import { component$ } from '@builder.io/qwik'
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Footer container>
      <FooterCopyright href="#" by="Flowbite™" />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
