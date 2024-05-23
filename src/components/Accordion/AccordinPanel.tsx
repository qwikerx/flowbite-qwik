import { component$, Slot } from '@builder.io/qwik'

export const AccordionPanel = component$(() => {
  return (
    <div>
      <Slot />
    </div>
  )
})
