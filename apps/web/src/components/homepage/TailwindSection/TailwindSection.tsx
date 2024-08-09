import { component$ } from '@builder.io/qwik'
import { Link, useDarkMode } from 'flowbite-qwik'

export const TailwindSection = component$(() => {
  const { isDark } = useDarkMode()

  return (
    <section class="bg-gray-50 dark:bg-gray-800">
      <div class="mx-auto w-full max-w-screen-xl px-4 py-8 lg:py-24 xl:px-3">
        <div class="flex w-full flex-row self-stretch py-6 lg:gap-16 lg:py-10">
          <div class="hidden w-1/2 items-center lg:flex">
            <img
              loading="lazy"
              decoding="async"
              src={`/tailwind/tailwind-${isDark.value ? 'dark' : 'light'}.svg`}
              alt="Tailwind CSS with Qwik code"
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
                <Link href="https://tailwindcss.com" class="text-black underline dark:text-white">
                  Tailwind CSS
                </Link>{' '}
                is a popular and open-source utility-first CSS framework that you can use to speed up the development of your front-end projects.
              </p>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                Flowbite Qwik is also based on the core{' '}
                <Link href="https://flowbite.com" class="text-black underline dark:text-white">
                  Flowbite
                </Link>{' '}
                UI component library the also features interactive UI components like dropdowns, modals, navbars, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
