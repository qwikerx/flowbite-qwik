// import { component$, JSXOutput, PropsOf, Slot, useComputed$ } from '@builder.io/qwik'
// import { useButtonClasses } from '~/components/Button/composables/use-button-classes'
// import { useButtonSpinner } from '~/components/Button/composables/use-button-spinner'
// import { Spinner } from '~/components/Spinner/Spinner'
// import { twMerge } from 'tailwind-merge'
// import { FlowbiteTheme } from '~/components/FlowbiteThemable/composables/use-flowbite-themable'
//
// type AvatarProps = PropsOf<'div'> & {
//   alt?: string
//   bordered?: boolean
//   img?: string | JSXOutput
//   color?: 'failure' | 'gray' | 'info' | 'pink' | 'purple' | 'success' | 'warning'
//   rounded?: boolean
//   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
//   stacked?: boolean
//   status?: 'away' | 'busy' | 'offline' | 'online'
//   statusPosition?:
//     | 'bottom-left'
//     | 'bottom-right'
//     | 'bottom-center'
//     | 'top-left'
//     | 'top-center'
//     | 'top-right'
//     | 'center-left'
//     | 'center'
//     | 'center-right'
//   placeholderInitials?: string
// }
//
// const AvatarImgColors: Record<string, string> = {
//   dark: 'ring-gray-800 dark:ring-gray-800',
//   failure: 'ring-red-500 dark:ring-red-700',
//   gray: 'ring-gray-500 dark:ring-gray-400',
//   info: 'ring-cyan-400 dark:ring-cyan-800',
//   light: 'ring-gray-300 dark:ring-gray-500',
//   purple: 'ring-purple-500 dark:ring-purple-600',
//   success: 'ring-green-500 dark:ring-green-500',
//   warning: 'ring-yellow-300 dark:ring-yellow-500',
//   pink: 'ring-pink-500 dark:ring-pink-500',
// }
//
// const AvatarImgSizes: Record<string, string> = {
//   xs: 'h-6 w-6',
//   sm: 'h-8 w-8',
//   md: 'h-10 w-10',
//   lg: 'h-20 w-20',
//   xl: 'h-36 w-36',
// }
//
// export const Avatar = component$<AvatarProps>(
//   ({
//     alt = '',
//     bordered = false,
//     class: className,
//     color = 'light',
//     img,
//     placeholderInitials = '',
//     rounded = false,
//     size = 'md',
//     stacked = false,
//     status,
//     statusPosition = 'top-left',
//     ...attrs
//   }) => {
//     const imgClassName = useComputed$(() =>
//       twMerge(
//         'rounded',
//         bordered && 'p-1 ring-2',
//         bordered && AvatarImgColors[color],
//         rounded && 'rounded-full',
//         stacked && 'ring-2 ring-gray-300 dark:ring-gray-500',
//         AvatarImgSizes[size],
//       ),
//     )
//
//     const loadingPrefix = useComputed$(() => loading && loadingPosition === 'prefix')
//     const loadingSuffix = useComputed$(() => loading && loadingPosition === 'suffix')
//
//     const { color: spinnerColor, size: spinnerSize } = useButtonSpinner({
//       color,
//       gradient,
//       size,
//       outline,
//     })
//
//     const LinkComponent = tag !== 'a' ? tag : 'a'
//     const ButtonComponent = href ? LinkComponent : 'button'
//
//     return (
//       <ButtonComponent
//         class={bindClasses.value}
//         href={ButtonComponent !== 'button' ? href : undefined}
//         target={ButtonComponent !== 'button' ? attrs.target : undefined}
//         //@ts-expect-error does not exist on link
//         disabled={ButtonComponent === 'button' ? disabled : undefined}
//         onClick$={attrs.onClick$}
//         {...attrs}
//       >
//         {!isOutlineGradient.value && (Prefix || loadingPrefix.value) && (
//           <div class="mr-2">{loadingPrefix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : Prefix && <Prefix />}</div>
//         )}
//
//         <span class={spanClasses.value}>
//           {isOutlineGradient.value && (Prefix || loadingPrefix.value) && (
//             <span class="mr-2">{loadingPrefix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : Prefix && <Prefix />}</span>
//           )}
//
//           <Slot />
//
//           {isOutlineGradient.value && (Suffix || loadingSuffix.value) && (
//             <span class="ml-2">{loadingSuffix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : Suffix && <Suffix />}</span>
//           )}
//         </span>
//
//         {!isOutlineGradient.value && (Suffix || loadingSuffix.value) && (
//           <div class="ml-2">{loadingSuffix.value ? <Spinner color={spinnerColor.value} size={spinnerSize.value} /> : Suffix && <Suffix />}</div>
//         )}
//       </ButtonComponent>
//     )
//   },
// )
