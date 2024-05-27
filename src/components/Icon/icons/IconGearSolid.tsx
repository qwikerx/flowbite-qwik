import { IconProps } from '@qwikest/icons'
import { FlGearSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconGearSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})