import { Box, Button, Container, Switch, TextInput, Title } from '@mantine/core'
import { useEffect } from 'react'
import { useIssuesQuery } from '../../../hooks/react-query/monerate/issue/useIssuesQuery'
import useIssueModalStore from '../../../hooks/zustand/modals/useIssueModalStore'
import useIssueFilterStore from '../../../hooks/zustand/useIssueFilterStore'
import { MyIssueInput } from '../../../types/domains/monerate/issue/MyIssueInput'
import FlexVCenter from '../../_common/flex/FlexVCenter'
import IssueLabelsSelector from '../../_common/modals/IssueModal/IssueLabelsSelector/IssueLabelsSelector'
import MyPaper from '../../_common/overrides/MyPaper'
import { DndIssuesTable } from './DndIssuesTable/DndIssuesTable'
import IssuesSearchBar from './IssuesSearchBar/IssuesSearchBar'

type Props = {
  test?: string
}

const IssuesContent = (props: Props) => {
  useEffect(() => {
    document.title = 'Issues'
  }, [])

  const { openModal } = useIssueModalStore()
  const { data: issues } = useIssuesQuery()

  const {
    highlightTop: highlightTopUnsolved,
    setHighlightTop: setHighlightTopUnsolved,
    filterIssueLabelIds,
    setFilterIssueLabelIds,
    filterByIsSolved,
    toggleFilterByIsSolved,
  } = useIssueFilterStore()
  return (
    <Container size="lg">
      <Box mt={16} />

      <Title>Issues</Title>

      <MyPaper mt={8}>
        <FlexVCenter justify={'space-between'} align="center">
          <IssuesSearchBar />
          <FlexVCenter gap={16}>
            <IssueLabelsSelector
              issueLabelIds={filterIssueLabelIds}
              onChange={(value) => {
                setFilterIssueLabelIds(value)
              }}
            />

            <TextInput
              label="Highlight top"
              sx={{ width: 96 }}
              value={highlightTopUnsolved}
              onChange={(e) => {
                const num = parseInt(e.currentTarget.value)
                if (num >= 0) {
                  setHighlightTopUnsolved(num)
                  return
                }

                setHighlightTopUnsolved(0)
              }}
            />
          </FlexVCenter>
        </FlexVCenter>

        <Box mt={16} />
        <Box>
          <DndIssuesTable issues={issues || []} />
        </Box>

        <FlexVCenter mt={24} justify={'space-between'}>
          <Button
            onClick={() => {
              const newIssue = new MyIssueInput()
              if (filterIssueLabelIds.length > 0) {
                newIssue.labelIds = filterIssueLabelIds
              }

              openModal(newIssue)
            }}
          >
            + Add Issue
          </Button>

          <Switch
            label={'Solved issues only'}
            checked={filterByIsSolved}
            onChange={toggleFilterByIsSolved}
          />
        </FlexVCenter>
      </MyPaper>
    </Container>
  )
}

export default IssuesContent
