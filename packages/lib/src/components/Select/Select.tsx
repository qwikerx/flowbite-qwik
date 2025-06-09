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

export const Select = component$<SelectProps>(({ label, options, sizing = 'md', onChange$, ...rest }) => {
  const validationStatus = useComputed$(() => rest.validationStatus)
  const sizingComputed = useComputed$(() => sizing as InputSize)
  const disabled = useComputed$(() => rest.disabled ?? false)
  const underline = useComputed$(() => rest.underline ?? false)

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
          {...rest}
          onChange$={(e) => {
            // FIXME : should be managed by Qwik
            rest['bind:value'].value = (e.target as HTMLSelectElement).value
            onChange$?.()
          }}
        >
          {rest.placeholder && (
            <option value="" disabled>
              {rest.placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} selected={option.value === rest['bind:value'].value}>
              {option.name}
            </option>
          ))}
        </select>
      </label>

      {!!rest.validationMessage && <div class={validationWrapperClasses.value}>{rest.validationMessage}</div>}
      {!!rest.helper && <div class="mt-2 text-sm">{rest.helper}</div>}
    </>
  )
})
