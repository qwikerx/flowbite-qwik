import { IconProps } from '@qwikest/icons'
import { FlListOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconListOutline = component$<IconProps>(({ class: classNames, ...props }) => {
  return (
      <QwikestIcon class={classNames} {...props} />
  )
})