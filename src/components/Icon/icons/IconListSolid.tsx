import { IconProps } from '@qwikest/icons'
import { FlListSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconListSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})