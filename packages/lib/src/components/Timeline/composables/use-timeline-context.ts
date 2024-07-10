import { createContextId, useComputed$, useContext } from '@builder.io/qwik'

type TimelineContextProps = { horizontal: boolean }
export const TimelineContext = createContextId<TimelineContextProps>('FLOWBITE_QWIK_TIMELINE_CONTEXT')

export function useTimelineContext() {
  const tableContext = useContext(TimelineContext)

  const horizontal = useComputed$(() => tableContext.horizontal)

  return {
    horizontal,
  }
}
