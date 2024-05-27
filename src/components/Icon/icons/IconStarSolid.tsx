import { IconProps } from '@qwikest/icons'
import { FlStarSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconStarSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})