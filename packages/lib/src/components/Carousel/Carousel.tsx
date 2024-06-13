import {
  $,
  component$,
  createElement,
  Fragment,
  FunctionComponent,
  JSXChildren,
  JSXNode,
  PropsOf,
  Slot,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik'
import { getChild } from '~/utils/getChild'
import uuid from '~/utils/uuid'
import { IconAngleLeftSolid, IconAngleRightOutline } from 'flowbite-qwik-icons'

interface ComponentType {
  id: number
  children: JSXChildren
}

type CarouselProps = PropsOf<'div'> & {
  noIndicators?: boolean
  noControls?: boolean
  slideAuto?: boolean
  slideInterval?: number
  animation?: boolean
}
export const Carousel: FunctionComponent<CarouselProps> = ({ children, ...props }) => {
  const components: ComponentType[] = []
  const classesToAdd = 'block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'

  getChild(children, [
    {
      component: CarouselSlice,
      foundComponentCallback: (child, index) => {
        const childrenIsArray = Array.isArray(child.children)

        let computedChildren
        if (childrenIsArray) {
          computedChildren = createElement(Fragment, { key: uuid(), class: classesToAdd }, child.children)
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

const InnerCarousel = component$<InnerCarouselProps>(
  ({ components, noIndicators = false, noControls = false, slideAuto = true, slideInterval = 3000 }) => {
    const currentPicture = useSignal(0)
    const direction = useSignal('')
    const interval = useSignal<ReturnType<typeof setInterval>>()

    const automaticSlide = $(() => {
      interval.value = setInterval(function () {
        nextPicture()
      }, slideInterval)
    })

    const resetInterval = $(() => {
      clearInterval(interval.value)
      automaticSlide()
    })

    const slideTo = $((index: number) => {
      currentPicture.value = index
      resetInterval()
    })

    const nextPicture = $(() => {
      if (currentPicture.value !== components.length - 1) {
        currentPicture.value++
      } else {
        currentPicture.value = 0
      }
      direction.value = 'right'
      resetInterval()
    })

    const previousPicture = $(() => {
      if (currentPicture.value !== 0) {
        currentPicture.value--
      } else {
        currentPicture.value = components.length - 1
      }
      direction.value = 'left'
      resetInterval()
    })

    useVisibleTask$(() => {
      if (slideAuto) {
        automaticSlide()
      }
    })

    return (
      <div class="relative">
        <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          {components.map((comp, i) => (
            <div key={i} class={[i === currentPicture.value ? 'z-30' : 'z-0', 'absolute inset-0 -translate-y-0']}>
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
                class={[i === currentPicture.value ? 'bg-white' : 'bg-white/50', 'w-3 h-3 rounded-full bg-white']}
                aria-current={false}
                type="button"
                onClick$={() => {
                  slideTo(i)
                }}
              />
            ))}
          </div>
        )}
        {!noControls && (
          <>
            <button
              class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              type="button"
              onClick$={previousPicture}
            >
              <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <IconAngleLeftSolid class="w-4 h-4 text-white sm:w-5 sm:h-5 dark:text-gray-800" />
                <span class="hidden">Previous</span>
              </span>
            </button>
            <button
              class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              type="button"
              onClick$={nextPicture}
            >
              <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <IconAngleRightOutline class="w-4 h-4 text-white sm:w-5 sm:h-5 dark:text-gray-800" />
                <span class="hidden">Next</span>
              </span>
            </button>
          </>
        )}
      </div>
    )
  },
)
