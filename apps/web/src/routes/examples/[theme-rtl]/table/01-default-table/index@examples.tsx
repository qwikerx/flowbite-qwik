/**
 * title: Default table
 * description: Use this example to show a responsive table component with table head and body featuring cells and rows on multiple levels by using the <Table> Qwik component and the children components such as <TableHead>, <TableBody>, <TableRow> and <TableCell>.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-qwik'

export default component$(() => {
  return (
    <div class="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>Product name</TableHeadCell>
          <TableHeadCell>Color</TableHeadCell>
          <TableHeadCell>Category</TableHeadCell>
          <TableHeadCell>Price</TableHeadCell>
          <TableHeadCell>
            <span class="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody class="divide-y">
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{'Apple MacBook Pro 17"'}</TableCell>
            <TableCell>Sliver</TableCell>
            <TableCell>Laptop</TableCell>
            <TableCell>$2999</TableCell>
            <TableCell>
              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</TableCell>
            <TableCell>White</TableCell>
            <TableCell>Laptop PC</TableCell>
            <TableCell>$1999</TableCell>
            <TableCell>
              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
            <TableCell>Black</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>$99</TableCell>
            <TableCell>
              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
