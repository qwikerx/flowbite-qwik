/**
 * title: Dropdown with search
 * description: Use this example if you want to add a search bar inside the dropdown menu to be able to filter through a long list of menu items with scrolling behaviour.
 */

import { component$, useComputed$, useSignal, useTask$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Checkbox, Dropdown, Input } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const checkboxes = [
    {
      label: 'Default checkbox',
      value: 'item-1',
    },
    {
      label: 'Second checkbox',
      value: 'item-2',
    },
    {
      label: 'Third checkbox',
      value: 'item-3',
    },
  ]

  const searchValue = useSignal('')
  const inputRef = useSignal<HTMLInputElement>()
  const filteredCheckboxes = useComputed$(() =>
    checkboxes.filter((checkbox) => checkbox.label.toLowerCase().includes(searchValue.value.toLowerCase())),
  )

  useTask$(({ track }) => {
    track(() => inputRef.value)
    inputRef.value?.focus()
  })

  return (
    <Dropdown label="Dropdown search" closeWhenSelect={false}>
      <Dropdown.Item header>
        <Input ref={inputRef} placeholder="Search..." bind:value={searchValue} />
      </Dropdown.Item>

      {filteredCheckboxes.value.map((checkbox) => (
        <Dropdown.Item key={checkbox.value}>
          <Checkbox value={checkbox.value}>{checkbox.label}</Checkbox>
        </Dropdown.Item>
      ))}
    </Dropdown>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
