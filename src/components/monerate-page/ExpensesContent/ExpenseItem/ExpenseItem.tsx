import { Button, Grid, Text } from '@mantine/core'
import { ExpenseFragment } from '../../../../graphql/generated/graphql'

type Props = {
  expense: ExpenseFragment
  onClick: () => void
}

const ExpenseItem = ({ expense, ...props }: Props) => {
  return (
    <Button
      key={expense.id}
      onClick={props.onClick}
      color="dark"
      styles={{
        label: {
          width: '100%',
          height: 'fit-content',
          padding: '8px 0px',
        },
      }}
      sx={{ height: 'unset' }}
      variant="subtle"
    >
      <Grid sx={{ width: '100%' }} align="center">
        <Grid.Col span={4} sx={{ whiteSpace: 'normal' }}>
          <Text>{expense.name}</Text>
        </Grid.Col>
        <Grid.Col
          span={3}
          sx={(theme) => ({
            color: theme.colors.red[5],
          })}
        >
          {Number(expense.value).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Grid.Col>
      </Grid>
    </Button>
  )
}

export default ExpenseItem
