import { Box, MultiSelect, SelectItem, SelectItemProps } from '@mantine/core'
import { forwardRef, useMemo } from 'react'
import { MyCategoryInput } from '../../../../../hooks/react-query/monerate/category/types/MyCategoryInput'
import { useCategoriesQuery } from '../../../../../hooks/react-query/monerate/category/useCategoriesQuery'
import useCategoryModalStore from '../../../../../hooks/zustand/modals/useCategoryModalStore'

type Props = {
  categoryIds: string[]
  onChange: (categoryIds: string[]) => void
}

const CategoriesSelector = (props: Props) => {
  const { data: categories } = useCategoriesQuery()
  const { openModal } = useCategoryModalStore()

  const items = useMemo(() => {
    const items =
      categories?.map(
        (category) =>
          ({
            label: category?.name,
            value: category?.id,
          } as SelectItem)
      ) || []

    return [
      {
        label: '+ Add Category',
        value: '-1',
      },
      ...items,
    ]
  }, [categories])

  return (
    <MultiSelect
      data={items}
      value={props.categoryIds}
      onChange={(values) => {
        if (values.includes('-1')) {
          openModal(new MyCategoryInput())
          return
        }
        props.onChange(values)
      }}
      searchable
      itemComponent={Item}
      placeholder="Pick Categories"
      label="Categories"
    />
  )
}

const Item = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ label, value, ...others }, ref) => {
    return (
      <div ref={ref} {...others}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <div>{label}</div>
        </Box>
      </div>
    )
  }
)

export default CategoriesSelector
