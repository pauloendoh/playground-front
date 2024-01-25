import { Center, Text } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { useMemo } from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import { MyColorProportionInput } from '../../../../../../types/domains/colors/mixed-color/MyColorProportionInput'
import { localStorageKeys } from '../../../../../../utils/localStorageKeys'
import FlexCol from '../../../../../_common/flex/FlexCol'
import FlexVCenter from '../../../../../_common/flex/FlexVCenter'

type Props = {
  colorProportions: MyColorProportionInput[]
}

const ColorProportionSquare = ({ ...props }: Props) => {
  const squareAreaCm = useMemo(() => {
    return props.colorProportions.reduce((acc, curr) => {
      return acc + curr.proportion * 9
    }, 0)
  }, [props.colorProportions])

  const squareSideCm = useMemo(() => {
    return Number(Math.sqrt(squareAreaCm).toFixed(1))
  }, [squareAreaCm])

  const [guide] = useLocalStorage<{ height: number; width: number }>({
    key: localStorageKeys.squareReference,
    defaultValue: {
      height: 0,
      width: 0,
    },
  })

  const guideAreaCm = useMemo(() => {
    return guide.height * guide.width
  }, [guide])

  const squareQuantity = useMemo(() => {
    return guideAreaCm / squareAreaCm
  }, [guideAreaCm, squareAreaCm])

  return (
    <FlexVCenter align={'center'}>
      <FlexCol className="ColorProportionSquare">
        <FlexVCenter>
          <Center
            w={48}
            h={48}
            sx={{
              border: '1px solid white',
              borderRadius: 4,
              fontSize: 12,
            }}
          >
            <div>{squareAreaCm}cm²</div>
          </Center>
          <Text
            sx={{
              fontSize: 12,
              marginLeft: 4,
            }}
          >
            {squareSideCm}cm
          </Text>
        </FlexVCenter>
        <Text
          sx={{
            fontSize: 12,
            marginLeft: 8,
          }}
        >
          {squareSideCm}cm
        </Text>
      </FlexCol>

      {squareAreaCm > 0 && (
        <FlexVCenter ml={16} gap={16}>
          <MdArrowRightAlt />
          <Text
            sx={{
              fontSize: 12,
            }}
          >
            {squareQuantity.toFixed(1)} squares
          </Text>
        </FlexVCenter>
      )}
    </FlexVCenter>
  )
}

export default ColorProportionSquare
