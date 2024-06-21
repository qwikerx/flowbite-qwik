import { Breadcrumb as BreadcrumbRoot } from './Breadcrumb'
import { BreadcrumbItem } from './BreadcrumbItem'

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
})
