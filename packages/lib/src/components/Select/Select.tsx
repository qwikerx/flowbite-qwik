import { ClassList, PropsOf, Signal, component$, useComputed$, JSXOutput } from '@builder.io/qwik'
import { OptionsType } from './select-types'
import { useSelectClasses } from './composables/use-select-classes'
import { InputSize, ValidationStatus } from '~/index'

type SelectProps = PropsOf<'select'> & {
  label?: string
  'bind:value': Signal<string>
  options: OptionsType[]
  class?: ClassList
  placeholder?: string
  disabled?: boolean
  underline?: boolean
  sizing?: InputSize
  validationStatus?: ValidationStatus
  validationMessage?: JSXOutput
  helper?: JSXOutput
  onChange$?: () => void
}

export const Select = component$<SelectProps>(({ label, options, sizing = 'md', onChange$, ...props }) => {
  const validationStatus = useComputed$(() => props.validationStatus)
  const sizingComputed = useComputed$(() => sizing as InputSize)
  const disabled = useComputed$(() => props.disabled ?? false)
  const underline = useComputed$(() => props.underline ?? false)

  const { labelClasses, selectClasses, validationWrapperClasses } = useSelectClasses({
    sizing: sizingComputed,
    disabled,
    underline,
    validationStatus,
  })

  return (
    <>
      <label>
        {label && <span class={labelClasses.value}>{label}</span>}
        <select
          class={selectClasses.value}
          {...props}
          onChange$={(e) => {
            // FIXME : should be managed by Qwik
            props['bind:value'].value = (e.target as HTMLSelectElement).value
            onChange$?.()
          }}
        >
          {props.placeholder && (
            <option value="" disabled>
              {props.placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} selected={option.value === props['bind:value'].value}>
              {option.name}
            </option>
          ))}
        </select>
      </label>

      {!!props.validationMessage && <p class={validationWrapperClasses.value}>{props.validationMessage}</p>}
      {!!props.helper && <p class="mt-2 text-sm">{props.helper}</p>}
    </>
  )
})
