import { $, component$, JSXOutput, PropsOf, QRL, Signal, useComputed$, useId } from '@builder.io/qwik'
import { useTextareaClasses } from './composables/use-textarea-classes'

type TextareaProps = PropsOf<'textarea'> & {
  'bind:value'?: Signal<string>
  onInput$?: QRL<(value: string) => void>
  label?: string
  footer?: JSXOutput
}

export const Textarea = component$<TextareaProps>(
  ({ ['bind:value']: bindTo, onInput$, footer, label, required, rows = 4, placeholder, class: classNames, ...rest }) => {
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
          <textarea
            id={id}
            class={textareaClasses.value}
            rows={rows}
            placeholder={placeholder}
            value={bindTo?.value}
            onInput$={onInput$ || (bindTo && $((_, el) => (bindTo.value = el.value)))}
            {...rest}
          />
          {hasFooter.value && <span class={footerClasses.value}>{footer}</span>}
        </span>
      </label>
    )
  },
)
