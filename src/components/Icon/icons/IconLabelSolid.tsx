import { IconProps } from '@qwikest/icons'
import { FlLabelSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconLabelSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})