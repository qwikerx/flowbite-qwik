import { PropsOf, component$ } from '@builder.io/qwik'
import { Footer } from 'flowbite-qwik'

export const DocFooter = component$<PropsOf<'footer'>>(({ class: classNames }) => {
  return (
    <Footer container class={['mt-9', classNames]}>
      <div class="w-full text-center">
        <div class="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite-qwik™" />
        </div>
      </div>
    </Footer>
  )
})
