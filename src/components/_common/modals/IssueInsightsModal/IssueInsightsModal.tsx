import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { Modal } from '@mantine/core'
import { MyIssueInput } from '../../../../types/domains/monerate/issue/MyIssueInput'
import SolvedIssuesChart from './CompletedByMeChart/SolvedIssuesChart'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const resolver = classValidatorResolver(MyIssueInput)

export default function IssueInsightsModal(props: Props) {
  return (
    <>
      <Modal
        opened={props.isOpen}
        onClose={() => props.onClose()}
        withCloseButton={false}
        size="xl"
        styles={{
          title: {
            width: '100%',
          },
        }}
        title={'Issue Insights'}
      >
        Insights
        <SolvedIssuesChart />
      </Modal>
    </>
  )
}
