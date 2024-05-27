import { IconProps } from '@qwikest/icons'
import { FlHeartOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconHeartOutline = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})