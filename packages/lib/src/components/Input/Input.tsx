import { JSXOutput, PropsOf, component$, useComputed$, useId, useSignal, useTask$ } from '@builder.io/qwik'
import { InputSize, ValidationStatus, validationStatusMap } from './input-types'
import { twMerge } from 'tailwind-merge'
import { useInputClasses } from './composables/use-input-classes'

type InputProps = Omit<PropsOf<'input'>, 'size'> & {
  label?: string
  size?: InputSize
  validationStatus?: ValidationStatus
  suffix?: JSXOutput
  prefix?: JSXOutput
  validationMessage?: JSXOutput
  helper?: JSXOutput
}

export const Input = component$<InputProps>(
  ({ label, suffix, prefix, size = 'md' as InputSize, validationStatus, class: classNames, validationMessage, helper, ...props }) => {
    const id = useId()
    const validationWrapperClasses = useComputed$(() =>
      twMerge(
        'mt-2 text-sm',
        validationStatus === validationStatusMap.Success ? 'text-green-600 dark:text-green-500' : '',
        validationStatus === validationStatusMap.Error ? 'text-red-600 dark:text-red-500' : '',
      ),
    )

    const { inputClasses, labelClasses } = useInputClasses(
      useComputed$(() => size),
      useComputed$(() => Boolean(props.disabled)),
      useComputed$(() => validationStatus),
    )

    const input = useSignal(props.value ? String(props.value) : undefined)
    useTask$(({ track }) => {
      const innerValue = track(() => props.value)
      input.value = props.value ? String(innerValue) : undefined
    })

    return (
      <div class={classNames}>
        {Boolean(label) && (
          <label for={id} class={labelClasses.value}>
            {props.required ? `${label} *` : label}
          </label>
        )}
        <div class="relative flex">
          {Boolean(prefix) && <div class="pointer-events-none absolute inset-y-0 left-0 flex w-10 items-center overflow-hidden pl-3">{prefix}</div>}
          <input
            {...props}
            id={id}
            bind:value={props['bind:value'] || input}
            class={twMerge(inputClasses.value, prefix && 'pl-10', suffix && 'pr-11')}
          />
          {Boolean(suffix) && <div class="absolute right-2.5 top-1/2 -translate-y-1/2">{suffix}</div>}
        </div>
        {Boolean(validationMessage) && <div class={validationWrapperClasses}>{validationMessage}</div>}

        {Boolean(helper) && <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">{helper}</div>}
      </div>
    )
  },
)
