import { component$, useSignal } from '@builder.io/qwik'
import { Button } from '~/lib/components/Button/Button'
import { Link } from '@builder.io/qwik-city'

export default component$(() => {
  const loading = useSignal(false)

  return (
    <section id="buttons" class="p-5">
      <h2 class="my-3">Prop - color</h2>
      <div class="flex gap-2">
        <Button color="default">Default</Button>
        <Button color="alternative">Alternative</Button>
        <Button color="dark">Dark</Button>
        <Button color="light">Light</Button>
        <Button color="green">Green</Button>
        <Button color="red">Red</Button>
        <Button color="yellow">Yellow</Button>
        <Button color="purple">Purple</Button>
        <Button color="pink">Pink</Button>
      </div>

      <h2 class="my-3">Prop - size</h2>
      <div class="flex gap-2 items-center">
        <Button size="xs">Extra Small - xs</Button>
        <Button size="sm">Small - sm</Button>
        <Button size="md">Medium - md</Button>
        <Button size="lg">Large - lg</Button>
        <Button size="xl">Extra Large - xl</Button>
      </div>

      <h2 class="my-3">Prop - pill</h2>
      <div class="flex gap-2">
        <Button color="default" pill>
          Default
        </Button>
        <Button color="alternative" pill>
          Alternative
        </Button>
        <Button color="dark" pill>
          Dark
        </Button>
        <Button color="light" pill>
          Light
        </Button>
        <Button color="green" pill>
          Green
        </Button>
        <Button color="red" pill>
          Red
        </Button>
        <Button color="yellow" pill>
          Yellow
        </Button>
        <Button color="purple" pill>
          Purple
        </Button>
      </div>

      <h2 class="my-3">Prop - gradient (monochrome)</h2>
      <div class="flex gap-2">
        <Button gradient="blue">Blue</Button>
        <Button gradient="cyan">Cyan</Button>
        <Button gradient="green">Green</Button>
        <Button gradient="lime">Lime</Button>
        <Button gradient="pink">Pink</Button>
        <Button gradient="purple">Purple</Button>
        <Button gradient="red">Red</Button>
        <Button gradient="teal">Teal</Button>
      </div>

      <h2 class="my-3">Prop - gradient (duotone)</h2>
      <div class="flex gap-2">
        <Button gradient="purple-blue">Purple to blue</Button>
        <Button gradient="cyan-blue">Cyan to blue</Button>
        <Button gradient="green-blue">Green to blue</Button>
        <Button gradient="purple-pink">Purple to pink</Button>
        <Button gradient="pink-orange">Pink to orange</Button>
        <Button gradient="teal-lime">Teal to lime</Button>
        <Button gradient="red-yellow">Red to yellow</Button>
      </div>

      <h2 class="my-3">Prop - outline</h2>
      <div class="flex gap-2">
        <Button color="default" outline>
          Default
        </Button>
        <Button color="dark" outline>
          Dark
        </Button>
        <Button color="green" outline>
          Green
        </Button>
        <Button color="red" outline>
          Red
        </Button>
        <Button color="yellow" outline>
          Yellow
        </Button>
        <Button color="purple" outline>
          Purple
        </Button>
      </div>

      <h2 class="my-3">Prop - outline (gradient)</h2>
      <div class="flex gap-2">
        <Button gradient="purple-blue" outline>
          Purple to blue
        </Button>
        <Button gradient="cyan-blue" outline>
          Cyan to blue
        </Button>
        <Button gradient="green-blue" outline>
          Green to blue
        </Button>
        <Button gradient="purple-pink" outline>
          Purple to pink
        </Button>
        <Button gradient="pink-orange" outline>
          Pink to orange
        </Button>
        <Button gradient="teal-lime" outline>
          Teal to lime
        </Button>
        <Button gradient="red-yellow" outline>
          Red to yellow
        </Button>
      </div>

      <h2 class="my-3">Prop - shadow</h2>
      <div class="flex gap-2">
        <Button gradient="blue" shadow>
          Blue with blue
        </Button>
        <Button gradient="cyan" shadow>
          Cyan with cyan
        </Button>
        <Button gradient="green" shadow>
          Green with green
        </Button>
        <Button gradient="lime" shadow>
          Lime with lime
        </Button>
        <Button gradient="pink" shadow>
          Pink with pink
        </Button>
        <Button gradient="purple" shadow>
          Purple with purple
        </Button>
        <Button gradient="red" shadow>
          Red with red
        </Button>
        <Button gradient="teal" shadow>
          Teal with teal
        </Button>
        <Button gradient="blue" shadow="red">
          Blue with red
        </Button>
        <Button gradient="cyan" shadow="teal">
          Cyan with teal
        </Button>
        <Button gradient="teal" shadow="purple">
          Teal with purple
        </Button>
      </div>

      <h2 class="my-3">Prop - square</h2>
      <div class="flex gap-2">
        <Button gradient="red-yellow" square>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              clip-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fill-rule="evenodd"
            />
          </svg>
        </Button>
        <Button color="default" pill square>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              clip-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fill-rule="evenodd"
            />
          </svg>
        </Button>
        <Button color="dark" outline square>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              clip-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fill-rule="evenodd"
            />
          </svg>
        </Button>
        <Button color="yellow" outline pill square>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </Button>
      </div>

      <h2 class="my-3">Prop - loading</h2>
      <div class="flex gap-2 items-center">
        <Button
          disabled={loading.value}
          loading={loading.value}
          gradient="purple-blue"
          outline
          size="xs"
          onClick$={() => {
            console.log(loading.value)
            loading.value = !loading.value
            console.log(loading.value)
          }}
        >
          Click me
        </Button>
        <Button
          loading={loading.value}
          gradient="red-yellow"
          size="sm"
          onClick$={() => {
            loading.value = !loading.value
          }}
        >
          Click me
        </Button>
        <Button
          loading={loading.value}
          color="default"
          loadingPosition="suffix"
          outline
          onClick$={() => {
            loading.value = !loading.value
          }}
          suffix={
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill-rule="evenodd"
              />
            </svg>
          }
        >
          Click me
        </Button>
        <Button
          loading={loading.value}
          gradient="green-blue"
          size="lg"
          onClick$={() => {
            loading.value = !loading.value
          }}
        >
          Click me
        </Button>
        <Button
          loading={loading.value}
          gradient="pink"
          size="xl"
          onClick$={() => {
            loading.value = !loading.value
          }}
        >
          Click me
        </Button>
      </div>

      <h2 class="my-3">Prop - disabled</h2>
      <div class="flex gap-2">
        <Button color="default" disabled>
          Default
        </Button>
        <Button color="default" outline disabled>
          Default outline
        </Button>
        <Button gradient="red" disabled>
          Red gradient
        </Button>
        <Button gradient="red-yellow" disabled>
          Red to yellow gradient
        </Button>
        <Button gradient="red-yellow" outline disabled>
          Red to yellow outline
        </Button>
      </div>

      <h2 class="my-3">Prop - href</h2>
      <div class="flex gap-2">
        <Button href="https://google.com" target="_blank">
          Google.com
        </Button>
        <Button href="/pages/getting-started">Quickstart</Button>
        <Button href="/" tag={Link}>
          Internal link
        </Button>
      </div>

      <h2 class="my-3">Slot - default</h2>
      <div class="flex gap-2 items-center">
        <Button gradient="purple-blue" square>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              clip-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fill-rule="evenodd"
            />
          </svg>
        </Button>
        <Button color="default" pill square>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              clip-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fill-rule="evenodd"
            />
          </svg>
        </Button>
        <Button gradient="green-blue" square>
          Close something
        </Button>
        <Button
          color="default"
          outline
          pill
          square
          suffix={
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill-rule="evenodd"
              />
            </svg>
          }
        >
          Open something
        </Button>
      </div>

      <h2 class="my-3">Slot - prefix</h2>
      <div class="flex gap-2 items-center">
        <Button
          prefix={
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          }
        >
          Buy
        </Button>
      </div>

      <h2 class="my-3">Slot - suffix</h2>
      <div class="flex gap-2 items-center">
        <Button
          suffix={
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill-rule="evenodd"
              />
            </svg>
          }
        >
          Choose plan
        </Button>
      </div>
    </section>
  )
})
