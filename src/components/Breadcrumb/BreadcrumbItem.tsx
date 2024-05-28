import { PropsOf, Slot, component$, useComputed$, Component } from '@builder.io/qwik'
import { useBreadcrumbItemClasses } from './composables/use-breadcrumb-item-classes'
import { IconProps } from '@qwikest/icons'
import { FlArrowRightOutline, FlHomeSolid } from '@qwikest/icons/flowbite'

type BreadcrumbItemProps = PropsOf<'a'> & {
  home?: boolean
  href?: string
  homeIcon?: Component<IconProps>
  arrowIcon?: Component<IconProps>
}

export const BreadcrumbItem = component$<BreadcrumbItemProps>(({ href, home = false, homeIcon: HomeIcon, arrowIcon: ArrowIcon }) => {
  const Tag = href ? 'a' : 'span'

  const { breadcrumbItemClasses } = useBreadcrumbItemClasses(useComputed$(() => href))

  return (
    <li class="inline-flex items-center">
      {!home &&
        (Boolean(ArrowIcon) && ArrowIcon ? (
          <ArrowIcon class="w-3 h-3 text-gray-400 mx-1" />
        ) : (
          <FlArrowRightOutline class="w-3 h-3 text-gray-400 ml-1 mr-2" />
        ))}
      <Tag href={href} class={breadcrumbItemClasses.value}>
        {Boolean(HomeIcon) && HomeIcon && <HomeIcon class="w-3 h-3 text-gray-400 me-2.5" />}
        {home && !Boolean(HomeIcon) && <FlHomeSolid class="w-3 h-3 me-2.5" />}
        <Slot />
      </Tag>
    </li>
  )
})
