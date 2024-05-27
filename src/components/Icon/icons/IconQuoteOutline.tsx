import { IconProps } from '@qwikest/icons'
import { FlQuoteOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconQuoteOutline = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})