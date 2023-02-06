import { Button, Flex, ScrollArea, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { upToNDecimals } from 'endoh-utils'
import { useMemo, useState } from 'react'
import { useWishlistItemsQuery } from '../../../hooks/react-query/monerate/wishlist-item/useWishlistItemsQuery'
import { MyWishlistItemValidInput } from '../../../types/domains/monerate/wishlist-item/MyWishlistItemValidInput'
import WishlistItemModal from '../../_common/modals/WishlistItemModal/WishlistItemModal'
import MyPaper from '../../_common/overrides/MyPaper'

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

      <ScrollArea mt={24} sx={{ maxHeight: 'calc(100vh - 320px)' }} type="auto">
        <Flex direction="column">
          {sortedItems?.map((item) => (
            <Button
              key={item.id}
              onClick={() => {
                setModalInitialValue(item)
                handlers.open()
              }}
              styles={{
                label: {
                  justifyContent: 'space-between',
                  width: '100%',
                },
              }}
              variant="subtle"
            >
              <Text>{item.itemName}</Text>
              <Text>
                R$ {upToNDecimals(Number(item.priceInThousands), 1)} K
              </Text>
            </Button>
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
