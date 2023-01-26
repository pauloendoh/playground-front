import { Box, Button, Flex, Grid, Text } from '@mantine/core'
import { useMemo } from 'react'
import { format } from 'timeago.js'
import { useCurrentSavingsQuery } from '../../../hooks/domains/monerate/current-saving/useCurrentSavingsQuery'
import useCurrentSavingModalStore from '../../../hooks/zustand/modals/useCurrentSavingModalStore'
import { MyCurrentSavingValidInput } from '../../../types/domains/monerate/current-saving/MyCurrentSavingValidInput'
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
    <Grid gutter={64}>
      <Grid.Col span="auto">
        <Box>
          Monerate
          <Button
            onClick={() => {
              openModal(new MyCurrentSavingValidInput())
            }}
          >
            + Current Saving
          </Button>
          <Flex mt={24} direction="column" w={300}>
            {savings?.map((saving) => (
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
        </Box>
      </Grid.Col>

      <Grid.Col span="auto">
        <WishlistItems />
      </Grid.Col>
    </Grid>
  )
}

export default MonerateContent
