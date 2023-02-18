import { Box, Button, Text, Title } from '@mantine/core'
import { useEffect } from 'react'
import { useIssuesQuery } from '../../../hooks/react-query/monerate/issue/useIssuesQuery'
import useIssueModalStore from '../../../hooks/zustand/modals/useIssueModalStore'
import { MyIssueInput } from '../../../types/domains/monerate/issue/MyIssueValidInput'
import FlexVCenter from '../../_common/flex/FlexVCenter'
import MyPaper from '../../_common/overrides/MyPaper'
import IssuesTable from './IssuesTable/IssuesTable'

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
          <IssuesTable issues={issues || []} />
        </Box>

        <FlexVCenter mt={24} justify={'space-between'}>
          <Button
            onClick={() => {
              openModal(new MyIssueInput())
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
