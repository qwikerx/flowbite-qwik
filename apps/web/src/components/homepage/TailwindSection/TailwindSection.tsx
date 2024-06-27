import { component$ } from '@builder.io/qwik'
import { Link } from 'flowbite-qwik'

export const TailwindSection = component$(() => {
  return (
    <section class="bg-gray-50 dark:bg-gray-800">
      <div class="max-w-8xl mx-auto w-full px-4 py-8 lg:px-20 lg:py-24">
        <div class="flex w-full flex-row self-stretch py-6 lg:gap-16 lg:py-10">
          <div class="hidden w-1/2 items-center lg:flex">
            <img
              src="https://res.cloudinary.com/dkht4mwqi/image/upload/v1719500049/flowbite-qwik/tailwind.png"
              class="dark:hidden"
              alt="Tailwind CSS with Qwik code"
              width={549}
              height={496}
            />
            <img
              src="https://res.cloudinary.com/dkht4mwqi/image/upload/v1719500027/flowbite-qwik/tailwind_dark.png"
              class="hidden dark:block"
              alt="Tailwind CSS with Qwik code (dark mode)"
              width={549}
              height={496}
            />
          </div>
          <div class="flex w-1/2 grow flex-col items-start gap-4 divide-y dark:divide-gray-700 lg:gap-8">
            <div class="flex flex-col items-start gap-3 self-stretch sm:gap-4">
              <h2 class="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:text-4xl">Works with Tailwind CSS</h2>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                Flowbite Qwik uses the Tailwind CSS utility classes under the hood which means it will be easy to customize the appearance and
                specifications of the UI components directly from the HTML code.
              </p>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                <Link href="https://tailwindcss.com">Tailwind CSS</Link> is a popular and open-source utility-first CSS framework that you can use to
                speed up the development of your front-end projects.
              </p>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                Flowbite Qwik is also based on the core <Link href="https://flowbite.com">Flowbite</Link> UI component library the also features
                interactive UI components like dropdowns, modals, navbars, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
