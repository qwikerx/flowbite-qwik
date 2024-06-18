import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { DocumentPage } from '~/components/DocumentPage/DocumentPages'

export default component$(() => {
  return (
    <>
      <DocumentPage>
        <div>
          <h1>Flowbite Qwik - UI Component Library</h1>
          <p>
            Learn more about the free and open-source Flowbite Qwik UI components and start building modern web applications using Qwik components
            based on Tailwind CSS
          </p>
        </div>
        <hr />
        <div>
          <p>
            <a target="_blank" rel="noreferrer" href="https://github.com/qwikerx/flowbite-qwik">
              Flowbite Qwik
            </a>{' '}
            is a free and open-source UI component library based on the core{' '}
            <a href="https://flowbite.com/" target="_blank" rel="noreferrer">
              Flowbite
            </a>{' '}
            components and built with Qwik components and interactivity handling.
          </p>
        </div>
      </DocumentPage>
      <Button tag={Link} href="/docs/getting-started/quickstart" class="mt-8">
        Quickstart
      </Button>
    </>
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
