import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Switch,
  TextInput,
  Title,
} from '@mantine/core'
import { useEffect } from 'react'
import { useIssuesQuery } from '../../../hooks/react-query/monerate/issue/useIssuesQuery'
import { useMyMediaQuery } from '../../../hooks/useMyMediaQuery'
import useIssueInsightsModalStore from '../../../hooks/zustand/modals/useIssueInsightsModalStore'
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

  const { isMobile } = useMyMediaQuery()

  const { openModal: openInsightsModal } = useIssueInsightsModalStore()

  return (
    <Container size="lg">
      <Box mt={16} />

      <FlexVCenter justify={'space-between'}>
        <Title>Issues</Title>
        <Button
          onClick={() => {
            openInsightsModal()
          }}
        >
          Insights
        </Button>
      </FlexVCenter>

      <MyPaper mt={8}>
        <Grid>
          <Grid.Col sm={6}>
            <IssuesSearchBar />
          </Grid.Col>
          <Grid.Col
            sm={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Flex gap={16}>
              <IssueLabelsSelector
                issueLabelIds={filterIssueLabelIds}
                onChange={(value) => {
                  setFilterIssueLabelIds(value)
                }}
              />

              <TextInput
                label="Highlight top"
                maw={100}
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
            </Flex>
          </Grid.Col>
        </Grid>

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

              if (filterByIsSolved) {
                newIssue.isSolved = true
              }

              openModal(newIssue)
            }}
          >
            {isMobile ? '+ Add' : '+ Add Issue'}
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
