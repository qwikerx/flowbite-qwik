import { component$, useSignal } from '@builder.io/qwik'
import { Badge, IconSearchOutline, Input } from 'flowbite-qwik'

export default component$(() => {
  const value = useSignal('')
  return (
    <section id="inputs">
      <h2 class="text-4xl">Value : {value}</h2>
      <div>
        <h2 class="text-2xl font-semibold my-3">Default input</h2>
        <Input bind:value={value} label="Name" placeholder="John Doe" />
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Size</h2>

        <div class="flex gap-3">
          <Input bind:value={value} label="Small" placeholder="enter your name" size="sm" />
          <Input bind:value={value} label="Medium" placeholder="enter your name" size="md" />
          <Input bind:value={value} label="Large" placeholder="enter your name" size="lg" />
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Disabled</h2>
        <Input bind:value={value} disabled label="First name" placeholder="First name" />
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Required</h2>
        <Input bind:value={value} required label="First name" placeholder="First name" />
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Required</h2>
        <Input
          bind:value={value}
          label="First name"
          placeholder="First name"
          helper={
            <>
              We'll never share your details. Read our{''}
              <a href="#" class="text-blue-600 dark:text-blue-500">
                Privacy Policy
              </a>
              .
            </>
          }
        />
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Prefix</h2>
        <Input
          bind:value={value}
          label="First name"
          placeholder="First name"
          prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />}
        />
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Suffix</h2>
        <Input
          bind:value={value}
          label="First name"
          placeholder="First name"
          size="lg"
          prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />}
          suffix={<Badge content="Submit" />}
        />
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Validation</h2>
        <Input bind:value={value} label="First name" placeholder="First name" validationStatus="success" />
        <hr class="mt-4 border-0"></hr>
        <Input bind:value={value} label="First name" placeholder="First name" validationStatus="error" validationMessage="This field is not valid" />
      </div>
    </section>
  )
})
