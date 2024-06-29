import { ClassList, component$, PropsOf } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable'

type ProgressBarTheme = {
  root?: ClassList
  label?: ClassList
  bar?: ClassList
}

type ProgressBarProps = PropsOf<'div'> & {
  color?: 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'cyan' | 'gray' | 'lime' | 'pink' | 'teal'
  labelProgress?: boolean
  labelText?: boolean
  progress: number
  progressLabelPosition?: 'inside' | 'outside'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  textLabel?: string
  textLabelPosition?: 'inside' | 'outside'
  theme?: ProgressBarTheme
}

const colorMapping: Record<string, string> = {
  dark: 'bg-gray-600 dark:bg-gray-300',
  blue: 'bg-blue-600',
  red: 'bg-red-600 dark:bg-red-500',
  green: 'bg-green-600 dark:bg-green-500',
  yellow: 'bg-yellow-400',
  indigo: 'bg-indigo-600 dark:bg-indigo-500',
  purple: 'bg-purple-600 dark:bg-purple-500',
  cyan: 'bg-cyan-600',
  gray: 'bg-gray-500',
  lime: 'bg-lime-600',
  pink: 'bg-pink-500',
  teal: 'bg-teal-600',
}

const sizeMapping: Record<string, string> = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
  xl: 'h-6',
}

export const ProgressBar = component$<ProgressBarProps>(
  ({
    class: className,
    color,
    labelProgress = false,
    labelText = false,
    progress,
    progressLabelPosition = 'inside',
    size = 'md',
    textLabel = 'progressbar',
    textLabelPosition = 'inside',
    theme,
    ...attrs
  }) => {
    const { backgroundClasses } = useFlowbiteThemable()

    return (
      <>
        <div aria-label={textLabel} aria-valuenow={progress} role="progressbar" class={clsx(theme?.root)} {...attrs}>
          {((textLabel && labelText && textLabelPosition === 'outside') ||
            (progress > 0 && labelProgress && progressLabelPosition === 'outside')) && (
            <div class={twMerge('mb-1 flex justify-between font-medium dark:text-white', clsx(theme?.label))}>
              {textLabel && labelText && textLabelPosition === 'outside' && <span>{textLabel}</span>}
              {labelProgress && progressLabelPosition === 'outside' && <span>{progress}%</span>}
            </div>
          )}

          <div
            class={twMerge('w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700', sizeMapping[size], clsx(theme?.bar), clsx(className))}
          >
            <div
              style={{ width: `${progress}%` }}
              class={twMerge(
                'space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100',
                color ? colorMapping[color] : backgroundClasses.value,
                sizeMapping[size],
              )}
            >
              {textLabel && labelText && textLabelPosition === 'inside' && <span>{textLabel}</span>}
              {progress > 0 && labelProgress && progressLabelPosition === 'inside' && <span>{progress}%</span>}
            </div>
          </div>
        </div>
      </>
    )
  },
)
