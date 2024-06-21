import { Footer as FooterRoot } from './Footer'
import { FooterDivider } from './FooterDivider'
import { FooterLink } from './FooterLink'
import { FooterLinkGroup } from './FooterLinkGroup'
import { FooterIcon } from './FooterIcon'
import { FooterTitle } from './FooterTitle'
import { FooterBrand } from './FooterBrand'
import { FooterCopyright } from './FooterCopyright'

export const Footer = Object.assign(FooterRoot, {
  Divider: FooterDivider,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Icon: FooterIcon,
  Title: FooterTitle,
  Brand: FooterBrand,
  Copyright: FooterCopyright,
})
