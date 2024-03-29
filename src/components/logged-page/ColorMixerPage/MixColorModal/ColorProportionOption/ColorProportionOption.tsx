import { ActionIcon, NumberInput } from '@mantine/core'
import { useMemo } from 'react'
import { MdDelete } from 'react-icons/md'
import { useRawColorsQuery } from '../../../../../hooks/react-query/colors/raw-color/useRawColorsQuery'
import { MyColorProportionInput } from '../../../../../types/domains/colors/mixed-color/MyColorProportionInput'
import FlexVCenter from '../../../../_common/flex/FlexVCenter'

type Props = {
  colorProportion: MyColorProportionInput
  onRemove: () => void
  onChange: (colorProportion: MyColorProportionInput) => void
}

const ColorProportionOption = (props: Props) => {
  const { data: rawColors } = useRawColorsQuery()
  const rawColor = useMemo(
    () =>
      rawColors?.find(
        (rawColor) => rawColor.id === props.colorProportion.rawColorId
      ),
    [rawColors]
  )

  return (
    <FlexVCenter justify={'space-between'}>
      <FlexVCenter gap={8}>
        <div>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: rawColor?.color,
            }}
          />
        </div>
        <div>{rawColor?.name}</div>
      </FlexVCenter>
      <FlexVCenter gap={8}>
        <NumberInput
          size="sm"
          w={64}
          value={Number(props.colorProportion.proportion)}
          onChange={(value) => {
            props.onChange({
              ...props.colorProportion,
              proportion: value === '' ? 0 : value,
            })
          }}
          precision={1}
        />
        <ActionIcon onClick={props.onRemove}>
          <MdDelete />
        </ActionIcon>
      </FlexVCenter>
    </FlexVCenter>
  )
}

export default ColorProportionOption
