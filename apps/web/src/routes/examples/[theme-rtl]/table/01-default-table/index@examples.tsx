/**
 * title: Default table
 * description: Use this example to show a responsive table component with table head and body featuring cells and rows on multiple levels by using the <Table> Qwik component and the children components such as <Table.Head>, <Table.Body>, <Table.Row> and <Table.Cell>.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { Link, Table } from 'flowbite-qwik'

export default component$(() => {
  return (
    <div class="overflow-x-auto">
      <Table>
        <Table.Head>
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
            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{'Apple MacBook Pro 17"'}</Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <Link href="#">Edit</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <Link href="#">Edit</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <Link href="#">Edit</Link>
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
