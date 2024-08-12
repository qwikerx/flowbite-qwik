/**
 * title: Outlined with icon
 * description: Group a series of buttons together on a single line or stack them in a vertical column.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, ButtonGroup } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { IconDownloadOutline, IconFileSearchOutline, IconProfileCardOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <ButtonGroup outline>
      <Button color="red" prefix={IconProfileCardOutline}>
        Profile
      </Button>
      <Button color="red" prefix={IconFileSearchOutline}>
        Settings
      </Button>
      <Button color="red" prefix={IconDownloadOutline}>
        Messages
      </Button>
    </ButtonGroup>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
