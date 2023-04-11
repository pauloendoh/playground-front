import { Box, Checkbox } from '@mantine/core'
import { useMemo } from 'react'
import { AuthorCountFragment } from '../../../../graphql/generated/graphql'
import { useUseNhAuthorsQuery } from '../../../../hooks/react-query/nh/useNhAuthorsQuery'
import { useToggleAuthorCheckMutation } from '../../../../hooks/react-query/nh/useToggleAuthorCheckMutation'
import FlexVCenter from '../../../_common/flex/FlexVCenter'

type Props = {
  authorCount: AuthorCountFragment
}

const NhAuthorItem = (props: Props) => {
  const { mutate } = useToggleAuthorCheckMutation()
  const { data: authors } = useUseNhAuthorsQuery()
  const checked = useMemo(() => {
    return authors?.some(
      (author) =>
        author.url === props.authorCount.authorUrl && !!author.checkedAt
    )
  }, [authors, props.authorCount.authorUrl])
  const handleChange = () => {
    mutate(props.authorCount.authorUrl)
  }

  return (
    <FlexVCenter>
      <Checkbox
        checked={checked}
        onClick={handleChange}
        styles={{
          input: {
            cursor: 'pointer',
          },
        }}
      />
      <Box ml={16} w="100px">
        {' '}
        ({props.authorCount.count} favorites)
      </Box>
      <a href={props.authorCount.authorUrl + 'popular'}>
        {props.authorCount.authorUrl}popular
      </a>
    </FlexVCenter>
  )
}

export default NhAuthorItem
