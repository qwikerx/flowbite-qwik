/**
 * title: With CTA
 * description: This example can be used to show a call to action button inside the sidebar next to the menu items.
 * height: 500
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Sidebar, Badge, useSidebarOpen } from 'flowbite-qwik'
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
} from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const isCtaVisible = useSignal(true)
  const { setIsOpen } = useSidebarOpen()

  return (
    <div class="p-3">
      <button
        onClick$={() => {
          setIsOpen(true)
        }}
        type="button"
        class="ms-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
      >
        <span class="sr-only">Open sidebar</span>
        <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <Sidebar highlight closeButton>
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
        {isCtaVisible.value && (
          <Sidebar.Cta onClose$={() => (isCtaVisible.value = false)}>
            <Badge q:slot="badge" type="yellow" content="new" />

            <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">
              Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
            </p>
            <a class="text-sm font-medium text-blue-800 underline hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">
              Turn new navigation off
            </a>
          </Sidebar.Cta>
        )}
      </Sidebar>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
