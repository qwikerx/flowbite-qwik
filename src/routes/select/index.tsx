import { component$, useStore } from '@builder.io/qwik'
import { Dropdown, DropdownItem, DropdownSize } from '~/components/Dropdown/Dropdown'

export default component$(() => {
  const selectedStore = useStore({ value: '' })

  return (
    <section id="dropdown" class="p-5">
      <h2 class="text-2xl font-semibold my-3">Default Dropdown ({selectedStore.value})</h2>
      <div>
        <Dropdown
          label="Dropdown button"
          whenSelect$={(value) => {
            alert(value)
          }}
          bind:selected={selectedStore}
          closeWhenSelect={false}
        >
          <DropdownItem value="dashboard">Dashboard</DropdownItem>
          <DropdownItem value="settings">Settings</DropdownItem>
          <DropdownItem value="earnings">Earnings</DropdownItem>
          <DropdownItem value="signout">Sign out</DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown divider</h2>
      <div>
        <Dropdown label="Dropdown button" whenSelect$={() => null} bind:selected={selected}>
          <DropdownItem value="dashboard">Dashboard</DropdownItem>
          <DropdownItem value="settings">Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem value="separated-link">Separated link</DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown header</h2>
      <div>
        <Dropdown label="Dropdown button" whenSelect$={() => null} bind:selected={selected}>
          <DropdownItem header>
            <span class="block text-sm">Bonnie Green</span>
            <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
          </DropdownItem>
          <DropdownItem value="dashboard">Dashboard</DropdownItem>
          <DropdownItem value="settings">Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem value="signout">Sign out</DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown items with icon</h2>
      <div>
        <Dropdown label="Dropdown button" whenSelect$={() => null} bind:selected={selected}>
          <DropdownItem header>
            <span class="block text-sm">Bonnie Green</span>
            <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
          </DropdownItem>
          <DropdownItem
            value="dashboard"
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                class="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            }
          >
            Dashboard
          </DropdownItem>
          <DropdownItem
            value="settings"
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                class="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            }
          >
            Settings
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem
            value="signout"
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                class="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            }
          >
            Sign out
          </DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Inline Dropdown</h2>
      <div>
        <Dropdown label="Dropdown button" whenSelect$={() => null} bind:selected={selected} inline>
          <DropdownItem value="dashboard">Dashboard</DropdownItem>
          <DropdownItem value="settings">Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem value="separated-link">Separated link</DropdownItem>
        </Dropdown>
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown sizes</h2>
      <div class="flex gap-5">
        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (
          <button
            onClick$={() => {
              whenSelectValue.value = 'la'
            }}
          >
            <DropdownItem value="dashboard">Dashboard</DropdownItem>
            <DropdownItem value="settings">Settings</DropdownItem>
          </button>
        ))}
      </div>
      <div class="flex gap-5">
        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (
          <Dropdown label="Dropdown button" whenSelect$={() => null} bind:selected={selected} size={size} inline iconRotate={-180}>
            <DropdownItem value="dashboard">Dashboard</DropdownItem>
            <DropdownItem value="settings">Settings</DropdownItem>
          </Dropdown>
        ))}
      </div>

      <h2 class="text-2xl font-semibold my-3">Dropdown icon rotate</h2>
      <div class="flex gap-5">
        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (
          <Dropdown label="Dropdown button" whenSelect$={() => null} bind:selected={selected} size={size} iconRotate={90}>
            <DropdownItem value="dashboard">Dashboard</DropdownItem>
            <DropdownItem value="settings">Settings</DropdownItem>
          </Dropdown>
        ))}
      </div>
    </section>
  )
})
