import { List as ListRoot } from './List'
import { ListItem } from './ListItem'

export const List = Object.assign(ListRoot, {
  Item: ListItem,
})
