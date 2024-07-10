import { twMerge } from 'tailwind-merge'
import { isDateEqual, isDateInRange, startOfYearPeriod, Views } from '../DatePickerHelpers'
import { component$ } from '@builder.io/qwik'
import { useDatePickerContext } from '~/components/DatePicker/composables/use-date-picker-context'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable'

export const DatePickerViewsYears = component$(() => {
  const { selectedDate, minDate, maxDate, viewDate, setViewDate, setView } = useDatePickerContext()
  const { backgroundClasses, hoverClasses } = useFlowbiteThemable()

  return (
    <div class="grid w-64 grid-cols-4">
      {[...Array(12)].map((_year, index) => {
        const first = startOfYearPeriod(viewDate.value, 10)
        const year = first - 1 + index
        const newDate = new Date(viewDate.value.getTime())
        newDate.setFullYear(year)

        const isSelected = isDateEqual(selectedDate.value, newDate)
        const isDisabled = !isDateInRange(newDate, minDate.value, maxDate.value)

        return (
          <button
            disabled={isDisabled}
            key={index}
            type="button"
            class={twMerge(
              'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
              isSelected && `${backgroundClasses.value} ${hoverClasses.value} text-white`,
              isDisabled && 'text-gray-500',
            )}
            onClick$={() => {
              if (isDisabled) return

              setViewDate(newDate)
              setView(Views.Months)
            }}
          >
            {year}
          </button>
        )
      })}
    </div>
  )
})
