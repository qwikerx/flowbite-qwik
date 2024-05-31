import { PropsOf, component$ } from '@builder.io/qwik'
import { Footer, FooterCopyright, FooterIcon } from '../Footer'
import { IconGithubSolid } from '../Icon'

export const DocFooter = component$<PropsOf<'footer'>>(({ class: classNames }) => {
  return (
    <Footer container class={['mt-9', classNames]}>
      <div class="w-full text-center">
        <div class="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Flowbite™" />
          <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={IconGithubSolid} />
          </div>
        </div>
      </div>
    </Footer>
  )
})
