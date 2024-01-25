import { Box, Text } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { localStorageKeys } from '../../../../utils/localStorageKeys'
import FlexCol from '../../../_common/flex/FlexCol'
import FlexVCenter from '../../../_common/flex/FlexVCenter'

type Props = {}

const SquareReferenceSection = ({ ...props }: Props) => {
  const [value, setValue] = useLocalStorage<{ height: number; width: number }>({
    key: localStorageKeys.squareReference,
    defaultValue: {
      height: 0,
      width: 0,
    },
  })

  const handleClick = () => {
    const height = Number(prompt('Height:'))
    const width = Number(prompt('Width:'))

    if (height && width) {
      setValue({
        height,
        width,
      })
    }
  }

  return (
    <FlexVCenter
      sx={{
        opacity: 0.5,
      }}
    >
      <FlexCol className="ColorProportionSquare" onClick={handleClick}>
        <FlexVCenter>
          <Box
            w={48}
            h={48}
            sx={{
              border: '1px solid white',
              borderRadius: 4,
              fontSize: 12,
            }}
          />

          <Text
            sx={{
              fontSize: 12,
              marginLeft: 4,
            }}
          >
            {value.height}cm
          </Text>
        </FlexVCenter>
        <Text
          sx={{
            fontSize: 12,
            marginLeft: 8,
          }}
        >
          {value.width}cm
        </Text>
      </FlexCol>
    </FlexVCenter>
  )
}

export default SquareReferenceSection
