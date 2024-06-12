import { $, component$, Slot } from '@builder.io/qwik'
import { Button, ButtonProps } from '~/components/Button/Button'

type BannerCollapseButtonProps = ButtonProps

export const BannerCollapseButton = component$<BannerCollapseButtonProps>((props) => {
  const onClick = $((event: any) => {
    console.log(event.target)
    const collapseButton = event.target as HTMLButtonElement
    const parentBanner = collapseButton.closest('[role="banner"]')

    parentBanner?.remove()
  })

  return (
    <Button onClick$={onClick} {...props}>
      <Slot />
    </Button>
  )
})
