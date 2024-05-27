import { IconProps } from '@qwikest/icons'
import { FlHeartSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconHeartSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})