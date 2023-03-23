import { createStyles, Flex, Text } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import { IconGripVertical } from '@tabler/icons-react'
import { useMemo } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { IssueFragment } from '../../../../../graphql/generated/graphql'
import { useIssueLabelsQuery } from '../../../../../hooks/react-query/monerate/issue-label/useIssueLabelsQuery'
import { useMyMediaQuery } from '../../../../../hooks/useMyMediaQuery'
import useIssueModalStore from '../../../../../hooks/zustand/modals/useIssueModalStore'
import useIssueFilterStore from '../../../../../hooks/zustand/useIssueFilterStore'

type Props = {
  issue: IssueFragment
  index: number
}

const IssuesTableRow = ({ issue, ...props }: Props) => {
  const { openModal } = useIssueModalStore()
  const { data: labels } = useIssueLabelsQuery()

  const visibleLabels = useMemo(() => {
    // where issue.labels
    return (
      labels?.filter((label) =>
        issue.labels?.some((issueLabel) => issueLabel.id === label.id)
      ) || []
    )
  }, [labels, issue])

  const { highlightTop } = useIssueFilterStore()

  const isHighlighted = useMemo(() => {
    return issue.position <= highlightTop
  }, [issue.position, highlightTop])

  const { classes } = useStyles()

  const { ref: titleTdRef, height: titleTdHeight } = useElementSize()
  const { isMobile } = useMyMediaQuery()

  const avg = useMemo(() => {
    return (issue.frequency + issue.intensity) / 2
  }, [issue])

  return (
    <Draggable index={props.index} draggableId={issue.id}>
      {(provided) => (
        <tr
          onClick={() => {
            openModal({
              ...issue,
              labelIds: issue.labels?.map((label) => label.id) || [],
            })
          }}
          className={classes.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <td align="center">{avg}</td>

          <td
            style={{
              fontWeight: isHighlighted ? 500 : 'normal',
              maxHeight: 120,
            }}
            ref={titleTdRef}
          >
            <Text lineClamp={6} maw={isMobile ? 100 : undefined}>
              {issue.title}
            </Text>
          </td>
          <td
            style={{
              fontWeight: isHighlighted ? 500 : 'normal',
            }}
          >
            <Text lineClamp={6} maw={isMobile ? 100 : undefined}>
              {issue.solution}
            </Text>
          </td>
          {!isMobile && (
            <td>
              <Flex wrap={'wrap'} gap={2}>
                {visibleLabels.map((label) => (
                  <span
                    key={label.id}
                    style={{
                      backgroundColor: label.bgColor,
                      padding: '4px 12px',
                      borderRadius: 4,
                      marginRight: 4,
                    }}
                  >
                    {label.name}
                  </span>
                ))}
              </Flex>
            </td>
          )}
        </tr>
      )}
    </Draggable>
  )
}

export default IssuesTableRow

const useStyles = createStyles((theme) => ({
  item: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  dragHandle: {
    ...theme.fn.focusStyles(),

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
  },
}))
