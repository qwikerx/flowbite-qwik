import { Component, component$, JSXOutput, PropsOf, Slot, useComputed$ } from '@builder.io/qwik'
import { ButtonGradient, ButtonMonochromeGradient, ButtonSize, ButtonVariant } from '~/lib/components/Button/button-types'
import { useButtonClasses } from '~/lib/components/Button/composables/use-button-classes'
import { useButtonSpinner } from '~/lib/components/Button/composables/use-button-spinner'
import { Spinner } from '~/lib/components/Spinner/Spinner'
import { LinkProps } from '@builder.io/qwik-city'

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
    tag?: Component<LinkProps> | string
    prefix?: JSXOutput
    suffix?: JSXOutput
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
    href,
    tag = 'a',
    prefix,
    suffix,
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
      prefix: useComputed$(() => prefix),
      suffix: useComputed$(() => suffix),
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

    const LinkComponent = tag !== 'a' ? tag : 'a'
    const ButtonComponent = href ? LinkComponent : 'button'

    return (
      <ButtonComponent
        class={bindClasses.value}
        href={ButtonComponent !== 'button' ? href : undefined}
        target={ButtonComponent !== 'button' ? attrs.target : undefined}
        //@ts-expect-error does not exist on link
        disabled={ButtonComponent === 'button' ? disabled : undefined}
        onClick$={attrs.onClick$}
      >
        {!isOutlineGradient.value && (prefix || loadingPrefix.value) && (
          <div class="mr-2">{loadingPrefix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : <>{prefix}</>}</div>
        )}

        <span class={spanClasses.value}>
          {isOutlineGradient.value && (prefix || loadingPrefix.value) && (
            <span class="mr-2">{loadingPrefix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : <>{prefix}</>}</span>
          )}

          <Slot />

          {isOutlineGradient.value && (suffix || loadingSuffix.value) && (
            <span class="ml-2">{loadingSuffix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : <>{suffix}</>}</span>
          )}
        </span>

        {!isOutlineGradient.value && (suffix || loadingSuffix.value) && (
          <div class="ml-2">{loadingSuffix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : <>{suffix}</>}</div>
        )}
      </ButtonComponent>
    )
  },
)
