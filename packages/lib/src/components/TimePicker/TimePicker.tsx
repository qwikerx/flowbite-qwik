import { component$, JSXOutput, PropsOf, useId } from '@builder.io/qwik'
import { Input } from '~/components/Input'

export type TimePickerProps = PropsOf<'input'> & {
  label?: string
  suffix?: JSXOutput
  onTimeChange$?: (timeAsString: string, timeAsChunk: string[]) => void
}

export const TimePicker = component$<TimePickerProps>(({ class: className, label, ...attrs }) => {
  const id = useId()

  return (
    <div data-el="time-picker" class={className}>
      {Boolean(label) && (
        <label for={id} class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <div class="relative">
        {attrs.suffix && <div class="pointer-events-none absolute inset-y-0 end-0 top-0 z-[1] flex items-center pe-3.5">{attrs.suffix}</div>}

        <Input
          type="time"
          id={id}
          required={attrs.required}
          min={attrs.min}
          max={attrs.max}
          value={attrs.value}
          bind:value={attrs['bind:value']}
          onChange$={(_, el) => attrs.onTimeChange$?.(el.value, el.value.split(':'))}
        />
      </div>
    </div>
  )
})
