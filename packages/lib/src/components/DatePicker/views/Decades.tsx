import { twMerge } from 'tailwind-merge'
import { addYears, isDateInDecade, isDateInRange, startOfYearPeriod, Views } from '../DatePickerHelpers'
import { component$ } from '@builder.io/qwik'
import { useDatePickerContext } from '~/components/DatePicker/composables/use-date-picker-context'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable'

export const DatePickerViewsDecades = component$(() => {
  const { selectedDate, viewDate, setViewDate, setView } = useDatePickerContext()
  const { backgroundClasses, hoverClasses } = useFlowbiteThemable()

  return (
    <div class="grid w-64 grid-cols-4">
      {[...Array(12)].map((_year, index) => {
        const first = startOfYearPeriod(viewDate.value, 100)
        const year = first - 10 + index * 10
        const firstDate = new Date(year, 0, 1)
        const lastDate = addYears(firstDate, 9)

        const isSelected = isDateInDecade(viewDate.value, year)
        const isDisabled = !isDateInRange(viewDate.value, firstDate, lastDate)

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

              setViewDate(addYears(viewDate.value, year - selectedDate.value.getFullYear()))
              setView(Views.Years)
            }}
          >
            {year}
          </button>
        )
      })}
    </div>
  )
})
