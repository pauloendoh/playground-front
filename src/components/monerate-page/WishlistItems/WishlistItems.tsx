import { Box, Button, Flex, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { upToNDecimals } from 'endoh-utils'
import { useMemo, useState } from 'react'
import { useWishlistItemsQuery } from '../../../hooks/react-query/monerate/wishlist-item/useWishlistItemsQuery'
import { MyWishlistItemValidInput } from '../../../types/domains/monerate/wishlist-item/MyWishlistItemValidInput'
import WishlistItemModal from '../../_common/modals/WishlistItemModal/WishlistItemModal'

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
    <Box>
      <Button
        fullWidth
        onClick={() => {
          setModalInitialValue(new MyWishlistItemValidInput())
          handlers.open()
        }}
      >
        + Add Wishlist Item
      </Button>

      <Flex mt={16} direction="column">
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
            <Text>R$ {upToNDecimals(Number(item.priceInThousands), 1)} K</Text>
          </Button>
        ))}
      </Flex>

      <WishlistItemModal
        isOpen={opened}
        onClose={handlers.close}
        initialValue={modalInitialValue}
      />
    </Box>
  )
}

export default WishlistItems
