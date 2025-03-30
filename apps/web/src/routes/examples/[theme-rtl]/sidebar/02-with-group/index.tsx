/**
 * title: Multi-level dropdown with custom chevron
 * description: The chevronIcon property offers customization for the chevron icon. Alternatively, for more complex scenarios, the renderChevronIcon option can be utilized. Here's an example.
 * height: 500
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Sidebar } from 'flowbite-qwik'
import {
  IconHomeOutline,
  IconInboxOutline,
  IconUserCircleOutline,
  IconShoppingBagOutline,
  IconFileEditSolid,
  IconAdressBookOutline,
  IconGearSolid,
  IconAtomSolid,
  IconAdjustmentsHorizontalSolid,
  IconChartBars3FromLeftSolid,
} from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const collapsed = useSignal(false)

  return (
    <div class="p-3">
      <button
        onClick$={() => {
          collapsed.value = true
        }}
        type="button"
        class="ms-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <span class="sr-only">Open sidebar</span>
        <IconChartBars3FromLeftSolid aria-hidden class="h-4 w-4 shrink-0" />
      </button>
      <Sidebar collapsed={collapsed}>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={IconHomeOutline}>Dashboard</Sidebar.Item>
          <Sidebar.Item icon={IconInboxOutline}>inbox</Sidebar.Item>
          <Sidebar.Item icon={IconUserCircleOutline}>Users</Sidebar.Item>
          <Sidebar.Item icon={IconShoppingBagOutline}>Products</Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup>
          <Sidebar.Item icon={IconFileEditSolid}>Documentation</Sidebar.Item>
          <Sidebar.Item icon={IconAdressBookOutline}>Help</Sidebar.Item>
          <Sidebar.Item icon={IconGearSolid}>Settings</Sidebar.Item>
          <Sidebar.Item icon={IconAtomSolid}>Details</Sidebar.Item>

          <Sidebar.Collapse label="Collapse" icon={IconAdjustmentsHorizontalSolid}>
            <Sidebar.Item>Dashboard</Sidebar.Item>
            <Sidebar.Item>inbox</Sidebar.Item>
            <Sidebar.Item>Users</Sidebar.Item>
            <Sidebar.Item>Products</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
