import { Avatar as AvatarRoot } from './Avatar'
import { AvatarGroup } from './AvatarGroup'
import { AvatarGroupCounter } from './AvatarGroupCounter'

export const Avatar = Object.assign(AvatarRoot, {
  Group: AvatarGroup,
  GroupCounter: AvatarGroupCounter,
})
