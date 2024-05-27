import { IconProps } from '@qwikest/icons'
import { FlClockSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconClockSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})