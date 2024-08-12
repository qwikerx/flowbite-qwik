/**
 * title: Button group as links
 * description: You can also use the button group component as links.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, ButtonGroup } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { IconDownloadOutline, IconFileSearchOutline, IconProfileCardOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <ButtonGroup>
      <Button href="#profile" color="light" prefix={IconProfileCardOutline}>
        Profile
      </Button>
      <Button href="#settings" color="light" prefix={IconFileSearchOutline}>
        Settings
      </Button>
      <Button href="#messages" color="light" prefix={IconDownloadOutline}>
        Messages
      </Button>
    </ButtonGroup>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
