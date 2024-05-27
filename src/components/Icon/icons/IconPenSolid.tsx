import { IconProps } from '@qwikest/icons'
import { FlPenSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconPenSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})