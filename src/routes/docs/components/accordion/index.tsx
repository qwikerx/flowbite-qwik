import { component$ } from '@builder.io/qwik'
import { Preview } from '~/components/__Preview/__Preview'

export default component$(() => {
  const accordions = [
    {
      title: 'Default accordion',
      description: 'Use this example to basic accordion.',
      url: '/examples/accordion/default-accordion',
      height: '300',
    },
    {
      title: 'Always open accordion',
      description: 'Always open prop to makes accordion able to open multiple elements.',
      url: '/examples/accordion/always-open-accordion',
      height: '300',
    },
    {
      title: 'Flush accordion',
      description: 'Flush prop removes background color, side borders, and rounded corners',
      url: '/examples/accordion/flush-accordion',
      height: '300',
    },
    {
      title: 'Styling accordion',
      description: 'You can style accordion content and headers by passing tailwind classes into them.',
      url: '/examples/accordion/styling-accordion',
      height: '300',
    },
    {
      title: 'Closed first item',
      description: 'First item is not open by default',
      url: '/examples/accordion/closed-first-accordion',
      height: '300',
    },
  ]

  return (
    <section class="flex flex-col gap-8">
      {accordions.map((accordion) => (
        <Preview title={accordion.title} url={accordion.url} description={accordion.description} height={accordion.height} />
      ))}
    </section>
  )
})
