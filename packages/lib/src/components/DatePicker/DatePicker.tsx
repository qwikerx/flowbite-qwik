import { $, component$, PropsOf, useContextProvider, useSignal, useStore } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { DatePickerContext } from '~/components/DatePicker/composables/use-date-picker-context'
import {
  addMonths,
  addYears,
  getFirstDateInRange,
  getFormattedDate,
  isDateEqual,
  startOfYearPeriod,
  Views,
  WeekStart,
} from '~/components/DatePicker/DatePickerHelpers'
import { DatePickerViewsDecades } from '~/components/DatePicker/views/Decades'
import { DatePickerViewsYears } from '~/components/DatePicker/views/Years'
import { DatePickerViewsMonth } from '~/components/DatePicker/views/Months'
import { DatePickerViewsDays } from '~/components/DatePicker/views/Days'
import { IconArrowLeftOutline, IconArrowRightOutline, IconCalendarMonthOutline } from 'flowbite-qwik-icons'
import { Input } from '~/components/Input'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable'

export type DatePickerProps = Omit<PropsOf<'input'>, 'ref' | 'color'> & {
  open?: boolean
  inline?: boolean
  autoHide?: boolean
  showClearButton?: boolean
  labelClearButton?: string
  showTodayButton?: boolean
  labelTodayButton?: string
  defaultDate?: Date
  minDate?: Date
  maxDate?: Date
  language?: string
  weekStart?: WeekStart
  onSelectedDateChanged$?: (date: Date) => void
}

export const DatePicker = component$<DatePickerProps>(
  ({
    class: className,
    title,
    open,
    inline = false,
    autoHide = true, // Hide when selected the day
    showClearButton = true,
    labelClearButton = 'Clear',
    showTodayButton = true,
    labelTodayButton = 'Today',
    defaultDate = new Date(),
    minDate,
    maxDate,
    language = 'en',
    weekStart = WeekStart.Sunday,
    onSelectedDateChanged$,
    ...attrs
  }) => {
    const { focusClasses, backgroundClasses } = useFlowbiteThemable()

    const internalDefaultDate = getFirstDateInRange(defaultDate, minDate, maxDate)

    const isOpen = useSignal(open)
    const view = useSignal(Views.Days)
    const selectedDate = useSignal(internalDefaultDate)
    const viewDate = useSignal(internalDefaultDate)

    const inputRef = useSignal<HTMLInputElement>()
    const datePickerRef = useSignal<HTMLDivElement>()

    // Triggers when user select the date
    const changeSelectedDate$ = $((date: Date, useAutoHide: boolean) => {
      selectedDate.value = date

      onSelectedDateChanged$?.(date)

      if (autoHide && view.value === Views.Days && useAutoHide && !inline) {
        isOpen.value = false
      }
    })

    // Render the DatePickerView* node
    const renderView = (type: Views) => {
      switch (type) {
        case Views.Decades:
          return <DatePickerViewsDecades />
        case Views.Years:
          return <DatePickerViewsYears />
        case Views.Months:
          return <DatePickerViewsMonth />
        case Views.Days:
        default:
          return <DatePickerViewsDays />
      }
    }

    // Coordinate the next view based on current view (statemachine-like)
    const getNextView$ = $(() => {
      switch (view.value) {
        case Views.Days:
          return Views.Months
        case Views.Months:
          return Views.Years
        case Views.Years:
          return Views.Decades
      }
      return view.value
    })

    // Get the view title based on active View
    const getViewTitle = () => {
      switch (view.value) {
        case Views.Decades:
          return `${startOfYearPeriod(viewDate.value, 100)} - ${startOfYearPeriod(viewDate.value, 100) + 90}`
        case Views.Years:
          return `${startOfYearPeriod(viewDate.value, 10)} - ${startOfYearPeriod(viewDate.value, 10) + 9}`
        case Views.Months:
          return getFormattedDate(language, viewDate.value, { year: 'numeric' })
        case Views.Days:
        default:
          return getFormattedDate(language, viewDate.value, { month: 'long', year: 'numeric' })
      }
    }

    // Navigate to prev/next for given view's date by value
    const getViewDatePage$ = $((view: Views, date: Date, value: number) => {
      switch (view) {
        case Views.Days:
          return new Date(addMonths(date, value))
        case Views.Months:
          return new Date(addYears(date, value))
        case Views.Years:
          return new Date(addYears(date, value * 10))
        case Views.Decades:
          return new Date(addYears(date, value * 100))
        default:
          return new Date(addYears(date, value * 10))
      }
    })

    useContextProvider(
      DatePickerContext,
      useStore({
        language,
        minDate,
        maxDate,
        weekStart,
        isOpen,
        view,
        viewDate,
        selectedDate,
        changeSelectedDate: changeSelectedDate$,
      }),
    )

    const onFocus$ = $(()=>{
      if (!isDateEqual(viewDate.value, selectedDate.value)) {
        viewDate.value = selectedDate.value
      }
      isOpen.value = true
    })

    return (
      <div class={twMerge('relative', clsx(className))}>
        {!inline && (
          // @ts-expect-error InputProps <> DatePickerProps
          <Input
            prefix={<IconCalendarMonthOutline />}
            ref={inputRef}
            onFocus$={onFocus$}
            value={selectedDate.value && getFormattedDate(language, selectedDate.value)}
            readOnly
            {...attrs}
          />
        )}
        {(isOpen.value || inline) && (
          <div ref={datePickerRef} class={twMerge('absolute top-10 z-50 block pt-2', inline && 'relative top-0 z-auto')}>
            <div class="inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700">
              <div>
                {title && <div class="px-2 py-3 text-center font-semibold text-gray-900 dark:text-white">{title}</div>}
                <div class="mb-2 flex justify-between">
                  <button
                    type="button"
                    class="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    onClick$={async () => (viewDate.value = await getViewDatePage$(view.value, viewDate.value, -1))}
                  >
                    <IconArrowLeftOutline />
                  </button>
                  <button
                    type="button"
                    class="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    onClick$={async () => (view.value = await getNextView$())}
                  >
                    {getViewTitle()}
                  </button>
                  <button
                    type="button"
                    class="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    onClick$={async () => (viewDate.value = await getViewDatePage$(view.value, viewDate.value, 1))}
                  >
                    <IconArrowRightOutline />
                  </button>
                </div>
              </div>
              <div class="p-1">{renderView(view.value)}</div>
              {(showClearButton || showTodayButton) && (
                <div class="mt-2 flex space-x-2">
                  {showTodayButton && (
                    <button
                      type="button"
                      class={twMerge(
                        'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4',
                        focusClasses.value,
                        backgroundClasses.value,
                        'text-white',
                      )}
                      onClick$={() => {
                        const today = new Date()
                        changeSelectedDate$(today, true)
                        viewDate.value = today
                      }}
                    >
                      {labelTodayButton}
                    </button>
                  )}
                  {showClearButton && (
                    <button
                      type="button"
                      class={twMerge(
                        'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4',
                        focusClasses.value,
                        'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
                      )}
                      onClick$={() => {
                        changeSelectedDate$(internalDefaultDate, true)
                        if (internalDefaultDate) {
                          viewDate.value = internalDefaultDate
                        }
                      }}
                    >
                      {labelClearButton}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  },
)
