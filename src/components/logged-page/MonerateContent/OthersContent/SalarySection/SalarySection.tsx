import { Title } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import {
  fetchSalary,
  useSalaryQuery,
} from '../../../../../hooks/react-query/monerate/salary/useSalaryQuery'
import { useSaveSalaryMutation } from '../../../../../hooks/react-query/monerate/salary/useSaveSalaryMutation'
import { MySalaryValidInput } from '../../../../../types/domains/monerate/salary/MySalaryValidInput'
import MyTextInput from '../../../../_common/inputs/MyTextInput'
import MyPaper from '../../../../_common/overrides/MyPaper'

type Props = {}

const SalarySection = (props: Props) => {
  const { data } = useSalaryQuery()
  const [value, setValue] = useState(0)
  const [hasChanged, setHasChanged] = useState(false)

  useEffect(() => {}, [])

  const [debouncedValue] = useDebouncedValue(value, 500)

  const { mutate: submitSave } = useSaveSalaryMutation()

  useEffect(() => {
    fetchSalary().then((salary) => {
      setValue(salary?.value || 0)
    })
  }, [])

  useEffect(() => {
    if (!hasChanged || debouncedValue === data?.value) return
    const input = new MySalaryValidInput()
    input.value = debouncedValue

    submitSave(input)
  }, [debouncedValue, hasChanged])

  return (
    <MyPaper>
      <Title order={4}>Salary</Title>
      <MyTextInput
        mt={8}
        value={value}
        onChange={(e) => {
          setValue(Number(e.currentTarget.value))
          setHasChanged(true)
        }}
        type="number"
      />
    </MyPaper>
  )
}

export default SalarySection
