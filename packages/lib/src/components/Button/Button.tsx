import { Component, component$, PropsOf, Signal, Slot, useComputed$ } from '@builder.io/qwik'
import { ButtonGradient, ButtonMonochromeGradient, ButtonSize, ButtonVariant } from '~/components/Button/button-types'
import { useButtonClasses } from '~/components/Button/composables/use-button-classes'
import { useButtonSpinner } from '~/components/Button/composables/use-button-spinner'
import { Spinner } from '~/components/Spinner/Spinner'
import { Link, type LinkProps } from '@builder.io/qwik-city'
import type { IconProps } from 'flowbite-qwik-icons'

export type ButtonProps = PropsOf<'button'> &
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
    full?: boolean
    tag?: Component<LinkProps> | string
    prefix?: Component<IconProps>
    suffix?: Component<IconProps>
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
    tag = 'button',
    prefix: Prefix,
    suffix: Suffix,
    full = false,
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
      prefix: useComputed$(() => Prefix),
      suffix: useComputed$(() => Suffix),
      class: useComputed$(() => attrs.class),
      target: useComputed$(() => attrs.target),
      full: useComputed$(() => full),
    })

    const isLinkTag = ['a', Link].includes(tag)
    const LinkComponent = isLinkTag ? tag : 'a'
    const staticComponent = isLinkTag ? 'button' : tag
    const ButtonComponent = href ? LinkComponent : staticComponent

    return (
      <>
        {ButtonComponent === 'button' ? (
          <button class={bindClasses.value} disabled={!href ? disabled : undefined} {...attrs}>
            <ButtonInnerComponent
              spanClasses={spanClasses}
              color={color}
              gradient={gradient}
              size={size}
              outline={outline}
              loading={loading}
              loadingPosition={loadingPosition}
              prefix={Prefix}
              suffix={Suffix}
            >
              <Slot />
            </ButtonInnerComponent>
          </button>
        ) : (
          <ButtonComponent
            class={bindClasses.value}
            href={href}
            target={href ? attrs.target : undefined}
            //@ts-expect-error does not exist on other elements
            disabled={undefined}
            {...attrs}
          >
            <ButtonInnerComponent
              spanClasses={spanClasses}
              color={color}
              gradient={gradient}
              size={size}
              outline={outline}
              loading={loading}
              loadingPosition={loadingPosition}
              prefix={Prefix}
              suffix={Suffix}
            >
              <Slot />
            </ButtonInnerComponent>
          </ButtonComponent>
        )}
      </>
    )
  },
)

type ButtonInnerProps = ButtonProps & {
  spanClasses: Signal<string>
}
const ButtonInnerComponent = component$<ButtonInnerProps>(
  ({
    spanClasses,
    color = 'default',
    gradient,
    size = 'md',
    outline = false,
    loading = false,
    loadingPosition = 'prefix',
    prefix: Prefix,
    suffix: Suffix,
  }) => {
    const isOutlineGradient = useComputed$(() => outline && gradient)

    const loadingPrefix = useComputed$(() => loading && loadingPosition === 'prefix')
    const loadingSuffix = useComputed$(() => loading && loadingPosition === 'suffix')

    const { color: spinnerColor, size: spinnerSize } = useButtonSpinner({
      color,
      gradient,
      size,
      outline,
    })

    return (
      <>
        {!isOutlineGradient.value && (Prefix || loadingPrefix.value) && (
          <span class="mr-2">{loadingPrefix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : Prefix && <Prefix />}</span>
        )}

        <span class={spanClasses.value}>
          {isOutlineGradient.value && (Prefix || loadingPrefix.value) && (
            <span class="mr-2">{loadingPrefix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : Prefix && <Prefix />}</span>
          )}

          <Slot />

          {isOutlineGradient.value && (Suffix || loadingSuffix.value) && (
            <span class="ml-2">{loadingSuffix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : Suffix && <Suffix />}</span>
          )}
        </span>

        {!isOutlineGradient.value && (Suffix || loadingSuffix.value) && (
          <span class="ml-2">{loadingSuffix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : Suffix && <Suffix />}</span>
        )}
      </>
    )
  },
)
