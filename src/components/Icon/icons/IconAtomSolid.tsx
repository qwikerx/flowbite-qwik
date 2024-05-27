import { IconProps } from '@qwikest/icons'
import { FlAtomSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconAtomSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})