import { IsNumberString, IsString, MinLength } from 'class-validator'
import {
  InputMaybe,
  WishlistItemValidInput,
} from '../../../../graphql/generated/graphql'

export class MyWishlistItemValidInput implements WishlistItemValidInput {
  @IsString()
  @MinLength(1)
  itemName: string

  @IsString()
  @IsNumberString()
  priceInThousands: string

  createdAt: string
  updatedAt: string

  constructor() {
    this.itemName = ''
    this.priceInThousands = ''
  }

  id: InputMaybe<string>
  userId: InputMaybe<string>
}
