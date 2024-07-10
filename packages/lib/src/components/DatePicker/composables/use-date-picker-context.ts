import { $, createContextId, Signal, useComputed$, useContext } from '@builder.io/qwik'
import { Views, WeekStart } from '~/components/DatePicker/DatePickerHelpers'

type DatePickerContextProps = {
  language: string
  weekStart: WeekStart
  minDate?: Date
  maxDate?: Date
  isOpen?: Signal<boolean | undefined>
  view: Signal<Views>
  selectedDate: Signal<Date>
  viewDate: Signal<Date>
  changeSelectedDate: (date: Date, autoHide: boolean) => void
}
export const DatePickerContext = createContextId<DatePickerContextProps>('FLOWBITE_QWIK_DATE_PICKER_CONTEXT')

export function useDatePickerContext() {
  const context = useContext(DatePickerContext)

  const language = useComputed$(() => context.language)
  const weekStart = useComputed$(() => context.weekStart)
  const minDate = useComputed$(() => context.minDate)
  const maxDate = useComputed$(() => context.maxDate)
  const isOpen = useComputed$(() => context.isOpen?.value)
  const view = useComputed$(() => context.view.value)
  const selectedDate = useComputed$(() => context.selectedDate.value)
  const viewDate = useComputed$(() => context.viewDate.value)

  const setIsOpen = $((value: boolean) => {
    if (context.isOpen) context.isOpen.value = value
  })
  const setView = $((value: Views) => {
    context.view.value = value
  })
  const setSelectedDate = $((value: Date) => {
    context.selectedDate.value = value
  })
  const setViewDate = $((value: Date) => {
    context.viewDate.value = value
  })
  const changeSelectedDate = $((value: Date, autoHide: boolean) => {
    context.changeSelectedDate(value, autoHide)
  })

  return {
    language,
    weekStart,
    minDate,
    maxDate,
    isOpen,
    view,
    selectedDate,
    viewDate,
    setIsOpen,
    setView,
    setSelectedDate,
    setViewDate,
    changeSelectedDate,
  }
}
