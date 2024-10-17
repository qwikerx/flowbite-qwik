import { PropsOf, Slot, component$, useComputed$, Component } from '@builder.io/qwik'
import { useBreadcrumbItemClasses } from './composables/use-breadcrumb-item-classes'
import type { IconProps } from 'flowbite-qwik-icons'
import { IconArrowRightOutline, IconHomeOutline } from 'flowbite-qwik-icons'
import { LinkProps } from '@builder.io/qwik-city'

type BreadcrumbItemProps = PropsOf<'a'> & {
  home?: boolean
  href?: string
  tag?: Component<LinkProps> | string
  homeIcon?: Component<IconProps>
  arrowIcon?: Component<IconProps>
}

export const BreadcrumbItem = component$<BreadcrumbItemProps>(({ href, tag = 'a', home = false, homeIcon: HomeIcon, arrowIcon: ArrowIcon }) => {
  const LinkComponent = tag !== 'a' ? tag : 'a'
  const TagComponent = href ? LinkComponent : 'span'

  const { breadcrumbItemClasses } = useBreadcrumbItemClasses(useComputed$(() => href))

  return (
    <li class="inline-flex items-center">
      {!home &&
        (!!ArrowIcon ? (
          <ArrowIcon class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180" />
        ) : (
          <IconArrowRightOutline class="ml-1 mr-2 h-3 w-3 text-gray-400 rtl:rotate-180" />
        ))}
      <TagComponent href={href} class={breadcrumbItemClasses.value}>
        {!!HomeIcon && <HomeIcon class="me-2.5 h-3 w-3 text-gray-400" />}
        {home && !Boolean(HomeIcon) && <IconHomeOutline class="me-2.5 h-3 w-3" />}
        <Slot />
      </TagComponent>
    </li>
  )
})
