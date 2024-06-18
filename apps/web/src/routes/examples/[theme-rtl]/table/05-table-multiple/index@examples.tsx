/**
 * title: Table multiple
 * description: Use this example to show multiple tables on the same page
 * height: 500
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Link, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-col gap-8">
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
                <Link href="#">Edit</Link>
              </TableCell>
            </TableRow>
            <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</TableCell>
              <TableCell>White</TableCell>
              <TableCell>Laptop PC</TableCell>
              <TableCell>$1999</TableCell>
              <TableCell>
                <Link href="#">Edit</Link>
              </TableCell>
            </TableRow>
            <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
              <TableCell>Black</TableCell>
              <TableCell>Accessories</TableCell>
              <TableCell>$99</TableCell>
              <TableCell>
                <Link href="#">Edit</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div class="overflow-x-auto">
        <Table hoverable>
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
                <Link href="#">Edit</Link>
              </TableCell>
            </TableRow>
            <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</TableCell>
              <TableCell>White</TableCell>
              <TableCell>Laptop PC</TableCell>
              <TableCell>$1999</TableCell>
              <TableCell>
                <Link href="#">Edit</Link>
              </TableCell>
            </TableRow>
            <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
              <TableCell>Black</TableCell>
              <TableCell>Accessories</TableCell>
              <TableCell>$99</TableCell>
              <TableCell>
                <Link href="#">Edit</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
