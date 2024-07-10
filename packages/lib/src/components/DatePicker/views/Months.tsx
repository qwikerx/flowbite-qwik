import { twMerge } from 'tailwind-merge'
import { getFormattedDate, isDateEqual, isDateInRange, Views } from '../DatePickerHelpers'
import { component$ } from '@builder.io/qwik'
import { useDatePickerContext } from '~/components/DatePicker/composables/use-date-picker-context'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable'

export const DatePickerViewsMonth = component$(() => {
  const { minDate, maxDate, selectedDate, viewDate, language, setViewDate, setView } = useDatePickerContext()
  const { backgroundClasses, hoverClasses } = useFlowbiteThemable()

  return (
    <div class="grid w-64 grid-cols-4">
      {[...Array(12)].map((_month, index) => {
        const newDate = new Date(viewDate.value.getTime())
        newDate.setMonth(index)
        const month = getFormattedDate(language.value, newDate, { month: 'short' })

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
              setView(Views.Days)
            }}
          >
            {month}
          </button>
        )
      })}
    </div>
  )
})
