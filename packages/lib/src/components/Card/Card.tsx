import { Component, component$, JSXOutput, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { LinkProps } from '@builder.io/qwik-city'

type CardProps = PropsOf<'div'> & {
  horizontal?: boolean
  href?: string
  tag?: Component<LinkProps> | string
  imgAlt?: string
  imgSrc?: string
  imgAs?: JSXOutput
}

export const Card = component$<CardProps>(({ class: className, tag = 'a', imgSrc, imgAlt, imgAs, horizontal = false, href, ...attrs }) => {
  const LinkComponent = tag !== 'a' ? tag : 'a'
  const TagComponent = href ? LinkComponent : 'div'

  return (
    // @ts-expect-error href does not exist on div
    <TagComponent
      href={href}
      class={twMerge(
        'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
        horizontal ? 'flex-col md:max-w-xl md:flex-row' : 'flex-col',
        href && 'hover:bg-gray-100 dark:hover:bg-gray-700',
        clsx(className),
      )}
      {...attrs}
    >
      {imgAs ? (
        <>{imgAs}</>
      ) : imgSrc ? (
        <img
          alt={imgAlt}
          src={imgSrc}
          class={horizontal ? 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' : 'rounded-t-lg'}
        />
      ) : (
        <></>
      )}

      <div class="flex h-full flex-col justify-center gap-4 p-6">
        <Slot />
      </div>
    </TagComponent>
  )
})
