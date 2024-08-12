/**
 * title: Default sidebar
 * description: Use this example to show a list of navigation menu items by adding <Sidebar.Item> children components inside the <Sidebar> component and pass the href prop to set a URL and icon to apply any icons from the flowbite-qwik-icons icon library. You can also add a text label as a badge by using the label prop from Qwik and the labelColor to set the color of the label background.
 * height: 500
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Sidebar } from 'flowbite-qwik'
import { IconHomeOutline, IconInboxOutline, IconUserCircleOutline, IconShoppingBagOutline, IconChartBars3FromLeftSolid } from 'flowbite-qwik-icons'
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
        class="ms-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <span class="sr-only">Open sidebar</span>
        <IconChartBars3FromLeftSolid aria-hidden class="h-4 w-4 shrink-0" />
      </button>
      <Sidebar highlight collapsed={collapsed}>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={IconHomeOutline}>Dashboard</Sidebar.Item>
          <Sidebar.Item icon={IconInboxOutline}>inbox</Sidebar.Item>
          <Sidebar.Item icon={IconUserCircleOutline}>Users</Sidebar.Item>
          <Sidebar.Item icon={IconShoppingBagOutline}>Products</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
