import { Component, component$, PropsOf, useComputed$ } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { IconProps } from 'flowbite-qwik-icons'
import { IconQuoteSolid } from 'flowbite-qwik-icons'

type HrIconProps = PropsOf<'hr'> & {
  icon?: Component<IconProps>
}

export const HrIcon = component$<HrIconProps>(({ class: className, icon, ...attrs }) => {
  const Icon = useComputed$(() => {
    return icon ? icon : IconQuoteSolid
  })

  return (
    <div class="inline-flex w-full items-center justify-center">
      <hr class={twMerge('my-8 h-1 w-64 rounded border-0 bg-gray-200 dark:bg-gray-700', clsx(className))} role="separator" {...attrs} />
      <div class="absolute left-1/2 -translate-x-1/2 bg-white px-4 dark:bg-gray-900">
        <Icon.value aria-hidden class="h-4 w-4 text-gray-700 dark:text-gray-300" />
      </div>
    </div>
  )
})
