/**
 * title: User avatar
 * description:  You can use the `as` prop to set the trigger element to an image.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-5">
      <Dropdown
        as={
          <img
            class="w-8 h-8 rounded-full"
            src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"
            alt="user photo"
          />
        }
      >
        <Dropdown.Item header>
          <span class="block text-sm">Bonnie Green</span>
          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
        </Dropdown.Item>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>

      <Dropdown
        as={
          <img
            class="w-8 h-8 rounded-full"
            src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"
            alt="user photo"
          />
        }
      >
        <Dropdown.Item header>
          <span class="block text-sm">Bonnie Green</span>
          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
        </Dropdown.Item>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>

      <Dropdown
        as={
          <img
            class="w-8 h-8 rounded-full"
            src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"
            alt="user photo"
          />
        }
      >
        <Dropdown.Item header>
          <span class="block text-sm">Bonnie Green</span>
          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
        </Dropdown.Item>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
