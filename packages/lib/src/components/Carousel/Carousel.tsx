import {
  $,
  component$,
  createElement,
  FunctionComponent,
  JSXChildren,
  JSXNode,
  PropsOf,
  Slot,
  useSignal,
  useStore,
  useStyles$,
  useVisibleTask$,
} from '@builder.io/qwik'
import { getChild } from '~/utils/children-inspector'
import uuid from '~/utils/uuid'
import { IconAngleLeftSolid, IconAngleRightOutline } from 'flowbite-qwik-icons'
import styles from './Carousel.css?inline'

interface ComponentType {
  id: number
  children: JSXChildren
}

type CarouselProps = PropsOf<'div'> & {
  noIndicators?: boolean
  noControls?: boolean
  slideAuto?: boolean
  slideInterval?: number
  scrollable?: boolean
  pauseOnHover?: boolean
  onSlideChanged$?: () => void
}
export const Carousel: FunctionComponent<CarouselProps> = ({ children, ...props }) => {
  const components: ComponentType[] = []
  const classesToAdd = 'absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'

  getChild(children, [
    {
      component: CarouselSlice,
      foundComponentCallback: (child, index) => {
        const childrenIsArray = Array.isArray(child.children)

        let computedChildren
        if (childrenIsArray) {
          computedChildren = createElement('div', { key: uuid(), class: classesToAdd }, child.children)
        } else {
          const cc = child.children as JSXNode

          computedChildren = createElement(
            cc.type as string,
            {
              class: cc.immutableProps?.['class'] + ' ' + classesToAdd,
              alt: cc.immutableProps?.['alt'],
              src: cc.immutableProps?.['src'],
              key: cc.key,
            },
            cc.children,
          )
        }

        components.push({
          id: index,
          children: computedChildren,
        })
      },
    },
  ])

  return <InnerCarousel components={components} {...props} />
}

type CarouselSliceProps = PropsOf<'div'>

export const CarouselSlice = component$<CarouselSliceProps>(() => {
  return <Slot />
})

/**
 * Implementation
 */

type InnerCarouselProps = CarouselProps & {
  components: ComponentType[]
}

type CarouselStore = {
  currentPicture: number
  direction: string
  interval: ReturnType<typeof setInterval>
  automaticSlide: (this: CarouselStore) => void
  nextPicture: (this: CarouselStore) => void
  resetInterval: (this: CarouselStore) => void
  slideTo: (this: CarouselStore, index: number) => void
  previousPicture: (this: CarouselStore) => void
  goTo: (this: CarouselStore) => void
  mouseEnter: (this: CarouselStore) => void
  mouseLeave: (this: CarouselStore) => void
}

const InnerCarousel = component$<InnerCarouselProps>(
  ({
    components,
    noIndicators = false,
    noControls = false,
    onSlideChanged$,
    pauseOnHover = false,
    scrollable = false,
    slideAuto = true,
    slideInterval = 3000,
  }) => {
    useStyles$(styles)

    const carouselContainer = useSignal<HTMLDivElement>()

    const state = useStore({
      currentPicture: 0,
      direction: '',
      interval: undefined,

      automaticSlide: $(function (this: CarouselStore) {
        if (!slideAuto) return
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this
        this.interval = setInterval(function () {
          that.nextPicture()
        }, slideInterval)
      }),

      resetInterval: $(function (this: CarouselStore) {
        clearInterval(this.interval)
        this.automaticSlide()
      }),

      slideTo: $(function (this: CarouselStore, index: number) {
        this.currentPicture = index
        this.goTo()
        this.resetInterval()
      }),

      nextPicture: $(function (this: CarouselStore) {
        if (this.currentPicture !== components.length - 1) {
          this.currentPicture += 1
        } else {
          this.currentPicture = 0
        }

        this.goTo()
        this.direction = 'right'
        this.resetInterval()
      }),

      previousPicture: $(function (this: CarouselStore) {
        if (this.currentPicture !== 0) {
          this.currentPicture -= 1
        } else {
          this.currentPicture = components.length - 1
        }

        this.goTo()
        this.direction = 'left'
        this.resetInterval()
      }),

      goTo: $(function (this: CarouselStore) {
        onSlideChanged$?.()
        if (carouselContainer.value) {
          carouselContainer.value.scrollLeft = carouselContainer.value.clientWidth * this.currentPicture
        }
      }),

      mouseEnter: $(function (this: CarouselStore) {
        if (!pauseOnHover) return
        clearInterval(this.interval)
      }),

      mouseLeave: $(function (this: CarouselStore) {
        if (!pauseOnHover) return
        this.resetInterval()
      }),
    })

    const onScroll = $(() => {
      if (!scrollable) return
      if (carouselContainer.value) {
        state.currentPicture = Math.round(carouselContainer.value.scrollLeft / carouselContainer.value.clientWidth)
      }
    })

    useVisibleTask$(() => {
      if (slideAuto) {
        state.automaticSlide()
      }
    })

    return (
      <div class="relative h-full w-full">
        <div
          ref={carouselContainer}
          onScroll$={onScroll}
          onMouseEnter$={() => {
            state.mouseEnter()
          }}
          onMouseLeave$={() => {
            state.mouseLeave()
          }}
          class={[
            'snap-x flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg',
            {
              'overflow-hidden !overflow-x-hidden [scrollbar-width:none]': !scrollable,
              '[&::-webkit-scrollbar]:[-webkit-appearance:none !important] [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!h-0 [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!bg-transparent':
                !scrollable,
              'carousel-scrollable': scrollable,
            },
          ]}
        >
          {components.map((comp, i) => (
            <div key={i} class="w-full flex-shrink-0 transform cursor-default snap-center">
              <>{comp.children}</>
            </div>
          ))}
        </div>
        {!noIndicators && (
          <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            {components.map((comp, i) => (
              <button
                key={comp.id}
                aria-label={'Slide ' + comp.id}
                class={[
                  i === state.currentPicture ? 'bg-white dark:bg-gray-800' : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                  'w-3 h-3 rounded-full',
                ]}
                aria-current={false}
                type="button"
                onClick$={() => {
                  state.slideTo(i)
                }}
              />
            ))}
          </div>
        )}
        {!noControls && !scrollable && (
          <>
            <button
              class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              type="button"
              onClick$={() => {
                state.previousPicture()
              }}
            >
              <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <IconAngleLeftSolid class="w-4 h-4 text-white sm:w-5 sm:h-5 dark:text-gray-800" />
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              type="button"
              onClick$={() => {
                state.nextPicture()
              }}
            >
              <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <IconAngleRightOutline class="w-4 h-4 text-white sm:w-5 sm:h-5 dark:text-gray-800" />
                <span class="sr-only">Next</span>
              </span>
            </button>
          </>
        )}
      </div>
    )
  },
)
