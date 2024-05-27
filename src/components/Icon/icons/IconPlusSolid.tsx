import { IconProps } from '@qwikest/icons'
import { FlPlusSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconPlusSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})