import { IconProps } from '@qwikest/icons'
import { FlVueSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconVueSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})