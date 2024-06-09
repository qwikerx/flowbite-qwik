import { component$ } from '@builder.io/qwik'
import { DocFooter } from '~/components/Footer/Footer'
import { Button, Jumbotron, JumbotronHeading, JumbotronSubText, IconArrowRightOutline } from 'flowbite-qwik'
import { DocumentHead } from '@builder.io/qwik-city'

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
    <div class="flex flex-col h-full">
      <Jumbotron>
        <JumbotronHeading tag="h1">
          <span class="text-qwik">⚡ Flowbite Qwik </span> <span class="text-qwik-secondary">component library</span> based on Tailwind CSS
        </JumbotronHeading>
        <JumbotronSubText>
          Get started with the most popular open-source library of interactive UI components built with the utility classes from Tailwind CSS
        </JumbotronSubText>
        <div class="flex gap-2 justify-center">
          <Button href="/docs/getting-started/introduction" suffix={IconArrowRightOutline}>
            Get started
          </Button>
          <Button color="alternative" href="https://github.com/qwikerx/flowbite-qwik">
            View on GitHub
          </Button>
        </div>
      </Jumbotron>

      <section class="flex-1">
        <div class="grid p-6 grid-cols-2 md:grid-cols-4 gap-6 mt-8 mx-auto max-w-6xl">
          {boxes.map((box, i) => (
            <div key={i} class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 class="text-l font-semibold">{box.title}</h3>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{box.text}</p>
            </div>
          ))}
        </div>
      </section>
      <DocFooter class="mt-16" />
    </div>
  )
})

export const head: DocumentHead = () => ({
  title: 'Flowbite Qwik - UI Component Library',
})
