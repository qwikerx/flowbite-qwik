import { PropsOf, Signal, component$, useId, JSXOutput, useComputed$ } from '@builder.io/qwik'
import { useTextareaClasses } from './composables/use-textarea-classes'

type TextareaProps = PropsOf<'textarea'> & {
  'bind:value': Signal<string>
  label?: string
  footer?: JSXOutput
}

export const Textarea = component$<TextareaProps>(({ footer, label, required, rows = 4, placeholder, class: classNames, ...props }) => {
  const hasFooter = useComputed$(() => !!footer)
  const { textareaClasses, labelClasses, wrapperClasses, footerClasses } = useTextareaClasses(hasFooter)
  const id = useId()

  return (
    <label class={classNames}>
      <span class={labelClasses.value}>
        {Boolean(label) && (
          <label for={id} class={labelClasses.value}>
            {required ? `${label} *` : label}
          </label>
        )}
      </span>

      <span class={wrapperClasses.value}>
        <textarea id={id} class={textareaClasses.value} rows={rows} placeholder={placeholder} {...props} bind:value={props['bind:value']} />
        {hasFooter.value && <span class={footerClasses.value}>{footer}</span>}
      </span>
    </label>
  )
})
