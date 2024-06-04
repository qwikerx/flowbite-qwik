import { Slot, component$, useSignal } from '@builder.io/qwik'
import { DrawerPosition } from 'flowbite-qwik/lib-types/components/Drawer/drawer-types'
import { Button, Drawer, IconHomeOutline } from 'flowbite-qwik'

export default component$(() => {
  const isDrawerOpen = {
    left: useSignal(false),
    right: useSignal(false),
    top: useSignal(false),
    bottom: useSignal(false),
    'bottom-edge': useSignal(false),
  }

  return (
    <section id="drawer">
      <div>
        <h2 class="text-2xl font-semibold my-3">Default Drawer</h2>
        <div class="flex gap-2">
          {(['top', 'right', 'bottom', 'left', 'bottom-edge'] as DrawerPosition[]).map((position) => (
            <>
              <Button
                onClick$={() => {
                  isDrawerOpen[position].value = true
                }}
              >
                {position}
              </Button>

              <Drawer bind:open={isDrawerOpen[position]} position={position} title={`Drawer ${position}`} titleIcon={IconHomeOutline}>
                <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                  Supercharge your hiring by taking advantage of our&nbsp;
                  <a href="#" class="text-cyan-600 underline hover:no-underline dark:text-cyan-500">
                    limited-time sale
                  </a>
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
            </>
          ))}
        </div>
        <Slot />
      </div>
    </section>
  )
})
