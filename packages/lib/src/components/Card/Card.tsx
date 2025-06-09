import { ClassList, Component, component$, JSXOutput, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import type { LinkProps } from '@builder.io/qwik-city'

type CardTheme = {
  root?: ClassList
  image?: ClassList
  content?: ClassList
}

type CardProps = PropsOf<'div'> & {
  horizontal?: boolean
  href?: string
  tag?: Component<LinkProps> | string
  imgAlt?: string
  imgSrc?: string
  imgAs?: JSXOutput
  theme?: CardTheme
}

export const Card = component$<CardProps>(({ class: className, tag = 'a', theme, imgSrc, imgAlt, imgAs, horizontal = false, href, ...attrs }) => {
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
        clsx(theme?.root),
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
          class={twMerge(
            horizontal ? 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' : 'rounded-t-lg',
            clsx(theme?.image),
          )}
        />
      ) : (
        <></>
      )}

      <div class={twMerge('flex h-full flex-col justify-center gap-4 p-6', clsx(theme?.content))}>
        <Slot />
      </div>
    </TagComponent>
  )
})
