import { component$, Fragment, FunctionComponent, JSXNode, PropsOf } from '@builder.io/qwik'
import { getChild } from '~/utils/children-inspector'
import { Button } from '~/components/Button'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

interface ComponentType {
  id: number
  button: JSXNode
}

const positionClass: Record<string, string> = {
  start: 'rounded-r-none focus:ring-2',
  middle: 'rounded-none border-l-0 focus:ring-2',
  end: 'rounded-l-none border-l-0 focus:ring-2',
}

type ButtonGroupProps = PropsOf<'div'> & {
  outline?: boolean
}

export const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({ children, ...props }) => {
  const childrenToProcess = Array.isArray(children) ? [...children] : [children]

  const components: ComponentType[] = []

  getChild(children, [
    {
      component: Button,
      foundComponentCallback: (child, index) => {
        const position = index === 0 ? 'start' : index === childrenToProcess.length - 1 ? 'end' : 'middle'

        if (props.outline) {
          child.props['outline'] = true
        }
        // hack for qwik v1, check if this works in v2
        const immutableProps = (child as unknown as { immutableProps: Record<string, unknown> } | undefined)?.immutableProps
        child.props.class = immutableProps?.class ? immutableProps.class + ' ' + positionClass[position] : positionClass[position]

        components.push({
          id: index,
          button: child,
        })
      },
    },
  ])

  return <InnerButtonGroup components={components} {...props} />
}

/**
 * Implementation
 */

type InnerButtonGroupProps = ButtonGroupProps & {
  components: ComponentType[]
}

const InnerButtonGroup = component$<InnerButtonGroupProps>(({ components, class: className, ...props }) => {
  return (
    <div class={twMerge('inline-flex', clsx(className))} role="group" {...props}>
      {components.map((comp) => (
        <Fragment key={comp.id}>{comp.button}</Fragment>
      ))}
    </div>
  )
})
