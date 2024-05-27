import { IconProps } from '@qwikest/icons'
import { FlPaletteOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconPaletteOutline = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})