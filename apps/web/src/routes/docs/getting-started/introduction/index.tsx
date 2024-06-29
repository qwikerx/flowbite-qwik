import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Button, Heading, Hr } from 'flowbite-qwik'
import { DocumentPage } from '~/components/DocumentPage/DocumentPages'

export default component$(() => {
  return (
    <DocumentPage>
      <div>
        <Heading tag="h1">Flowbite Qwik - UI Component Library</Heading>
        <p>
          Learn more about the free and open-source Flowbite Qwik UI components and start building modern web applications using Qwik components based
          on Tailwind CSS
        </p>
      </div>
      <Hr />
      <div>
        <p>
          <Link target="_blank" rel="noreferrer" href="https://github.com/qwikerx/flowbite-qwik">
            Flowbite Qwik
          </Link>{' '}
          is a free and open-source UI component library based on the core Flowbite components and built with native Qwik components and interactivity
          handling.
        </p>
        <p>
          This library features dozen of interactive elements such as navbars, dropdowns, modals, and sidebars all handled by Svelte and based on the
          utility classes from Tailwind CSS.
        </p>
        <Heading tag="h2">Getting started</Heading>
        <p>
          Learn how to get started with Flowbite Qwik by following the quickstart guide and start leveraging the interactive Qwik components coupled
          with Flowbite and Tailwind CSS.
        </p>
        <Button tag={Link} href="/docs/getting-started/quickstart" size="lg">
          Get started
        </Button>
      </div>
    </DocumentPage>
  )
})

export const head = () => ({
  title: 'Introduction - Flowbite Qwik',
  meta: [
    {
      name: 'description',
      content:
        'Learn more about the free and open-source Flowbite Qwik UI components and start building modern web applications using Qwik components based on Tailwind CSS',
    },
  ],
})
