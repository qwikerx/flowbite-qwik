import { component$ } from '@builder.io/qwik'
import { Preview } from '~/components/__Preview/__Preview'

export default component$(() => {
  return (
    <section id="accordions">
      <div>
        <h2 class="my-3">Default accordion</h2>
        <Preview url="/examples/accordion/default-accordion" height="300" />
      </div>

      <div>
        <h2 class="my-3">Always open accordion</h2>
        <Preview url="/examples/accordion/always-open-accordion" height="300" />
      </div>

      <div>
        <h2 class="my-3">Flush accordion</h2>
        <Preview url="/examples/accordion/flush-accordion" height="300" />
      </div>

      <div>
        <h2 class="my-3">Styling accordion</h2>
        <Preview url="/examples/accordion/styling-accordion" height="300" />
      </div>

      <div>
        <h2 class="my-3">Closed first item</h2>
        <Preview url="/examples/accordion/closed-first-accordion" height="300" />
      </div>
    </section>
  )
})
