/**
 * title: Sidebar with navbar
 * description: Use this example to show a navbar together with a sidebar layout for your web application.
 * height: 500
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Sidebar } from 'flowbite-qwik'
import {
  IconHomeOutline,
  IconInboxOutline,
  IconUserCircleOutline,
  IconShoppingBagOutline,
  IconCloseSolid,
  IconChartBars3FromLeftSolid,
} from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { NavbarPage } from '~/components/NavbarPage/NavbarPage'

export default component$(() => {
  const collapsed = useSignal(false)

  return (
    <>
      <NavbarPage>
        <button
          q:slot="action"
          class="sm:hidden"
          onClick$={() => {
            collapsed.value = !collapsed.value
          }}
        >
          {collapsed.value ? <IconCloseSolid class="size-5" /> : <IconChartBars3FromLeftSolid class="size-5" />}
          <span class="sr-only">Open sidebar</span>
        </button>
      </NavbarPage>

      <Sidebar
        collapsed={collapsed}
        highlight
        theme={{
          nav: 'pt-20',
        }}
      >
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={IconHomeOutline}>Dashboard</Sidebar.Item>
          <Sidebar.Item icon={IconInboxOutline}>inbox</Sidebar.Item>
          <Sidebar.Item icon={IconUserCircleOutline}>Users</Sidebar.Item>
          <Sidebar.Item icon={IconShoppingBagOutline}>Products</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
