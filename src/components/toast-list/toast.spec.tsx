import { it, expect, vi } from 'vitest'
import { createDOM } from '@builder.io/qwik/testing'
import { Toast } from './toast'
import { $ } from '@builder.io/qwik'
import { QwikCityMockProvider } from '@builder.io/qwik-city'

it(`Toast`, async () => {
  const onClose$ = $(() => vi.fn())

  const { screen, render } = await createDOM()
  await render(
    <QwikCityMockProvider>
      <Toast
        message="message"
        id="1"
        criticism="SUCCESS"
        onClose$={onClose$}
      />
    </QwikCityMockProvider>,
  )
  expect(screen.outerHTML).toMatchSnapshot()
})
