import { IconProps } from '@qwikest/icons'
import { FlPauseSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconPauseSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})