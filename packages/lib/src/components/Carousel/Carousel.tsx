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
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

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
      component: CarouselSlide,
      foundComponentCallback: (child, index) => {
        const childrenIsArray = Array.isArray(child.children)

        let computedChildren
        if (childrenIsArray) {
          computedChildren = createElement('div', { key: uuid(), class: classesToAdd }, child.children)
        } else {
          // immutableProps is a hack to get the class prop from the child. Check if this works in qwik v2
          const cc = child.children as JSXNode & { immutableProps?: Record<string, unknown> }
          const classProp = cc.immutableProps?.class || cc.props.class

          computedChildren = createElement(
            cc.type as string,
            {
              ...cc.props,
              ...cc.immutableProps,
              class: classProp ? twMerge(classProp as string, classesToAdd) : classesToAdd,
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

type CarouselSlideProps = PropsOf<'div'>

export const CarouselSlide = component$<CarouselSlideProps>(() => {
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
    class: className,
  }) => {
    useStyles$(styles)

    const carouselContainer = useSignal<HTMLDivElement>()

    const state = useStore({
      currentPicture: 0,
      direction: '',
      interval: undefined,

      automaticSlide: $(function (this: CarouselStore) {
        if (!slideAuto) return

        this.interval = setInterval(this.nextPicture.bind(this), slideInterval)
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
      <div class={twMerge('relative h-56 w-full sm:h-64 xl:h-80 2xl:h-96', clsx(className))}>
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
            'flex h-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scroll-smooth rounded-lg',
            {
              'overflow-hidden overflow-x-hidden! [scrollbar-width:none]': !scrollable,
              '[&::-webkit-scrollbar]:[-webkit-appearance:none !important] [&::-webkit-scrollbar]:hidden! [&::-webkit-scrollbar]:h-0! [&::-webkit-scrollbar]:w-0! [&::-webkit-scrollbar]:bg-transparent!':
                !scrollable,
              'carousel-scrollable': scrollable,
            },
          ]}
        >
          {components.map((comp, i) => (
            <div key={i} class="w-full shrink-0 transform cursor-default snap-center">
              <>{comp.children}</>
            </div>
          ))}
        </div>
        {!noIndicators && (
          <div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
            {components.map((comp, i) => (
              <button
                key={comp.id}
                aria-label={'Slide ' + comp.id}
                class={[
                  i === state.currentPicture ? 'bg-white dark:bg-gray-800' : 'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
                  'h-3 w-3 rounded-full',
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
              class="group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-hidden"
              type="button"
              onClick$={() => {
                state.previousPicture()
              }}
            >
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-hidden sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                <IconAngleLeftSolid class="h-4 w-4 text-white sm:h-5 sm:w-5 dark:text-gray-800" />
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              class="group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-hidden"
              type="button"
              onClick$={() => {
                state.nextPicture()
              }}
            >
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-hidden sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                <IconAngleRightOutline class="h-4 w-4 text-white sm:h-5 sm:w-5 dark:text-gray-800" />
                <span class="sr-only">Next</span>
              </span>
            </button>
          </>
        )}
      </div>
    )
  },
)
