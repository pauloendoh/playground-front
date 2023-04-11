import { Box, Title } from '@mantine/core'
import { useMemo } from 'react'
import { useGroupedNhFavoritesQuery } from '../../../hooks/react-query/nh/useGroupedNhFavoritesQuery'
import FlexCol from '../../_common/flex/FlexCol'
import NhAuthorItem from './NhAuthorItem/NhAuthorItem'
type Props = {}

const NhPage = (props: Props) => {
  const { data: authorsCount } = useGroupedNhFavoritesQuery()
  const sortedAuthorsCount = useMemo(
    () => authorsCount?.sort((a, b) => b.count - a.count) ?? [],
    [authorsCount]
  )
  return (
    <Box>
      <Title>NhPage</Title>
      <FlexCol gap={8}>
        {sortedAuthorsCount?.map((author) => {
          return <NhAuthorItem key={author.authorUrl} authorCount={author} />
        })}
      </FlexCol>
    </Box>
  )
}

export default NhPage
