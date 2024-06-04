// import { $, Component, component$, useComputed$, useSignal } from '@builder.io/qwik'
// import { IconProps } from '@qwikest/icons/*'
// import * as Icons from 'flowbite-qwik'
//
// interface IconCardProps {
//   Icon: Component<IconProps>
//   name: string
// }
//
// const IconCard = component$<IconCardProps>(({ Icon, name }) => {
//   const isCopied = useSignal(false)
//
//   const copy$ = $(() => {
//     navigator.clipboard.writeText(`<${name} />`)
//     isCopied.value = true
//     setTimeout(() => {
//       isCopied.value = false
//     }, 1000)
//   })
//
//   const CopyIcon = useComputed$(() => {
//     return isCopied.value ? Icons.IconCheckCircleOutline : Icons.IconFileCopyOutline
//   })
//
//   return (
//     <div
//       class="text-center flex gap-2 justify-center flex-col bg-slate-400 dark:bg-slate-700 p-4 rounded-md cursor-pointer relative"
//       onClick$={() => {
//         copy$()
//       }}
//     >
//       <CopyIcon.value
//         class={[
//           'w-3 h-3 absolute top-3 right-3',
//           {
//             'text-green-600': isCopied.value,
//             'dark:text-slate-300 text-slate-800': !isCopied.value,
//           },
//         ]}
//       />
//       <Icon class="w-6 h-6 dark:text-white text-gray-600 mx-auto" />
//       <span>{name}</span>
//     </div>
//   )
// })
//
// export default component$(() => {
//   return (
//     <>
//       <h1 class="capitalize text-4xl font-bold mb-4">Icon</h1>
//
//       <p class="text-gray-600 dark:text-gray-400 mb-7">
//         Flowbite Qwik exports a set of icons based on the official Flowbite icons. These icons are built on top of the{' '}
//         <a href="https://github.com/qwikest/icons" class="text-blue-600 dark:text-blue-400">
//           qwikest/icons
//         </a>{' '}
//         library, and wrapped to work with Flowbite Qwik and Qwik more generally (to be passed as props for example).
//       </p>
//       <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
//         {Object.entries(Icons).map(([name, Icon], index) => (
//           <IconCard key={name + index} Icon={Icon} name={name} />
//         ))}
//       </div>
//     </>
//   )
// })
