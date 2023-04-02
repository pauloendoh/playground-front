import { useMantineTheme } from '@mantine/core'
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useMyMediaQuery } from '../../../../../hooks/useMyMediaQuery'
import FlexCol from '../../../flex/FlexCol'
import { useSolvedIssuesCountPerMonth } from './useSolvedIssuesCountPerWeek/useSolvedIssuesCountPerWeek'

type Props = {}

const SolvedIssuesChart = (props: Props) => {
  const solvedIssuesCountPerMonth = useSolvedIssuesCountPerMonth()

  const { isMobile } = useMyMediaQuery()

  const theme = useMantineTheme()

  return (
    <FlexCol h={400} align="center">
      <BarChart
        height={300}
        data={solvedIssuesCountPerMonth}
        width={isMobile ? 360 : 720}
        margin={{
          top: 32,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="LLLyy" angle={-45} textAnchor="end" fontSize={12} />
        <YAxis />
        <Tooltip />

        <Bar dataKey="count" fill={theme.colors.secondary[9]}>
          <LabelList
            dataKey="count"
            position="inside"
            fill="white"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </FlexCol>
  )
}

export default SolvedIssuesChart
