import { component$ } from '@builder.io/qwik'
import { Button } from '~/components/Button/Button'
import { Jumbotron, JumbotronHeading, JumbotronSubText } from '~/components/Jumbotron'
import { IconArrowRightOutline } from '..'
import { DocFooter } from '~/components/__Footer/__Footer'
import { server$ } from '@builder.io/qwik-city'
import fs from 'fs'

export const extractExamples = server$((componentName: string, height = 50) => {
  function getTitleAndDescription(fileContent: string) {
    const pattern = /\/\*\*[^]*?title:\s*(.*?)\s*\*[^]*?description:\s*(.*?)\s*\*\//

    const match = pattern.exec(fileContent)
    return {
      title: match && match[1] ? match[1].trim() : '',
      description: match && match[2] ? match[2].trim() : '',
    }
  }

  return fs.readdirSync(`src/routes/examples/${componentName}`).map((file) => {
    const path = `src/routes/examples/${componentName}/` + file
    const content = fs.readFileSync(path + '/index@examples.tsx', 'utf-8')
    const { title, description } = getTitleAndDescription(content)

    return {
      title,
      description,
      url: `/examples/${componentName}/` + file,
      height,
    }
  })
})

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

      <section class="flex-1">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 mx-auto max-w-6xl">
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
