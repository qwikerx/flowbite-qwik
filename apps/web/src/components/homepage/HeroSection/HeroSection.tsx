import { Button } from 'flowbite-qwik'
import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { IconArrowRightOutline } from 'flowbite-qwik-icons'
import { CopyPackageInput } from '~/components/homepage/HeroSection/CopyPackageInput'

export const HeroSection = component$(() => {
  return (
    <section class="max-w-8xl mx-auto flex flex-col overflow-hidden px-4 py-6 sm:py-8 lg:px-20 lg:pb-24 lg:pt-16">
      <div class="flex flex-col gap-20">
        <div class="grid gap-10 md:grid-cols-2">
          <div class="flex flex-col justify-start gap-4 xl:max-w-[676px]">
            <div class="flex flex-col gap-4 text-left lg:gap-6">
              <h1 class="max-w-3xl text-4xl font-extrabold leading-none text-gray-900 dark:text-white lg:text-5xl xl:text-6xl">
                <span class="xl:inline">Build modern web applications with</span>
                <span class="ml-2 text-qwik xl:inline">Flowbite Qwik</span>
              </h1>
              <p class="max-w-3xl text-lg leading-normal text-gray-500 dark:text-gray-400 lg:text-xl">
                Flowbite Qwik is an open-source UI component library built on top of Tailwind CSS with Qwik components and based on the Flowbite
                Design System.
              </p>
              <div class="mt-2 grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 sm:gap-6 [&>div:first-child]:w-full">
                <CopyPackageInput value="npx flowbite-qwik-cli@latest init" />
                <div class="justify-center sm:flex sm:justify-start">
                  <div class="mx-0 flex flex-row items-center gap-4 sm:gap-6">
                    <Button
                      tag={Link}
                      size="lg"
                      class="w-full whitespace-nowrap"
                      href="/docs/getting-started/introduction"
                      suffix={IconArrowRightOutline}
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden items-center p-0 md:flex">
            <div class="relative dark:hidden">
              <img
                class="h-auto max-w-full"
                src="https://res.cloudinary.com/dkht4mwqi/image/upload/v1719560521/flowbite-qwik/gallery_hero.png"
                alt="Header"
                width={620}
                height={416}
              />
            </div>
            <div class="relative hidden dark:block">
              <img
                class="h-auto max-w-full"
                src="https://res.cloudinary.com/dkht4mwqi/image/upload/v1719560521/flowbite-qwik/gallery_hero_dark.png"
                alt="Header"
                width={620}
                height={416}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
