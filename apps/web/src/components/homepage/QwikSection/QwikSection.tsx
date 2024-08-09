import { Button, Link, useDarkMode } from 'flowbite-qwik'
import { component$ } from '@builder.io/qwik'
import { Link as LinkCity } from '@builder.io/qwik-city'
import { IconArrowRightSolid } from 'flowbite-qwik-icons'
import { CheckedIcon } from '~/components/homepage/CheckedIcon/CheckedIcon'

const feature_list = [
  'Huge collection of UI components built with Qwik',
  'Open-source under the MIT License',
  'Compatible with QwikJS 1.5',
  'Utility classes based on Tailwind CSS',
  'Based on the Flowbite ecosystem and design',
  'Fully accessible UI components',
]

export const QwikSection = component$(() => {
  const { isDark } = useDarkMode()

  return (
    <section class="bg-gray-50 dark:bg-gray-800">
      <div class="mx-auto w-full max-w-8xl px-4 py-8 lg:px-20 lg:py-24">
        <div class="flex w-full flex-row self-stretch py-6 lg:gap-16 lg:py-10">
          <div class="hidden w-1/2 items-center lg:flex">
            <img
              loading="lazy"
              decoding="async"
              src={`/qwik/qwik-${isDark.value ? 'dark' : 'light'}.svg`}
              alt="Qwik UI component code preview"
              width={608}
              height={535}
            />
          </div>
          <div class="flex w-1/2 grow flex-col items-start gap-4 divide-y dark:divide-gray-700 lg:gap-8">
            <div class="flex flex-col items-start gap-3 self-stretch sm:gap-4">
              <h2 class="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:text-4xl">Qwik UI components</h2>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                <Link href="" class="text-black underline dark:text-white">
                  Flowbite Qwik
                </Link>{' '}
                is a free and open-source UI component library based on accessible Qwik components and Tailwind CSS.
              </p>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                Get started building modern web applications using the Qwik UI components from Flowbite based on Tailwind CSS and the Flowbite design
                system by installing the package via NPM.
              </p>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                Browse a collection of hundreds of interactive UI components such as dropdowns, navbars, modals, and more.
              </p>
            </div>
            <div class="flex flex-col items-start self-stretch pt-8">
              <ul class="mb-6 list-inside list-none space-y-4 font-medium text-gray-900 dark:text-white lg:mb-8">
                {feature_list.map((f, i) => (
                  <li key={i} class="flex items-center gap-2">
                    <CheckedIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <div class="flex flex-row gap-4">
                <Button tag={LinkCity} href="/docs/getting-started/quickstart" suffix={IconArrowRightSolid}>
                  Start building
                </Button>
                <Button tag={LinkCity} href="https://github.com/qwikerx/flowbite-qwik" color="light">
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
