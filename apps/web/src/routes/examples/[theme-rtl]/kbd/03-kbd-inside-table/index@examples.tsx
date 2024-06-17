/**
 * title: KBD inside table
 * description: The KBD component can also be used inside table components to denote what type of key can be pressed for certain descriptions.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Kbd, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { IconAngleDownSolid, IconAngleLeftSolid, IconAngleRightSolid, IconAngleUpSolid } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <Table>
      <TableHead>
        <TableHeadCell>Key</TableHeadCell>
        <TableHeadCell>Description</TableHeadCell>
      </TableHead>
      <TableBody class="divide-y">
        <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <Kbd>Shift</Kbd> <span>or</span> <Kbd>Tab</Kbd>
          </TableCell>
          <TableCell>Navigate to interactive elements</TableCell>
        </TableRow>
        <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <Kbd>Enter</Kbd> or <Kbd>Spacebar</Kbd>
          </TableCell>
          <TableCell>Ensure elements with ARIA role="button" can be activated with both key commands.</TableCell>
        </TableRow>
        <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <span class="inline-flex gap-1">
              <Kbd icon={IconAngleUpSolid} />
              <Kbd icon={IconAngleDownSolid} />
            </span>
            <span> or </span>
            <span class="inline-flex gap-1">
              <Kbd icon={IconAngleLeftSolid} />
              <Kbd icon={IconAngleRightSolid} />
            </span>
          </TableCell>
          <TableCell>Choose and activate previous/next tab.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
