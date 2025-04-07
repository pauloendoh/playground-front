import { Button, ScrollArea, Table } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { useMemo } from 'react'
import { MdArrowDownward } from 'react-icons/md'
import { useWishlistItemsQuery } from '../../../hooks/react-query/monerate/wishlist-item/useWishlistItemsQuery'
import { useWishlistItemModalStore } from '../../../hooks/zustand/modals/useWishlistItemModalStore'
import { MyWishlistItemValidInput } from '../../../types/domains/monerate/wishlist-item/MyWishlistItemValidInput'
import { localStorageKeys } from '../../../utils/localStorageKeys'
import MyPaper from '../../_common/overrides/MyPaper'
import WishlistItemTableRow from './WishlistItemTableRow/WishlistItemTableRow'

type Props = {
  test?: string
}

const WishlistSection = (props: Props) => {
  const { data: items } = useWishlistItemsQuery()

  const { openModal } = useWishlistItemModalStore()

  const [sortingBy, setSortingBy] = useLocalStorage<'priority' | 'threshold'>({
    key: localStorageKeys.wishlistSortingBy,
    defaultValue: 'threshold',
  })

  const sortedItems = useMemo(() => {
    const result = [...(items ?? [])]

    if (sortingBy === 'threshold') {
      result.sort((a, b) => {
        const numA = Number(a.priceInThousands)
        const numB = Number(b.priceInThousands)
        return numA - numB
      })
    }

    if (sortingBy === 'priority') {
      result.sort((a, b) => {
        // desc, nulls first
        if (b.priority === null) {
          return 1
        }

        if (a.priority === null) {
          return -1
        }

        const numA = Number(a.priority)
        const numB = Number(b.priority)

        return numB - numA
      })
    }

    return result
  }, [items, sortingBy])

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
            // 4th column is centered
            '& tbody tr td:nth-child(4)': {
              textAlign: 'center',
            },
            '& thead tr th': {
              fontWeight: 'normal',
            },
            // 2nd and 4th th are bold
            '& thead tr th:nth-child(2), & thead tr th:nth-child(4)': {
              fontWeight: 'bold',
            },
          })}
        >
          <thead>
            <tr>
              <th>Item</th>
              <th
                style={{
                  cursor: 'pointer',
                  minWidth: 104,
                }}
                onClick={() => {
                  setSortingBy('threshold')
                }}
              >
                Threshold{' '}
                {sortingBy === 'threshold' && (
                  <MdArrowDownward
                    style={{
                      position: 'relative',
                      top: 2,
                      left: 4,
                    }}
                  />
                )}
              </th>
              <th>Price</th>
              <th
                style={{
                  cursor: 'pointer',
                  minWidth: 96,
                }}
                onClick={() => {
                  setSortingBy('priority')
                }}
              >
                Priority
                {sortingBy === 'priority' && (
                  <MdArrowDownward
                    style={{
                      position: 'relative',
                      top: 2,
                      left: 4,
                    }}
                  />
                )}
              </th>
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
