import { Select, Text } from '@mantine/core'
import { forwardRef, useMemo } from 'react'
import { RawColorFragment } from '../../../../../graphql/generated/graphql'
import { useRawColorsQuery } from '../../../../../hooks/react-query/colors/raw-color/useRawColorsQuery'
import FlexVCenter from '../../../../_common/flex/FlexVCenter'

type Props = {
  value: RawColorFragment | null
  onChange: (value: RawColorFragment) => void
  filterOutIds?: string[]
}

const RawColorSelector = (props: Props) => {
  const { data: rawColors } = useRawColorsQuery()

  const data = useMemo(() => {
    if (!rawColors) return []
    return rawColors
      .filter((rawColor) => !props.filterOutIds?.includes(rawColor.id))
      .map((rawColor) => ({
        label: rawColor.name,
        value: rawColor.id,
        ...rawColor,
      }))
  }, [rawColors])

  return (
    <Select
      onChange={(value) => {
        const rawColor = data.find((item) => item.value === value)
        if (!rawColor) return
        props.onChange(rawColor)
      }}
      placeholder="Pick one"
      itemComponent={Item}
      data={data}
      searchable
      maxDropdownHeight={220}
      filter={(value, item) =>
        item.label?.toLowerCase().includes(value.toLowerCase().trim()) || false
      }
      w="100%"
    />
  )
}

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
  ) => {
    return (
      <div
        ref={ref}
        {...others}
        style={{
          zIndex: 1,
        }}
      >
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
  }
)

export default RawColorSelector
