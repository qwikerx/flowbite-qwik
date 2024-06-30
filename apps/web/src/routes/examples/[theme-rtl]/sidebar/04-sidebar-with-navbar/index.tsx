/**
 * title: Sidebar with navbar
 * description: Use this example to show a navbar together with a sidebar layout for your web application.
 * height: 500
 */

import { component$ } from '@builder.io/qwik'
import { Sidebar } from 'flowbite-qwik'
import { IconHomeOutline, IconInboxOutline, IconUserCircleOutline, IconShoppingBagOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { NavbarPage } from '~/components/NavbarPage/NavbarPage'

export default component$(() => {
  return (
    <>
      <NavbarPage fullWidth withSidebar />

      <Sidebar withNavbar highlight>
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
