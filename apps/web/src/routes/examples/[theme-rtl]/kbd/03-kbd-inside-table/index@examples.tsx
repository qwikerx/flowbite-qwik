/**
 * title: KBD inside table
 * description: The KBD component can also be used inside table components to denote what type of key can be pressed for certain descriptions.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Kbd, Table } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { IconAngleDownSolid, IconAngleLeftSolid, IconAngleRightSolid, IconAngleUpSolid } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Key</Table.HeadCell>
        <Table.HeadCell>Description</Table.HeadCell>
      </Table.Head>
      <Table.Body class="divide-y">
        <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <Kbd>Shift</Kbd> <span>or</span> <Kbd>Tab</Kbd>
          </Table.Cell>
          <Table.Cell>Navigate to interactive elements</Table.Cell>
        </Table.Row>
        <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <Kbd>Enter</Kbd> or <Kbd>Spacebar</Kbd>
          </Table.Cell>
          <Table.Cell>Ensure elements with ARIA role="button" can be activated with both key commands.</Table.Cell>
        </Table.Row>
        <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <span class="inline-flex gap-1">
              <Kbd icon={IconAngleUpSolid} />
              <Kbd icon={IconAngleDownSolid} />
            </span>
            <span> or </span>
            <span class="inline-flex gap-1">
              <Kbd icon={IconAngleLeftSolid} />
              <Kbd icon={IconAngleRightSolid} />
            </span>
          </Table.Cell>
          <Table.Cell>Choose and activate previous/next tab.</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
