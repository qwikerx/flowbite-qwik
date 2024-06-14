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
      {!home && (!!ArrowIcon ? <ArrowIcon class="w-3 h-3 text-gray-400 mx-1" /> : <IconArrowRightOutline class="w-3 h-3 text-gray-400 ml-1 mr-2" />)}
      <TagComponent href={href} class={breadcrumbItemClasses.value}>
        {!!HomeIcon && <HomeIcon class="w-3 h-3 text-gray-400 me-2.5" />}
        {home && !Boolean(HomeIcon) && <IconHomeOutline class="w-3 h-3 me-2.5" />}
        <Slot />
      </TagComponent>
    </li>
  )
})
