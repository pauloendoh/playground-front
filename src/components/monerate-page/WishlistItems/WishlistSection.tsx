import { Button, ScrollArea, Table } from '@mantine/core'
import { useMemo } from 'react'
import { useWishlistItemsQuery } from '../../../hooks/react-query/monerate/wishlist-item/useWishlistItemsQuery'
import { useWishlistItemModalStore } from '../../../hooks/zustand/modals/useWishlistItemModalStore'
import { MyWishlistItemValidInput } from '../../../types/domains/monerate/wishlist-item/MyWishlistItemValidInput'
import MyPaper from '../../_common/overrides/MyPaper'
import WishlistItemTableRow from './WishlistItemTableRow/WishlistItemTableRow'

type Props = {
  test?: string
}

const WishlistSection = (props: Props) => {
  const { data: items } = useWishlistItemsQuery()

  const { openModal } = useWishlistItemModalStore()

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
          openModal(new MyWishlistItemValidInput())
        }}
      >
        + Add Wishlist Item
      </Button>

      <ScrollArea.Autosize
        mt={24}
        sx={{ maxHeight: 'calc(100vh - 320px)' }}
        type="auto"
      >
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
              <th>Threshold</th>
              <th>Price</th>
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
                  openModal(item)
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
      </ScrollArea.Autosize>
    </MyPaper>
  )
}

export default WishlistSection
