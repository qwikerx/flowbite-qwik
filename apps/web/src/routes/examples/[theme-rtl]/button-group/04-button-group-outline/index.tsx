/**
 * title: Button group Outline
 * description: Group a series of buttons together on a single line or stack them in a vertical column.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, ButtonGroup } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <ButtonGroup outline>
      <Button color="blue">Profile</Button>
      <Button color="blue">Settings</Button>
      <Button color="blue">Messages</Button>
    </ButtonGroup>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
