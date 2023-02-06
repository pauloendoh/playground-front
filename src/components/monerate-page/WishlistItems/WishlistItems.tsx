import { Button, Flex, ScrollArea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useMemo, useState } from 'react'
import { useWishlistItemsQuery } from '../../../hooks/react-query/monerate/wishlist-item/useWishlistItemsQuery'
import { MyWishlistItemValidInput } from '../../../types/domains/monerate/wishlist-item/MyWishlistItemValidInput'
import WishlistItemModal from '../../_common/modals/WishlistItemModal/WishlistItemModal'
import MyPaper from '../../_common/overrides/MyPaper'
import WishlistItemButton from './WishlistItemButton/WishlistItemButton'

type Props = {
  test?: string
}

const WishlistItems = (props: Props) => {
  const [opened, handlers] = useDisclosure(false)
  const [modalInitialValue, setModalInitialValue] = useState(
    new MyWishlistItemValidInput()
  )

  const { data: items } = useWishlistItemsQuery()

  const sortedItems = useMemo(
    () =>
      items?.sort((a, b) => {
        const numA = Number(a.priceInThousands)
        const numB = Number(b.priceInThousands)
        return numA - numB
      }) || [],
    [items]
  )

  return (
    <MyPaper>
      <Button
        fullWidth
        color="secondary"
        onClick={() => {
          setModalInitialValue(new MyWishlistItemValidInput())
          handlers.open()
        }}
      >
        + Add Wishlist Item
      </Button>

      <ScrollArea mt={24} sx={{ height: 'calc(100vh - 320px)' }} type="auto">
        <Flex direction="column">
          {sortedItems?.map((item) => (
            <WishlistItemButton
              key={item.id}
              item={item}
              onClick={() => {
                setModalInitialValue(item)
                handlers.open()
              }}
            />
          ))}
        </Flex>
      </ScrollArea>

      <WishlistItemModal
        isOpen={opened}
        onClose={handlers.close}
        initialValue={modalInitialValue}
      />
    </MyPaper>
  )
}

export default WishlistItems
