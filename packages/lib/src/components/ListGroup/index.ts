import { ListGroup as ListGroupRoot } from './ListGroup'
import { ListGroupItem } from './ListGroupItem'

export const ListGroup = Object.assign(ListGroupRoot, {
  Item: ListGroupItem,
})
