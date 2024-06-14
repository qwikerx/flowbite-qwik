import { Component, PropsOf, component$ } from '@builder.io/qwik'
import { LinkProps } from '@builder.io/qwik-city'

type SidebarLogoProps = PropsOf<'a'> & {
  name?: string
  logo?: {
    url: string
    alt?: string
  }
  tag?: Component<LinkProps> | 'a'
}

export const SidebarLogo = component$<SidebarLogoProps>(({ tag: Tag = 'a', href = '/', logo, name, ...attrs }) => {
  return (
    <Tag class="flex items-center mb-5 pl-2.5" href={href} {...attrs}>
      {Boolean(logo) && <img src={logo?.url} class="h-6 mr-3 sm:h-7" alt={logo?.alt ?? name} />}
      {Boolean(name) && <span class="text-lg font-bold text-gray-800 dark:text-gray-200">{name}</span>}
    </Tag>
  )
})
