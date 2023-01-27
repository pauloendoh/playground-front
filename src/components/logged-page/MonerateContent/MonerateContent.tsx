import { Box, Button, Flex, Grid, ScrollArea, Text } from '@mantine/core'
import { useMemo } from 'react'
import { format } from 'timeago.js'
import { useCurrentSavingsQuery } from '../../../hooks/react-query/monerate/current-saving/useCurrentSavingsQuery'
import useCurrentSavingModalStore from '../../../hooks/zustand/modals/useCurrentSavingModalStore'
import { MyCurrentSavingValidInput } from '../../../types/domains/monerate/current-saving/MyCurrentSavingValidInput'
import ExpensesContent from '../../monerate-page/ExpensesContent/ExpensesContent'
import WishlistItems from '../../monerate-page/WishlistItems/WishlistItems'

type Props = {
  test?: string
}

const MonerateContent = (props: Props) => {
  const { openModal } = useCurrentSavingModalStore()
  const { data: savings } = useCurrentSavingsQuery()

  const sortedSavings = useMemo(
    () => savings?.sort((a, b) => b.date.localeCompare(a.date)) || [],
    [savings]
  )

  return (
    <Box>
      <Grid gutter={64}>
        <Grid.Col span="auto">
          <Box>
            <Button
              fullWidth
              onClick={() => {
                openModal(new MyCurrentSavingValidInput())
              }}
            >
              + Current Saving
            </Button>
            <ScrollArea mt={24} sx={{ height: 200 }}>
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
          </Box>
        </Grid.Col>

        <Grid.Col span="auto">
          <WishlistItems />
        </Grid.Col>
      </Grid>

      <Box mt={40} />
      <ExpensesContent />
    </Box>
  )
}

export default MonerateContent
