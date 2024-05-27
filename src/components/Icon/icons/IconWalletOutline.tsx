import { IconProps } from '@qwikest/icons'
import { FlWalletOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconWalletOutline = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})