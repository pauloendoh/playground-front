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

  price: InputMaybe<number>

  priority: InputMaybe<number>

  constructor() {
    this.itemName = ''
    this.priceInThousands = ''
    this.priority = null
  }

  id: InputMaybe<string>
  userId: InputMaybe<string>
}
