import { component$, PropsOf, Slot, useComputed$ } from '@builder.io/qwik'
import { ButtonGradient, ButtonMonochromeGradient, ButtonSize, ButtonVariant } from '~/components/button/button-types'
import { useButtonClasses } from '~/components/button/useButtonClasses'
import { useButtonSpinner } from '~/components/button/useButtonSpinner'
import { Spinner } from '~/components/spinner/spinner'

type ButtonProps = PropsOf<'button'> &
  PropsOf<'a'> & {
    color?: ButtonVariant
    gradient?: ButtonGradient
    size?: ButtonSize
    shadow?: ButtonMonochromeGradient | boolean
    pill?: boolean
    square?: boolean
    outline?: boolean
    loading?: boolean
    loadingPosition?: 'suffix' | 'prefix'
    disabled?: boolean
    href?: string
  }

export const Button = component$<ButtonProps>(
  ({
    color = 'default',
    gradient,
    size = 'md',
    shadow = false,
    pill = false,
    square = false,
    outline = false,
    loading = false,
    loadingPosition = 'prefix',
    disabled = false,
    href = '',
    ...attrs
  }) => {
    const { bindClasses, spanClasses } = useButtonClasses({
      color: useComputed$(() => color),
      gradient: useComputed$(() => gradient),
      size: useComputed$(() => size),
      loading: useComputed$(() => loading),
      disabled: useComputed$(() => disabled),
      pill: useComputed$(() => pill),
      shadow: useComputed$(() => shadow),
      square: useComputed$(() => square),
      outline: useComputed$(() => outline),
      class: useComputed$(() => attrs.class),
      target: useComputed$(() => attrs.target),
    })

    const isOutlineGradient = useComputed$(() => outline && gradient)

    const loadingPrefix = useComputed$(() => loading && loadingPosition === 'prefix')
    const loadingSuffix = useComputed$(() => loading && loadingPosition === 'suffix')

    const { color: spinnerColor, size: spinnerSize } = useButtonSpinner({
      color,
      gradient,
      size,
      outline,
    })

    const linkComponent = 'a'
    const ButtonComponent = href ? linkComponent : 'button'
    const linkAttr = 'href'

    return (
      <ButtonComponent
        class={bindClasses.value}
        href={ButtonComponent !== 'button' ? href : undefined}
        target={ButtonComponent !== 'button' ? attrs.target : undefined}
        disabled={ButtonComponent === 'button' && disabled}
        onClick$={attrs.onClick$}
      >
        {!isOutlineGradient.value && /*$slots.prefix ||*/ loadingPrefix.value && (
          <div class="mr-2">
            {loadingPrefix.value ? (
              <Spinner
                color={spinnerColor.value}
                size={spinnerSize.value}
              />
            ) : (
              <Slot name="prefix" />
            )}
          </div>
        )}

        <span class={spanClasses.value}>
          {isOutlineGradient.value && /*$slots.prefix ||*/ loadingPrefix.value && (
            <span class="mr-2">
              {/*}<!--if outline gradient - need to place slots inside span -->*/}
              {loadingPrefix.value ? (
                <Spinner
                  color={spinnerColor.value}
                  size={spinnerSize.value}
                />
              ) : (
                <Slot name="prefix" />
              )}
            </span>
          )}

          <Slot />

          {isOutlineGradient.value && /*$slots.suffix ||*/ loadingSuffix.value && (
            <span class="ml-2">
              {/*<!--if outline gradient - need to place slots inside span -->*/}
              {loadingSuffix.value ? (
                <Spinner
                  color={spinnerColor.value}
                  size={spinnerSize.value}
                />
              ) : (
                <Slot name="suffix" />
              )}
            </span>
          )}
        </span>

        {!isOutlineGradient.value && /*$slots.suffix ||*/ loadingSuffix.value && (
          <div class="ml-2">
            {/*<!--automatically add ml class if slot provided or loading -->*/}
            {loadingSuffix.value ? (
              <Spinner
                color={spinnerColor.value}
                size={spinnerSize.value}
              />
            ) : (
              <Slot name="suffix" />
            )}
          </div>
        )}
      </ButtonComponent>
    )
  },
)
