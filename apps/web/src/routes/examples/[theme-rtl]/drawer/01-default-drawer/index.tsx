/**
 * title: Drawer
 * description: Use the Drawer component (or "off-canvas") to show a fixed element relative to the document page from any side for navigation, contact forms, informational purposes or other user actions. You can set multiple options such as the placement, activate body scrolling, show or hide the backdrop and even use the sizeable edge functionality to show a small part of the drawer when it is not shown completely.
 * height: 500
 */

import { component$, Fragment, Signal, Slot, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Drawer, DrawerPosition, Heading, Link } from 'flowbite-qwik'
import { IconHomeOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const isDrawerOpen: Record<string, Signal<boolean>> = {
    left: useSignal(false),
    right: useSignal(false),
    top: useSignal(false),
    bottom: useSignal(false),
    'bottom-edge': useSignal(false),
  }

  return (
    <section class="p-2">
      <div>
        <Heading tag="h4" class="my-3">
          Choose you drawer
        </Heading>
        <div class="flex gap-2">
          {(['top', 'right', 'bottom', 'left', 'bottom-edge'] as DrawerPosition[]).map((position) => (
            <Fragment key={position}>
              <Button
                onClick$={() => {
                  isDrawerOpen[position].value = true
                }}
              >
                {position}
              </Button>

              <Drawer
                class={{
                  hidden: position === 'bottom-edge' && isDrawerOpen.bottom.value,
                }}
                bind:open={isDrawerOpen[position]}
                position={position}
                title={`Drawer ${position}`}
                titleIcon={IconHomeOutline}
              >
                <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                  Supercharge your hiring by taking advantage of our&nbsp;
                  <Link href="#" underline>
                    limited-time sale
                  </Link>
                  <br />
                  for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
                </p>
                <div class="flex gap-4">
                  <Button full>Buy</Button>
                  <Button color="alternative" full>
                    See more
                  </Button>
                </div>
              </Drawer>
            </Fragment>
          ))}
        </div>
        <Slot />
      </div>
    </section>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
