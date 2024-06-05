import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Button, IconArrowLeftOutline, IconArrowRightOutline, IconArrowRightSolid, IconHomeOutline, useToggle } from 'flowbite-qwik'

export default component$(() => {
  const { value: loading, toggle$ } = useToggle()

  return (
    <section id="buttons">
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
          <IconArrowRightOutline class="w-5 h-5" />
        </Button>
        <Button color="default" pill square>
          <IconArrowRightOutline class="w-5 h-5" />
        </Button>
        <Button color="dark" outline square>
          <IconArrowLeftOutline class="w-5 h-5" />
        </Button>
        <Button color="yellow" outline pill square>
          <IconArrowLeftOutline class="w-5 h-5" />
        </Button>
      </div>

      <h2 class="my-3">Prop - loading</h2>
      <div class="flex gap-2 items-center">
        <Button disabled={loading.value} loading={loading.value} gradient="purple-blue" outline size="xs" onClick$={toggle$}>
          Click me
        </Button>
        <Button loading={loading.value} gradient="red-yellow" size="sm" onClick$={toggle$}>
          Click me
        </Button>
        <Button loading={loading.value} color="default" loadingPosition="suffix" outline onClick$={toggle$} suffix={IconArrowLeftOutline}>
          Click me
        </Button>
        <Button loading={loading.value} gradient="green-blue" size="lg" onClick$={toggle$}>
          Click me
        </Button>
        <Button loading={loading.value} gradient="pink" size="xl" onClick$={toggle$}>
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
          <IconArrowRightSolid class="w-5 h-5" />
        </Button>
        <Button color="default" pill square>
          <IconArrowRightSolid class="w-5 h-5" />
        </Button>
        <Button gradient="green-blue" square>
          Close something
        </Button>
        <Button color="default" outline pill square suffix={IconArrowRightOutline}>
          Open something
        </Button>
      </div>

      <h2 class="my-3">Full</h2>
      <div class="flex gap-2 items-center">
        <Button prefix={IconHomeOutline} full>
          Buy
        </Button>
      </div>

      <h2 class="my-3">Slot - prefix</h2>
      <div class="flex gap-2 items-center">
        <Button prefix={IconHomeOutline}>Buy</Button>
      </div>

      <h2 class="my-3">Slot - suffix</h2>
      <div class="flex gap-2 items-center">
        <Button suffix={IconArrowRightOutline}>Choose plan</Button>
      </div>
    </section>
  )
})
