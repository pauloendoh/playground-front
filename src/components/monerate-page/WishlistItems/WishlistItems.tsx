import { Button, ScrollArea, Table } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useMemo, useState } from 'react'
import { useWishlistItemsQuery } from '../../../hooks/react-query/monerate/wishlist-item/useWishlistItemsQuery'
import { MyWishlistItemValidInput } from '../../../types/domains/monerate/wishlist-item/MyWishlistItemValidInput'
import WishlistItemModal from '../../_common/modals/WishlistItemModal/WishlistItemModal'
import MyPaper from '../../_common/overrides/MyPaper'
import WishlistItemTableRow from './WishlistItemTableRow/WishlistItemTableRow'

type Props = {
  test?: string
}

const WishlistItems = (props: Props) => {
  const [opened, handlers] = useDisclosure(false)
  const [modalInitialValue, setModalInitialValue] = useState(
    new MyWishlistItemValidInput()
  )

  const { data: items } = useWishlistItemsQuery()

  const sortedItems = useMemo(() => {
    let result = items ? [...items] : []
    result.sort((a, b) => {
      const numA = Number(a.priceInThousands)
      const numB = Number(b.priceInThousands)
      return numA - numB
    })
    result.sort((a, b) => {
      const numA = Number(a.priority)
      const numB = Number(b.priority)
      return numB - numA
    })

    return result
  }, [items])

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
        <Table
          sx={(theme) => ({
            //on hover body tr
            '& tbody tr:hover': {
              backgroundColor: theme.colors.dark[4],
              cursor: 'pointer',
            },
          })}
        >
          <thead>
            <tr>
              <th>Item</th>
              <th>Priority</th>
              <th>Price</th>
              <th>Threshold</th>
              <th>ETA</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems?.map((item) => (
              <WishlistItemTableRow
                key={item.id}
                item={item}
                allItems={sortedItems}
                onClick={() => {
                  setModalInitialValue(item)
                  handlers.open()
                }}
              />
            ))}
          </tbody>
        </Table>
        {/* <Flex direction="column">
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
        </Flex> */}
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
