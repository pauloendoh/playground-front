import { Center, Text } from '@mantine/core'
import { useMemo } from 'react'
import { MyColorProportionInput } from '../../../../../../types/domains/colors/mixed-color/MyColorProportionInput'
import FlexCol from '../../../../../_common/flex/FlexCol'

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

  return (
    <FlexCol className="ColorProportionSquare" align="center">
      <Center
        w={40}
        h={40}
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
        }}
      >
        {squareSideCm}cm
      </Text>
    </FlexCol>
  )
}

export default ColorProportionSquare
