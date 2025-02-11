import { Box, Text } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { localStorageKeys } from '../../../../utils/localStorageKeys'
import FlexCol from '../../../_common/flex/FlexCol'
import FlexVCenter from '../../../_common/flex/FlexVCenter'

type Props = {}

const SquareReferenceSection = ({ ...props }: Props) => {
  const [showGuide, setShowGuide] = useLocalStorage<boolean>({
    key: 'showGuide',
    defaultValue: false,
  })

  const [value, setValue] = useLocalStorage<{ height: number; width: number }>({
    key: localStorageKeys.squareReference,
    defaultValue: {
      height: 0,
      width: 0,
    },
  })

  const handleClick = () => {
    const height = Number(prompt('Height of guiding square:'))
    const width = Number(prompt('Width of guiding square:'))

    if (height && width) {
      setValue({
        height,
        width,
      })
    }
  }

  const widthProportion = value.width / value.height

  return (
    <FlexVCenter
      sx={{
        color: '#225c5e',
        justifyContent: 'space-between',
      }}
    >
      <div onClick={() => setShowGuide(!showGuide)}>
        {showGuide ? <IoMdEyeOff /> : <IoMdEye />}
      </div>

      <FlexCol
        sx={{
          visibility: showGuide ? 'visible' : 'hidden',
        }}
        className="ColorProportionSquare"
        onClick={handleClick}
      >
        <FlexVCenter>
          <Box
            h={30}
            w={30 * widthProportion}
            sx={{
              borderRight: '1px solid #225c5e',
              borderBottom: '1px solid #225c5e',
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
