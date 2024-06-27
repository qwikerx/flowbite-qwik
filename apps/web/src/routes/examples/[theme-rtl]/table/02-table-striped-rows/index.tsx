/**
 * title: Striped rows
 * description: Use the striped Qwik prop on the <Table> component to alternate the background of every second row of the table to increase contrast and readability.
 * height: 400
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Link, Table } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="overflow-x-auto">
      <Table striped>
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
          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Google Pixel Phone</Table.Cell>
            <Table.Cell>Gray</Table.Cell>
            <Table.Cell>Phone</Table.Cell>
            <Table.Cell>$799</Table.Cell>
            <Table.Cell>
              <Link href="#">Edit</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</Table.Cell>
            <Table.Cell>Red</Table.Cell>
            <Table.Cell>Wearables</Table.Cell>
            <Table.Cell>$999</Table.Cell>
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
