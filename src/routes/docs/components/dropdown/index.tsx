import { component$, useSignal } from '@builder.io/qwik'
import { Dropdown, DropdownItem } from '~/components/Dropdown/Dropdown'
import { IconHomeOutline, IconSearchSolid, IconTextSizeOutline } from '~/components/Icon'
import { DropdownSize } from '~/components/Dropdown/dropdown-types'
import { Toggle } from '~/components/Toggle/Toggle'

export default component$(() => {
  const enableNotifications = useSignal(false)
  const enable2faAuthentication = useSignal(true)
  const subscribeToNewsletter = useSignal(false)

  return (
    <section id="dropdown">
      <h2 class="text-2xl font-semibold my-3">Default Dropdown</h2>
      <div>
        <Dropdown label="Dropdown button">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown divider</h2>
      <div>
        <Dropdown label="Dropdown button">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Separated link</DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown header</h2>
      <div>
        <Dropdown label="Dropdown button">
          <DropdownItem header>
            <span class="block text-sm">Bonnie Green</span>
            <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
          </DropdownItem>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown items with icon</h2>
      <div>
        <Dropdown label="Dropdown button">
          <DropdownItem header>
            <span class="block text-sm">Bonnie Green</span>
            <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
          </DropdownItem>
          <DropdownItem icon={IconHomeOutline}>Dashboard</DropdownItem>
          <DropdownItem icon={IconSearchSolid}>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem icon={IconTextSizeOutline}>Sign out</DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Inline Dropdown</h2>
      <div>
        <Dropdown label="Dropdown button" inline>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Separated link</DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">User avatar</h2>
      <div>
        <Dropdown as={<img class="w-8 h-8 rounded-full" src="/profile-picture.jpg" alt="user photo" />}>
          <DropdownItem header>
            <span class="block text-sm">Bonnie Green</span>
            <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
          </DropdownItem>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown sizes</h2>
      <div class="flex gap-5">
        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (
          <Dropdown label="Dropdown button" size={size}>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
          </Dropdown>
        ))}
      </div>
      <div class="flex gap-5">
        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (
          <Dropdown label="Dropdown button" size={size} inline>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
          </Dropdown>
        ))}
      </div>

      <h2 class="text-2xl font-semibold my-3">Click event handler</h2>
      <div class="flex gap-5">
        <Dropdown label="Dropdown button">
          <DropdownItem
            onClick$={() => {
              alert('click dashboard')
            }}
          >
            Dashboard
          </DropdownItem>
          <DropdownItem
            onClick$={() => {
              alert('click settings')
            }}
          >
            Settings
          </DropdownItem>
          <DropdownItem
            onClick$={() => {
              alert('click earnings')
            }}
          >
            Earnings
          </DropdownItem>
          <DropdownItem
            onClick$={() => {
              alert('click sign-out')
            }}
          >
            Sign out
          </DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown with checkbox</h2>
      <div>
        <Dropdown label="Dropdown checkbox" closeWhenSelect={false}>
          <DropdownItem>
            <div class="flex items-center">
              <input
                id="checkbox-item-1"
                type="checkbox"
                value="item-1"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Default checkbox
              </label>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div class="flex items-center">
              <input
                checked
                id="checkbox-item-2"
                type="checkbox"
                value="item-2"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="checkbox-item-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Checked state
              </label>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div class="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value="item-3"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="checkbox-item-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Default checkbox
              </label>
            </div>
          </DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown with radiobox</h2>
      <div>
        <Dropdown label="Dropdown radio" closeWhenSelect={false}>
          <DropdownItem>
            <div class="flex items-center">
              <input
                id="radio-item-1"
                type="radio"
                name="default-radio"
                value="item-1"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="radio-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Default radio
              </label>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div class="flex items-center">
              <input
                checked
                id="radio-item-2"
                type="radio"
                name="default-radio"
                value="item-2"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="radio-item-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Checked state
              </label>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div class="flex items-center">
              <input
                id="radio-item-3"
                type="radio"
                name="default-radio"
                value="item-3"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="radio-item-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Default radio
              </label>
            </div>
          </DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown with toggle switch</h2>
      <div class="flex gap-4">
        <Dropdown label="Dropdown toggle" closeWhenSelect={false}>
          <DropdownItem>
            <Toggle label="Enable notifications" bind:checked={enableNotifications} />
          </DropdownItem>
          <DropdownItem>
            <Toggle label="Enable 2FA authentication" bind:checked={enable2faAuthentication} />
          </DropdownItem>
          <DropdownItem>
            <Toggle label="Subscribe to newsletter" bind:checked={subscribeToNewsletter} />
          </DropdownItem>
        </Dropdown>

        <Dropdown label="Dropdown toggle" closeWhenSelect={false}>
          <DropdownItem>
            <Toggle label="Enable notifications" bind:checked={enableNotifications} />
          </DropdownItem>
          <DropdownItem>
            <Toggle label="Enable 2FA authentication" bind:checked={enable2faAuthentication} />
          </DropdownItem>
          <DropdownItem>
            <Toggle label="Subscribe to newsletter" bind:checked={subscribeToNewsletter} />
          </DropdownItem>
        </Dropdown>
      </div>
    </section>
  )
})
