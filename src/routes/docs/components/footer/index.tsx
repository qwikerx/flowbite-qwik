import { component$ } from '@builder.io/qwik'
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from '~/components/Footer'
import { IconDribbbleSolid, IconFacebookSolid, IconGithubSolid, IconLinkedinSolid } from '~/components/Icon'

export default component$(() => {
  return (
    <>
      <h2 class="text-2xl font-semibold">Default footer</h2>
      <Footer container>
        <FooterCopyright href="#" by="Flowbite™" />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>

      <h2 class="text-2xl mt-8 font-semibold">Footer with logo</h2>
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

      <h2 class="text-2xl mt-8 font-semibold">Social media icons</h2>
      <Footer container>
        <div class="w-full">
          <div class="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <FooterBrand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />
            </div>
            <div class="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="about" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Flowbite</FooterLink>
                  <FooterLink href="#">Tailwind CSS</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow us" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Github</FooterLink>
                  <FooterLink href="#">Discord</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div class="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Flowbite™" />
            <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={IconFacebookSolid} />
              <FooterIcon href="#" icon={IconGithubSolid} />
              <FooterIcon href="#" icon={IconDribbbleSolid} />
              <FooterIcon href="#" icon={IconLinkedinSolid} />
            </div>
          </div>
        </div>
      </Footer>

      <h2 class="text-2xl mt-8 font-semibold">Sitemap links</h2>
      <Footer bgDark>
        <div class="w-full">
          <div class="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <FooterTitle title="Company" />
              <FooterLinkGroup col>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Brand Center</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="help center" />
              <FooterLinkGroup col>
                <FooterLink href="#">Discord Server</FooterLink>
                <FooterLink href="#">Twitter</FooterLink>
                <FooterLink href="#">Facebook</FooterLink>
                <FooterLink href="#">Contact Us</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Licensing</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="download" />
              <FooterLinkGroup col>
                <FooterLink href="#">iOS</FooterLink>
                <FooterLink href="#">Android</FooterLink>
                <FooterLink href="#">Windows</FooterLink>
                <FooterLink href="#">MacOS</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
          <div class="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Flowbite™" />
            <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={IconFacebookSolid} />
              <FooterIcon href="#" icon={IconGithubSolid} />
              <FooterIcon href="#" icon={IconDribbbleSolid} />
              <FooterIcon href="#" icon={IconLinkedinSolid} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
})
