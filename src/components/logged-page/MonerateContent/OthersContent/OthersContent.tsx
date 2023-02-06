import { Button, Flex, Grid, ScrollArea, Text } from '@mantine/core'
import { useMemo } from 'react'
import { format } from 'timeago.js'
import { useSavingsQuery } from '../../../../hooks/react-query/monerate/saving/useSavingsQuery'
import useSavingModalStore from '../../../../hooks/zustand/modals/useSavingModalStore'
import { MySavingValidInput } from '../../../../types/domains/monerate/saving/MySavingValidInput'
import WishlistItems from '../../../monerate-page/WishlistItems/WishlistItems'
import MyPaper from '../../../_common/overrides/MyPaper'

type Props = {}

const OthersContent = (props: Props) => {
  const { openModal } = useSavingModalStore()
  const { data: savings } = useSavingsQuery()

  const sortedSavings = useMemo(
    () => savings?.sort((a, b) => b.date.localeCompare(a.date)) || [],
    [savings]
  )

  return (
    <Grid>
      <Grid.Col span="auto">
        <MyPaper>
          <Button
            fullWidth
            onClick={() => {
              openModal(new MySavingValidInput())
            }}
          >
            + Add Saving
          </Button>
          <ScrollArea mt={24} sx={{ height: 200 }} type="auto">
            <Flex direction="column">
              {sortedSavings?.map((saving) => (
                <Button
                  key={saving.id}
                  variant="subtle"
                  onClick={() => {
                    openModal(saving)
                  }}
                  styles={{
                    label: {
                      width: '100%',
                      justifyContent: 'space-between',
                    },
                  }}
                >
                  <Text>{saving.value}</Text>
                  <Text>{format(saving.date)}</Text>
                </Button>
              ))}
            </Flex>
          </ScrollArea>
        </MyPaper>
      </Grid.Col>

      <Grid.Col span="auto">
        <WishlistItems />
      </Grid.Col>
    </Grid>
  )
}

export default OthersContent
