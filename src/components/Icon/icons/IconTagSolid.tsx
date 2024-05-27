import { IconProps } from '@qwikest/icons'
import { FlTagSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconTagSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})