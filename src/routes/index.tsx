import { component$ } from '@builder.io/qwik'
import { Button } from '~/components/Button/Button'
import { Jumbotron, JumbotronHeading, JumbotronSubText } from '~/components/Jumbotron'
import { IconArrowRightOutline } from '..'
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup } from '~/components/Footer'
import { IconGithubSolid } from '~/components/Icon'

export default component$(() => {
  const boxes = [
    {
      title: 'Qwik components 🧱',
      text: 'Use hundreds of open-source components such as navbars, modals, and dropdowns based on Qwik and Tailwind CSS.',
    },

    {
      title: 'Based on Tailwind CSS 💨',
      text: 'The components are based on the utility classes from Tailwind CSS and you can use them to further customize the interface.',
    },

    {
      title: 'Powered by Flowbite 🚀',
      text: 'The Flowbite Qwik library is based on the original Flowbite component library using vanilla JavaScript.',
    },

    {
      title: 'Open-source community ❤️',
      text: 'Thousands of developers actively use the components from Flowbite Qwik to power their applications.',
    },
  ]

  return (
    <>
      <Jumbotron>
        <JumbotronHeading tag="h2">
          <span class="text-qwik">⚡ Flowbite Qwik </span> <span class="text-qwik-secondary">component library</span> based on Tailwind CSS
        </JumbotronHeading>
        <JumbotronSubText>
          Get started with the most popular open-source library of interactive UI components built with the utility classes from Tailwind CSS
        </JumbotronSubText>
        <div class="flex gap-2 justify-center">
          <Button href="/docs/getting-started/introduction" suffix={IconArrowRightOutline}>
            Get started
          </Button>
          <Button color="alternative" href="https://github.com/xmimiex/flowbite-qwik">
            View on GitHub
          </Button>
        </div>
      </Jumbotron>

      <section>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 mx-auto max-w-6xl">
          {boxes.map((box, i) => (
            <div key={i} class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 class="text-l font-semibold">{box.title}</h3>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{box.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer container class="mt-9">
        <div class="w-full text-center">
          <div class="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <FooterBrand src="/favicon.png" href="/" width="215" height="195" alt="Flowbite Qwik Logo" name="Flowbite Qwik" class="w-8 h-auto" />
            <FooterLinkGroup>
              <FooterLink href="/docs/getting-started/introduction">Docs</FooterLink>
              <FooterLink href="/docs/getting-started/quickstart">Quickstart</FooterLink>
              <FooterLink href="https://flowbite.com">Flowbite</FooterLink>
            </FooterLinkGroup>
          </div>
          <FooterDivider />
          <div class="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Flowbite™" />
            <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={IconGithubSolid} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
})
