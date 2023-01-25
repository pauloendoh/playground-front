import { Box, Button, Flex } from '@mantine/core'
import { useCurrentSavingsQuery } from '../../../hooks/domains/monerate/current-saving/useCurrentSavingsQuery'
import useCurrentSavingModalStore from '../../../hooks/zustand/modals/useCurrentSavingModalStore'
import { MyCurrentSavingValidInput } from '../../../types/domains/monerate/current-saving/MyCurrentSavingValidInput'

type Props = {
  test?: string
}

const MonerateContent = (props: Props) => {
  const { openModal } = useCurrentSavingModalStore()
  const { data: savings } = useCurrentSavingsQuery()
  return (
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
          >
            {saving.value}
          </Button>
        ))}
      </Flex>
    </Box>
  )
}

export default MonerateContent
