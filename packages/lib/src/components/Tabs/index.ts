export * from './tabs-types'
import { Tabs as TabsRoot, Tab } from './Tabs'

export const Tabs = Object.assign(TabsRoot, {
  Tab,
})
