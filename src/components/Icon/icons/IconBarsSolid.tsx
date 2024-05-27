import { IconProps } from '@qwikest/icons'
import { FlBarsSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconBarsSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})