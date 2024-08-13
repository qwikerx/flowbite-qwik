import { JSXOutput, PropsOf, Signal, component$, useComputed$, useId } from '@builder.io/qwik'
import { InputSize, InputType, ValidationStatus, validationStatusMap } from './input-types'
import { twMerge } from 'tailwind-merge'
import { useInputClasses } from './composables/use-input-classes'

export type PropsOfInput = Omit<
  PropsOf<'input'>,
  'size' | 'popovertargetaction' | 'popovertarget' | 'value' | 'bind:value' | 'bind:checked' | 'toggle'
>

type InputProps = PropsOfInput & {
  name?: string
  disabled?: boolean
  label?: string
  required?: boolean
  'bind:value': Signal<string>
  size?: InputSize
  type?: InputType
  validationStatus?: ValidationStatus
  suffix?: JSXOutput
  prefix?: JSXOutput
  validationMessage?: JSXOutput
  helper?: JSXOutput
}

export const Input = component$<InputProps>(
  ({
    label,
    disabled = false,
    suffix,
    prefix,
    required = false,
    size = 'md' as InputSize,
    type = 'text',
    validationStatus,
    class: classNames,
    validationMessage,
    helper,
    ...props
  }) => {
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
      useComputed$(() => disabled),
      useComputed$(() => validationStatus),
    )

    return (
      <div class={classNames}>
        {Boolean(label) && (
          <label for={id} class={labelClasses.value}>
            {required ? `${label} *` : label}
          </label>
        )}
        <div class="relative flex">
          {Boolean(prefix) && <div class="pointer-events-none absolute inset-y-0 left-0 flex w-10 items-center overflow-hidden pl-3">{prefix}</div>}
          <input
            id={id}
            {...props}
            bind:value={props['bind:value']}
            type={type}
            disabled={disabled}
            required={required}
            class={[inputClasses.value, prefix ? 'pl-10' : '']}
          />
          {Boolean(suffix) && <div class="absolute right-2.5 top-1/2 -translate-y-1/2 pr-11">{suffix}</div>}
        </div>
        {Boolean(validationMessage) && <p class={validationWrapperClasses}>{validationMessage}</p>}

        {Boolean(helper) && <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">{helper}</p>}
      </div>
    )
  },
)
