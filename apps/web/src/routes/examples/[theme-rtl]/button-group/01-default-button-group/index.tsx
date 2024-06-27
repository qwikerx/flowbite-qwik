/**
 * title: Default button group
 * description: Use this example of the <ButtonGroup> component by adding the Button component as a child element and stack them together. You can also use the color prop to change the color of the buttons.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, ButtonGroup } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <ButtonGroup>
      <Button color="light">Profile</Button>
      <Button color="light">Settings</Button>
      <Button color="light">Messages</Button>
    </ButtonGroup>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
