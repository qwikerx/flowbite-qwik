/**
 * title: Button group event handler
 * description: You can use onClick$ option of the Button component to know which one is clicked
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, ButtonGroup } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { IconDownloadOutline, IconFileSearchOutline, IconProfileCardOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <ButtonGroup>
      <Button onClick$={() => alert('clicked!')} href="#profile" color="light" prefix={IconProfileCardOutline}>
        Profile
      </Button>
      <Button onClick$={() => alert('clicked!')} href="#settings" color="light" prefix={IconFileSearchOutline}>
        Settings
      </Button>
      <Button onClick$={() => alert('clicked!')} href="#messages" color="light" prefix={IconDownloadOutline}>
        Messages
      </Button>
    </ButtonGroup>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
