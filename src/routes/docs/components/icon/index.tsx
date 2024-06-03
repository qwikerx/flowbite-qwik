import { component$ } from '@builder.io/qwik'
import * as Icons from '~/components/Icon'

export default component$(() => {
  return (
    <>
      <h1 class="capitalize text-4xl font-bold mb-4">Icon</h1>

      <p class="text-gray-600 dark:text-gray-400 mb-7">
        Flowbite Qwik exports a set of icons based on the official Flowbite icons. These icons are built on top of the{' '}
        <a href="https://github.com/qwikest/icons" class="text-blue-600 dark:text-blue-400">
          qwikest/icons
        </a>{' '}
        library, and wrapped to work with Flowbite Qwik and Qwik more generally (to be passed as props for example).
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(Icons).map(([key, Icon], index) => (
          <div key={key + index} class="text-center flex gap-2 justify-center flex-col bg-slate-400 dark:bg-slate-700 p-4 rounded-sm">
            <Icon class="w-6 h-6 dark:text-white text-gray-600 mx-auto" />
            <span>{key}</span>
          </div>
        ))}
      </div>
    </>
  )
})
