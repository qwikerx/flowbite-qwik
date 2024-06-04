import { JSXOutput, PropsOf, Signal, component$, useComputed$ } from '@builder.io/qwik'
import { InputSize, InputType, ValidationStatus, validationStatusMap } from './input-types'
import { twMerge } from 'tailwind-merge'
import { useInputClasses } from './composables/use-input-classes'

export type PropsOfInput = Omit<
  PropsOf<'input'>,
  'size' | 'popovertargetaction' | 'popovertarget' | 'value' | 'bind:value' | 'bind:checked' | 'toggle'
>

type InputProps = PropsOfInput & {
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
        {Boolean(label) && <label class={labelClasses.value}>{required ? `${label} *` : label}</label>}
        <div class="flex relative">
          {Boolean(prefix) && <div class="w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden">{prefix}</div>}
          <input
            {...props}
            bind:value={props['bind:value']}
            type={type}
            disabled={disabled}
            required={required}
            class={[inputClasses.value, prefix ? 'pl-10' : '']}
          />
          {Boolean(suffix) && <div class="absolute right-2.5 top-1/2 -translate-y-1/2">{suffix}</div>}
        </div>
        {Boolean(validationMessage) && <p class={validationWrapperClasses}>{validationMessage}</p>}

        {Boolean(helper) && <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">{helper}</p>}
      </div>
    )
  },
)
