import { Select, Text } from '@mantine/core'
import { forwardRef, useMemo } from 'react'
import { RawColorFragment } from '../../../../../graphql/generated/graphql'
import { useRawColorsQuery } from '../../../../../hooks/react-query/colors/raw-color/useRawColorsQuery'
import FlexVCenter from '../../../../_common/flex/FlexVCenter'

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string
  userId: string
  name: string
  color: string
  createdAt: string
  updatedAt: string
}

const Item = forwardRef<HTMLDivElement, ItemProps>(
  (
    { id, userId, name, color, createdAt, updatedAt, ...others }: ItemProps,
    ref
  ) => (
    <div ref={ref} {...others}>
      <FlexVCenter>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 20,
            backgroundColor: color,
          }}
        />
        <Text ml={8}>{name}</Text>
      </FlexVCenter>
    </div>
  )
)

type Props = {
  value: RawColorFragment | null

  onChange: (value: RawColorFragment) => void
}

const RawColorSelector = (props: Props) => {
  const { data: rawColors } = useRawColorsQuery()

  const data = useMemo(() => {
    if (!rawColors) return []
    return rawColors.map((rawColor) => ({
      label: rawColor.name,
      value: rawColor.id,
      ...rawColor,
    }))
  }, [rawColors])

  return (
    <FlexVCenter gap={8}>
      <div
        style={{
          width: 16,
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 40,
            backgroundColor: props.value?.color || 'transparent',
          }}
        />
      </div>

      <Select
        value={data.find((item) => item.value === props.value?.id)?.id || ''}
        onChange={(value) => {
          const rawColor = data.find((item) => item.value === value)
          if (!rawColor) return
          props.onChange(rawColor)
        }}
        placeholder="Pick one"
        itemComponent={Item}
        data={data}
        searchable
        maxDropdownHeight={400}
        filter={(value, item) =>
          item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
          false
        }
      />
    </FlexVCenter>
  )
}

export default RawColorSelector
