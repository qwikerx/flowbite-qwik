import { DarkModeSwitcher } from './DarkModeSwitcher'
import { component$ } from '@builder.io/qwik'
import { Link, useDarkMode } from 'flowbite-qwik'
import { IconArrowRightSolid } from 'flowbite-qwik-icons'
import { CheckedIcon } from '~/components/homepage/CheckedIcon/CheckedIcon'

const feature_list = [
  'Increased accessibility based on room brightness',
  'Better visibility for users with low vision',
  'Improved readability for users with light sensitivity',
  'High quality UI/UX design for modern applications',
]

export const DarkModeSection = component$(() => {
  const { isDark } = useDarkMode()

  return (
    <section class="bg-gray-50 dark:bg-gray-800">
      <div class="mx-auto w-full max-w-screen-xl px-4 py-8 lg:py-24 xl:px-3">
        <div class="flex w-full flex-row-reverse self-stretch py-6 lg:gap-16 lg:py-10">
          <div class="hidden w-1/2 items-center lg:flex">
            <img
              loading="lazy"
              decoding="async"
              src={`/dark-mode/dark-mode-${isDark.value ? 'dark' : 'light'}.svg`}
              alt="Qwik dark mode preview"
              width={608}
              height={443}
            />
          </div>
          <div class="flex w-1/2 grow flex-col items-start gap-4 divide-y dark:divide-gray-700 lg:gap-8">
            <div class="flex flex-col items-start gap-3 self-stretch sm:gap-4">
              <DarkModeSwitcher />
              <h2 class="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:text-4xl">Dark mode integration</h2>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                Flowbite Qwik has native built-in support for{' '}
                <Link href="/docs/customize/dark-mode" class="text-black underline dark:text-white">
                  dark mode
                </Link>{' '}
                by using Tailwind CSS and the Flowbite design system.
              </p>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                All of the UI components from Flowbite Qwik will automatically invert the colors when activating dark mode via browser settings or
                using a custom switcher component.
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
                <Link href="/docs/customize/dark-mode" iconRight={IconArrowRightSolid}>
                  Learn how to integrate dark mode in Qwik
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
