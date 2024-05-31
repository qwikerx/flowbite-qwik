import { component$ } from '@builder.io/qwik'
import { Badge } from '~/components/Badge/Badge'
import { BadgeType } from '~/components/Badge/badge-types'
import { IconRocketOutline } from '~/components/Icon'

export default component$(() => {
  return (
    <section id="badges">
      <div>
        <h2 class="text-2xl font-semibold my-3">Default Badge</h2>
        <h3 class="my-3">Props type</h3>
        <div class="flex gap-2">
          {(['default', 'dark', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink'] as BadgeType[]).map((type) => (
            <Badge type={type} content={type} />
          ))}
        </div>
      </div>
      <div>
        <h3 class="my-3">Props Size</h3>
        <div class="flex gap-2 items-center">
          <Badge size="xs" content="Default" />
          <Badge size="xs" type="dark" content="Dark" />
          <Badge size="xs" type="red" content="Red" />
          <Badge size="sm" type="green" content="Green" />
          <Badge size="sm" type="yellow" content="Yellow" />
          <Badge size="sm" type="indigo" content="Indigo" />
          <Badge size="sm" type="purple" content="Purple" />
          <Badge size="sm" type="pink" content="Pink" />
        </div>
      </div>
      <div>
        <h3 class="my-3">Props Bordered</h3>
        <div class="flex gap-2">
          <Badge size="sm" bordered content="Default" />
          <Badge size="sm" bordered type="dark" content="Dark" />
          <Badge size="sm" bordered type="red" content="Red" />
          <Badge size="sm" bordered type="green" content="Green" />
          <Badge size="sm" bordered type="yellow" content="Yellow" />
          <Badge size="sm" bordered type="indigo" content="Indigo" />
          <Badge size="sm" bordered type="purple" content="Purple" />
          <Badge size="sm" bordered type="pink" content="Pink" />
        </div>
      </div>
      <div>
        <h3 class="my-3">Props Pills</h3>
        <div class="flex gap-2">
          <Badge pills content="Default" />
          <Badge pills type="dark" content="Dark" />
          <Badge pills type="red" content="Red" />
          <Badge pills type="green" content="Green" />
          <Badge pills type="yellow" content="Yellow" />
          <Badge pills type="indigo" content="Indigo" />
          <Badge pills type="purple" content="Purple" />
          <Badge pills type="pink" content="Pink" />
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-semibold my-3">Badge as link</h2>
        <div class="flex gap-2">
          <Badge href="#" content="Link" bordered />
          <Badge href="#" size="sm" content="Link" />
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-semibold my-3">Badge with icon</h2>
        <div class="flex gap-2">
          <Badge icon={IconRocketOutline} content="Icon" />
          <Badge icon={IconRocketOutline} size="sm" content="Icon" />
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-semibold my-3">Badge with icon only</h2>
        <div class="flex gap-2">
          <Badge icon={IconRocketOutline} size="sm" />
          <Badge type="dark" icon={IconRocketOutline} size="sm" />
          <Badge type="green" icon={IconRocketOutline} size="sm" />
        </div>
      </div>

      <div>
        <h3 class="my-3">Props chips (closeable)</h3>
        <div class="flex gap-2 items-center">
          <Badge
            size="xs"
            chips
            onClose$={() => {
              alert('close')
            }}
            content="Default"
          />
          <Badge
            size="xs"
            chips
            onClose$={() => {
              alert('close')
            }}
            type="dark"
            content="Dark"
          />
          <Badge
            size="xs"
            chips
            onClose$={() => {
              alert('close')
            }}
            type="red"
            content="Red"
          />
          <Badge
            size="sm"
            chips
            onClose$={() => {
              alert('close')
            }}
            type="green"
            content="Green"
          />
          <Badge
            size="sm"
            chips
            onClose$={() => {
              alert('close')
            }}
            type="yellow"
            content="Yellow"
          />
          <Badge
            size="sm"
            chips
            onClose$={() => {
              alert('close')
            }}
            type="indigo"
            content="Indigo"
          />
          <Badge
            size="sm"
            chips
            onClose$={() => {
              alert('close')
            }}
            type="purple"
            content="Purple"
          />
          <Badge
            size="sm"
            chips
            onClose$={() => {
              alert('close')
            }}
            type="pink"
            content="Pink"
          />
        </div>
      </div>
    </section>
  )
})
