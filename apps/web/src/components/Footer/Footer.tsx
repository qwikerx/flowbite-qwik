import { PropsOf, component$ } from '@builder.io/qwik'
import { Footer, Link } from 'flowbite-qwik'

export const DocFooter = component$<PropsOf<'footer'>>(({ class: className }) => {
  return (
    <Footer class={['rounded-none bg-gray-50 px-4 pb-8 pt-16 shadow-none', className]}>
      <div class="max-w-8xl mx-auto w-full">
        <div class="grid w-full justify-between gap-8 md:grid-cols-2">
          <div class="mb-4 max-w-sm lg:mb-0">
            <Link href="/" class="flex items-center gap-3">
              <img alt="" height="32" src="/favicon.ico" width="32" />
              <span class="text-xl font-semibold text-gray-900 dark:text-gray-100">Flowbite Qwik</span>
            </Link>
            <p class="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">
              Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a Figma design system and other
              resources.
            </p>
            <p class="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">
              Code licensed <Link href="https://github.com/qwikerx/flowbite-qwik/blob/main/LICENSE">MIT</Link>, docs{' '}
              <Link href="https://creativecommons.org/licenses/by/3.0/" rel="nofollow noopener noreferrer">
                CC BY 3.0
              </Link>
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Resources" class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white" />
              <Footer.LinkGroup col class="text-gray-600 dark:text-gray-400">
                <Footer.Link href="https://github.com/qwikerx/flowbite-qwik" class="text-base">
                  GitHub
                </Footer.Link>
                <Footer.Link href="https://flowbite.com/" class="text-base">
                  Flowbite
                </Footer.Link>
                <Footer.Link href="https://tailwindcss.com/" class="text-base">
                  Tailwind CSS
                </Footer.Link>
                <Footer.Link href="https://flowbite.com/figma/" class="text-base">
                  Figma
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Help & Support" class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white" />
              <Footer.LinkGroup col class="text-gray-600 dark:text-gray-400">
                <Footer.Link href="https://discord.gg/4eeurUVvTy" class="text-base">
                  Discord
                </Footer.Link>
                <Footer.Link href="https://github.com/qwikerx/flowbite-qwik/discussions" class="text-base">
                  Github Discussions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white" />
              <Footer.LinkGroup col class="text-gray-600 dark:text-gray-400">
                <Footer.Link href="https://flowbite.com/license/" class="text-base">
                  License
                </Footer.Link>
                <Footer.Link href="https://flowbite.com/brand/" class="text-base">
                  Brand guideline
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div class="w-full text-center sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright
            by="All Rights Reserved. Flowbite™ is a registered trademark."
            href="/"
            year={new Date().getFullYear()}
            class="text-base"
          />
        </div>
      </div>
    </Footer>
  )
})
