import { Box, Button, Flex, Text } from '@mantine/core'
import { useMemo } from 'react'
import { MdStar } from 'react-icons/md'
import { RecurrentExpensesItemOutput } from '../../../../../hooks/react-query/monerate/expense/useRecurrentExpensesQuery'
import useExpenseModalStore from '../../../../../hooks/zustand/modals/useExpenseModalStore'
import FlexCol from '../../../../_common/flex/FlexCol'
import FlexVCenter from '../../../../_common/flex/FlexVCenter'
import { Span } from '../../../../_common/text/Span'

type Props = {
  expense: RecurrentExpensesItemOutput
  type: 'recurrent' | 'regular'
}

export const ExpenseButtonItem = ({ expense, ...props }: Props) => {
  const { openModal } = useExpenseModalStore()

  const value = useMemo(() => {
    if (props.type === 'recurrent') {
      return Number(expense.value) * Number(expense.timesPerMonth)
    }

    return Number(expense.value)
  }, [props.type, expense.value, expense.timesPerMonth])

  return (
    <Button
      key={expense.id}
      variant="subtle"
      color="red"
      sx={{ height: 'unset' }}
      styles={{
        root: {
          paddingLeft: 16,
          borderRadius: 0,
          paddingBlock: 6,
        },
        label: {
          whiteSpace: 'unset',
          width: '100%',
        },
      }}
      onClick={() => {
        openModal({
          ...expense,
          categoryIds: expense?.categories?.map((category) => category?.id),
        })
      }}
    >
      <Flex
        key={expense.id}
        gap={16}
        justify="space-between"
        sx={{ width: '100%' }}
      >
        <FlexCol>
          <Span color="white">
            <Span weight="normal">{expense.name}</Span>{' '}
            {Number(expense.timesPerMonth) > 0 &&
              props.type === 'recurrent' && (
                <Span size="sm" weight={'normal'} opacity={0.5}>
                  x{expense.timesPerMonth}
                </Span>
              )}
          </Span>

          <Text>
            {value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Text>
        </FlexCol>
        <Box w={42}>
          {expense.benefitScore && expense.costScore && (
            <FlexVCenter gap={2}>
              <MdStar color="orange" size={18} />
              <Span color="white" size="md" weight="normal">
                {expense.benefitScore + expense.costScore}
              </Span>
            </FlexVCenter>
          )}
        </Box>
      </Flex>
    </Button>
  )
}
