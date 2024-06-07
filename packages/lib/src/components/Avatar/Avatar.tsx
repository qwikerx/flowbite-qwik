// import { component$, JSXOutput, PropsOf, Slot, useComputed$ } from '@builder.io/qwik'
// import { useButtonClasses } from '~/components/Button/composables/use-button-classes'
// import { useButtonSpinner } from '~/components/Button/composables/use-button-spinner'
// import { Spinner } from '~/components/Spinner/Spinner'
// import { twMerge } from 'tailwind-merge'
// import { FlowbiteTheme } from '~/components/FlowbiteThemable/composables/use-flowbite-themable'
// import clsx from 'clsx'
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
//     const imgClassName = twMerge(
//       'rounded',
//       bordered && 'p-1 ring-2',
//       bordered && AvatarImgColors[color],
//       rounded && 'rounded-full',
//       stacked && 'ring-2 ring-gray-300 dark:ring-gray-500',
//       AvatarImgSizes[size],
//     )
//
//     return (
//       <div class={twMerge('flex items-center justify-center space-x-4 rounded', clsx(className))} {...attrs}>
//         <div class="relative">
//           {img ? (
//             typeof img === 'string' ? (
//               <img alt={alt} src={img} class={imgClassName} />
//             ) : (
//               img({ alt, ...imgProps })
//             )
//           ) : placeholderInitials ? (
//             <div
//               class={twMerge(
//                 theme.root.img.off,
//                 theme.root.initials.base,
//                 stacked && theme.root.stacked,
//                 bordered && theme.root.bordered,
//                 bordered && theme.root.color[color],
//                 theme.root.size[size],
//                 rounded && theme.root.rounded,
//               )}
//               data-testid="flowbite-avatar-initials-placeholder"
//             >
//               <span class={twMerge(theme.root.initials.text)} data-testid="flowbite-avatar-initials-placeholder-text">
//                 {placeholderInitials}
//               </span>
//             </div>
//           ) : (
//             <div class={twMerge(imgClassName, theme.root.img.off)} data-testid="flowbite-avatar-img">
//               <svg class={theme.root.img.placeholder} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//               </svg>
//             </div>
//           )}
//           {status && (
//             <span
//               data-testid="flowbite-avatar-status"
//               class={twMerge(theme.root.status.base, theme.root.status[status], theme.root.statusPosition[statusPosition])}
//             />
//           )}
//         </div>
//         {children && <div>{children}</div>}
//       </div>
//     )
//   },
// )
