import { $, Component, FunctionComponent, PropsOf, Slot, component$, useId, useSignal } from '@builder.io/qwik'
import { InnerSidebarItem, SidebarItem } from './SidebarItem'
import { IconProps } from '@qwikest/icons'
import { IconAngleDownSolid } from '../Icon'
import { SidebarItemGroup } from './SidebarItemGroup'
import { getChild } from '~/utils/getChild'
import { useToggle } from '~/composables'

type SidebarCollapseProps = PropsOf<'div'> & {
  label: string
  border?: boolean
  icon?: Component<IconProps>
  opened?: boolean
}

export const SidebarCollapse: FunctionComponent<SidebarCollapseProps> = ({ children, ...attrs }) => {
  getChild(children, [
    {
      component: SidebarItem,
      foundComponentCallback: (child) => {
        child.props.isCollapse = true
      },
    },
  ])

  return <InternalSidebarCollapse {...attrs}>{children}</InternalSidebarCollapse>
}

export const InternalSidebarCollapse = component$<SidebarCollapseProps>(({ label, opened = false, icon }) => {
  const { value: isOpen, toggle$ } = useToggle(opened)
  const id = useId()

  return (
    <li>
      <InnerSidebarItem icon={icon} tag="button" onClick$={toggle$} id={`flowbite-sidebar-collapse-${id}`} class="font-medium">
        {label}
        <IconAngleDownSolid
          q:slot="suffix"
          class={{
            'transform rotate-180': isOpen.value,
          }}
        />
      </InnerSidebarItem>
      <SidebarItemGroup
        aria-labelledby={`flowbite-sidebar-collapse-${id}`}
        class={['py-2 space-y-2 overflow-hidden duration-300', isOpen.value ? 'block' : 'hidden']}
      >
        <Slot />
      </SidebarItemGroup>
    </li>
  )
})
