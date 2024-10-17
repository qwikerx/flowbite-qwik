/**
 * title: Dynamic table
 * description: Use this example to show a responsive table component with table head and body featuring cells and rows on multiple levels by using the <Table> Qwik component and the children components such as <Table.Head>, <Table.Body>, <Table.Row> and <Table.Cell>.
 * height: 300
 */

import { $, component$, useStore } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { Button, Link, Table } from 'flowbite-qwik'

export default component$(() => {
  const data = useStore([
    {
      id: 1,
      name: 'Apple MacBook Pro 17"',
      color: 'Sliver',
      category: 'Laptop',
      price: '$2999',
    },
    {
      id: 2,
      name: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      price: '$1999',
    },
    {
      id: 3,
      name: 'Magic Mouse 2',
      color: 'Black',
      category: 'Accessories',
      price: '$99',
    },
  ])

  const hadRow$ = $(() => {
    data.push({
      id: 4,
      name: 'Apple MacBook Pro 16"',
      color: 'Sliver',
      category: 'Laptop',
      price: '$1999',
    })
  })

  return (
    <div class="flex flex-col gap-2 overflow-x-auto">
      <Button onClick$={hadRow$}>Add row</Button>

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
          {data.map((item) => (
            <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.color}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell>
                <Link href="#">Edit</Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
