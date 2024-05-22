import { Signal, useComputed$ } from '@builder.io/qwik'
import { FlowbiteTheme, useFlowbiteThemable } from './useFlowbiteThemable'
import { ThemableChildrenApply } from './type'

type UseFlowbiteThemableChildReturns = {
  classes: Signal<string>
}

type UseFlowbiteThemableChildProps = {
  apply: ThemableChildrenApply[]
  theme?: FlowbiteTheme | undefined
}

export function useFlowbiteThemableChildClasses(props: UseFlowbiteThemableChildProps): UseFlowbiteThemableChildReturns {
  const { backgroundClasses, borderClasses, disabledClasses, focusClasses, hoverClasses, isActive, textClasses } = useFlowbiteThemable(props.theme)

  const classes = useComputed$(() => {
    if (!isActive.value) {
      return ''
    }

    const _classes = []
    if (props.apply.includes('text')) {
      _classes.push(textClasses.value)
    }

    if (props.apply.includes('border')) {
      _classes.push(borderClasses.value)
    }

    if (props.apply.includes('background')) {
      _classes.push(backgroundClasses.value)
    }

    if (props.apply.includes('hover')) {
      _classes.push(hoverClasses.value)
    }

    if (props.apply.includes('disabled')) {
      _classes.push(disabledClasses.value)
    }

    if (props.apply.includes('focus')) {
      _classes.push(focusClasses.value)
    }

    return _classes.join(' ')
  })

  return {
    classes,
  }
}
