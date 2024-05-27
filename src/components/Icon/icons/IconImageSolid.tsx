import { IconProps } from '@qwikest/icons'
import { FlImageSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconImageSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})