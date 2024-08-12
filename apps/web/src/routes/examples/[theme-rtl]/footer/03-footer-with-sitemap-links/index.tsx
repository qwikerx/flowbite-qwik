/**
 * title: Social media icons
 * description: This footer component can be used to show your brand’s logo, multiple rows of website links, a copyright notice and social media profile icons including Twitter, Facebook, Instagram, and more.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { Footer } from 'flowbite-qwik'
import { IconFacebookSolid, IconGithubSolid, IconDribbbleSolid, IconLinkedinSolid } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Footer container>
      <div class="w-full">
        <div class="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />
          </div>
          <div class="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div class="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" />
          <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={IconFacebookSolid} />
            <Footer.Icon href="#" icon={IconGithubSolid} />
            <Footer.Icon href="#" icon={IconDribbbleSolid} />
            <Footer.Icon href="#" icon={IconLinkedinSolid} />
          </div>
        </div>
      </div>
    </Footer>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
