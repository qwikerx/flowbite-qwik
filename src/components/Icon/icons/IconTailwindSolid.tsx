import { IconProps } from '@qwikest/icons'
import { FlTailwindSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconTailwindSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})