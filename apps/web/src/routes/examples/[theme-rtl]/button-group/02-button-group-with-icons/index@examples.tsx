/**
 * title: Button group with icons
 * description: Import one of the icons from the flowbite-qwik-icons library and add it as a child element to the <Button> component to create multiple buttons with icons grouped together.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, ButtonGroup } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { IconDownloadOutline, IconFileSearchOutline, IconProfileCardOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <ButtonGroup>
      <Button color="light" prefix={IconProfileCardOutline}>
        Profile
      </Button>
      <Button color="light" prefix={IconFileSearchOutline}>
        Settings
      </Button>
      <Button color="light" prefix={IconDownloadOutline}>
        Messages
      </Button>
    </ButtonGroup>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
