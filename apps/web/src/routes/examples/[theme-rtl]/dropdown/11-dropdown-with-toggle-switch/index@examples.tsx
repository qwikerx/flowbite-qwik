/**
 * title: Dropdown with toggle switch
 * description: Show a list of toggle switch elements inside the dropdown menu to enable a yes or no type of choice.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown, DropdownItem, Toggle } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  const enableNotifications = useSignal(false)
  const enable2faAuthentication = useSignal(true)
  const subscribeToNewsletter = useSignal(false)

  return (
    <div class="flex gap-4">
      <Dropdown label="Dropdown toggle" closeWhenSelect={false}>
        <DropdownItem>
          <Toggle label="Enable notifications" bind:checked={enableNotifications} />
        </DropdownItem>
        <DropdownItem>
          <Toggle label="Enable 2FA authentication" bind:checked={enable2faAuthentication} />
        </DropdownItem>
        <DropdownItem>
          <Toggle label="Subscribe to newsletter" bind:checked={subscribeToNewsletter} />
        </DropdownItem>
      </Dropdown>

      <Dropdown label="Dropdown toggle" closeWhenSelect={false}>
        <DropdownItem>
          <Toggle label="Enable notifications" bind:checked={enableNotifications} />
        </DropdownItem>
        <DropdownItem>
          <Toggle label="Enable 2FA authentication" bind:checked={enable2faAuthentication} />
        </DropdownItem>
        <DropdownItem>
          <Toggle label="Subscribe to newsletter" bind:checked={subscribeToNewsletter} />
        </DropdownItem>
      </Dropdown>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
