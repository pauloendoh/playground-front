import { Box, Button, Text, Title } from '@mantine/core'
import { useEffect } from 'react'
import { useIssuesQuery } from '../../../hooks/react-query/monerate/issue/useIssuesQuery'
import useIssueModalStore from '../../../hooks/zustand/modals/useIssueModalStore'
import { MyIssueValidInput } from '../../../types/domains/monerate/issue/MyIssueValidInput'
import FlexVCenter from '../../_common/flex/FlexVCenter'
import MyPaper from '../../_common/overrides/MyPaper'

type Props = {
  test?: string
}

const IssuesContent = (props: Props) => {
  useEffect(() => {
    document.title = 'Recipes'
  }, [])

  const { openModal } = useIssueModalStore()
  const { data: issues } = useIssuesQuery()

  return (
    <>
      Issues
      <Box mt={16} />
      <MyPaper>
        <FlexVCenter>
          <Title>Issues</Title>
        </FlexVCenter>

        <Box mt={16} />
        <Box>
          {issues?.map((issue) => (
            <Text key={issue.id}>{issue.title}</Text>
          ))}
        </Box>

        <FlexVCenter mt={24} justify={'space-between'}>
          <Button
            onClick={() => {
              openModal(new MyIssueValidInput())
            }}
          >
            + Add Issue
          </Button>

          <Text>hello</Text>
        </FlexVCenter>
      </MyPaper>
    </>
  )
}

export default IssuesContent
