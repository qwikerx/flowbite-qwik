/**
 * title: Newsletter sign-up banner
 * description: This example can be used to encourage your website visitors to sign up to your email newsletter by showing an inline form inside the sticky banner on the top side of your page.
 * height: 450
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Banner, Button, Input } from 'flowbite-qwik'
import { IconCloseSolid } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const email = useSignal('')

  return (
    <div class="h-[440px]">
      <Banner sticky="bottom">
        <div class="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div class="mx-auto flex w-full shrink-0 items-center md:w-auto">
            <form action="#" class="flex w-full flex-col items-center gap-x-2 md:flex-row md:gap-x-3">
              <label for="email" class="mb-2 mr-auto w-full shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0">
                Sign up for our newsletter
              </label>
              <Input bind:value={email} id="email" placeholder="Enter your email" required type="email" class="w-full" />
              <Button type="submit" full>
                Subscribe
              </Button>
            </form>
          </div>
          <Banner.CollapseButton
            color="light"
            class="absolute right-1 top-1 border-0 bg-transparent text-gray-500 dark:bg-transparent dark:text-gray-400"
          >
            <IconCloseSolid class="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </Banner>
      <div class="mx-auto max-w-lg">
        <div role="status" class="my-7 animate-pulse">
          <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[380px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <span class="sr-only">Loading...</span>
        </div>
        <div role="status" class="mb-7 max-w-lg animate-pulse">
          <div class="flex h-48 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
            <svg class="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
            </svg>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
        <div role="status" class="my-6 animate-pulse">
          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[380px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <span class="sr-only">Loading...</span>
        </div>
        <div role="status" class="my-6 animate-pulse">
          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
