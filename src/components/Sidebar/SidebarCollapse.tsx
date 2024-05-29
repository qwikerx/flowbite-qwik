import { $, Component, FunctionComponent, PropsOf, Slot, component$, useId, useSignal } from '@builder.io/qwik'
import { SidebarItem } from './SidebarItem'
import { IconProps } from '@qwikest/icons'
import { IconAngleDownSolid } from '../Icon'
import { SidebarItemGroup } from './SidebarItemGroup'
import { getChild } from '~/utils/getChild'

type SidebarCollapseProps = PropsOf<'div'> & {
  label: string
  border?: boolean
  icon?: Component<IconProps>
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

export const InternalSidebarCollapse = component$<SidebarCollapseProps>(({ label, icon }) => {
  const isOpen = useSignal(false)
  const id = useId()

  const toggle$ = $(() => {
    isOpen.value = !isOpen.value
  })

  return (
    <>
      <SidebarItem icon={icon} tag="button" onClick$={toggle$} id={`flowbite-sidebar-collapse-${id}`}>
        {label}
        <IconAngleDownSolid
          q:slot="suffix"
          class={{
            'transform rotate-180': isOpen.value,
          }}
        />
      </SidebarItem>
      <SidebarItemGroup
        aria-labelledby={`flowbite-sidebar-collapse-${id}`}
        class={['overflow-hidden transition-all duration-300', isOpen.value ? 'max-h-screen translate-y-0' : 'max-h-0 -translate-y-3']}
      >
        <Slot />
      </SidebarItemGroup>
    </>
  )
})
