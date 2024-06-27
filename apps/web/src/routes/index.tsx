import { component$, PrefetchServiceWorker } from '@builder.io/qwik'
import { DocFooter } from '~/components/Footer/Footer'
import { Button, Card, Heading, Jumbotron } from 'flowbite-qwik'
import { IconArrowRightOutline } from 'flowbite-qwik-icons'
import { NavbarPage } from '~/components/NavbarPage/NavbarPage'
import { TailwindSection } from '~/components/homepage/TailwindSection/TailwindSection'
import { SocialProofSection } from '~/components/homepage/SocialProofSection/SocialProofSection'
import { FigmaSection } from '~/components/homepage/FigmaSection/FigmaSection'
import { ContributorSection } from '~/components/homepage/ContributorSection/ContributorSection'

export default component$(() => {
  const boxes = [
    {
      title: 'Qwik components 🧱',
      text: 'Use dozen of open-source components such as navbars, modals, and dropdowns based on Qwik and Tailwind CSS.',
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
    <div>
      <NavbarPage withCollapse />

      <main>
        <div class="flex h-full flex-col">
          <Jumbotron>
            <Jumbotron.Heading tag="h1">
              <span class="text-qwik">⚡ Flowbite Qwik </span> <span class="text-qwik-secondary">component library</span> based on Tailwind CSS
            </Jumbotron.Heading>
            <Jumbotron.SubText tag="h2">
              Get started with the most popular open-source library of interactive UI components built with the utility classes from Tailwind CSS
            </Jumbotron.SubText>
            <div class="flex justify-center gap-2">
              <Button href="/docs/getting-started/introduction" suffix={IconArrowRightOutline}>
                Get started
              </Button>
              <Button color="alternative" href="https://github.com/qwikerx/flowbite-qwik">
                View on GitHub
              </Button>
            </div>
          </Jumbotron>

          <section class="flex-1">
            <div class="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">
              {boxes.map((box) => (
                <Card key={box.title}>
                  <Heading tag="h3">{box.title}</Heading>
                  <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{box.text}</p>
                </Card>
              ))}
            </div>
          </section>

          <TailwindSection />
          <SocialProofSection />
          <FigmaSection />
          <ContributorSection />

          <DocFooter class="mt-16" />
        </div>
      </main>

      {import.meta.env.PROD && (
        <>
          <PrefetchServiceWorker />
          {/*<PrefetchGraph />*/}
        </>
      )}
    </div>
  )
})

export const head = () => ({
  title: 'Flowbite Qwik - UI Component Library',
  meta: [{ name: 'description', content: '⚡ Flowbite Qwik, component library based on Tailwind CSS' }],
})
