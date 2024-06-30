import { ClassList, component$, PropsOf, Signal } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export type RangeTheme = {
  root?: ClassList
  input?: ClassList
}

export type RangeProps = Omit<PropsOf<'input'>, 'size'> & {
  'bind:value': Signal<string>
  size?: 'sm' | 'md' | 'lg'
  ref?: Signal<HTMLInputElement | undefined>
  theme?: RangeTheme
}

const sizeMapping: Record<string, string> = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
}

export const Range = component$<RangeProps>(({ class: className, size = 'md', theme, ref, ...attrs }) => {
  return (
    <div class={twMerge('flex', clsx(theme?.root), clsx(className))}>
      <div class="relative w-full">
        <input
          ref={ref}
          type="range"
          class={twMerge('w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700', sizeMapping[size], clsx(theme?.input))}
          {...attrs}
          bind:value={attrs['bind:value']}
        />
      </div>
    </div>
  )
})
