/**
 * title: Table with checkboxes
 * description: Use this example to show multiple checkbox form elements for each table row that you can use when performing bulk actions
 * height: 300
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Checkbox, Link, Table } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const choice = useSignal(false)

  return (
    <div class="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell class="p-4">
            <Checkbox bind:checked={choice} />
          </Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span class="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body class="divide-y">
          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell class="p-4">
              <Checkbox bind:checked={choice} />
            </Table.Cell>
            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{'Apple MacBook Pro 17"'}</Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <Link href="#" class="text-gray-9000">
                Edit
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell class="p-4">
              <Checkbox bind:checked={choice} />
            </Table.Cell>
            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <Link href="#" class="text-gray-9000">
                Edit
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell class="p-4">
              <Checkbox bind:checked={choice} />
            </Table.Cell>
            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <Link href="#" class="text-gray-9000">
                Edit
              </Link>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
