import { Sidebar as SidebarRoot } from './Sidebar'
import { SidebarItem } from './SidebarItem'
import { SidebarItemGroup } from './SidebarItemGroup'
import { SidebarCollapse } from './SidebarCollapse'
import { SidebarCta } from './SidebarCta'

export type { SidebarItemProps } from './SidebarItem'
export const Sidebar = Object.assign(SidebarRoot, {
  Item: SidebarItem,
  ItemGroup: SidebarItemGroup,
  Collapse: SidebarCollapse,
  Cta: SidebarCta,
})
