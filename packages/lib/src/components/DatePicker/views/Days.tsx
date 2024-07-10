import { twMerge } from 'tailwind-merge'
import { addDays, getFirstDayOfTheMonth, getFormattedDate, getWeekDays, isDateEqual, isDateInRange } from '../DatePickerHelpers'
import { component$ } from '@builder.io/qwik'
import { useDatePickerContext } from '~/components/DatePicker/composables/use-date-picker-context'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable'

export const DatePickerViewsDays = component$(() => {
  const { weekStart, minDate, maxDate, viewDate, selectedDate, changeSelectedDate, language } = useDatePickerContext()
  const { backgroundClasses, hoverClasses } = useFlowbiteThemable()

  const weekDays = getWeekDays(language.value, weekStart.value)
  const startDate = getFirstDayOfTheMonth(viewDate.value, weekStart.value)

  return (
    <>
      <div class="mb-1 grid grid-cols-7">
        {weekDays.map((day, index) => (
          <span key={index} class="h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
            {day}
          </span>
        ))}
      </div>
      <div class="grid w-64 grid-cols-7">
        {[...Array(42)].map((_date, index) => {
          const currentDate = addDays(startDate, index)
          const day = getFormattedDate(language.value, currentDate, { day: 'numeric' })

          const isSelected = isDateEqual(selectedDate.value, currentDate)
          const isDisabled = !isDateInRange(currentDate, minDate.value, maxDate.value)

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

                changeSelectedDate(currentDate, true)
              }}
            >
              {day}
            </button>
          )
        })}
      </div>
    </>
  )
})
