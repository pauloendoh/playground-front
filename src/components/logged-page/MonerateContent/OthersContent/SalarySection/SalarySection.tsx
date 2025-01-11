import { Text, Title, Tooltip } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { useEffect, useMemo, useRef, useState } from 'react'
import { MdInfo } from 'react-icons/md'
import {
  fetchSalary,
  useSalaryQuery,
} from '../../../../../hooks/react-query/monerate/salary/useSalaryQuery'
import { useSaveSalaryMutation } from '../../../../../hooks/react-query/monerate/salary/useSaveSalaryMutation'
import { MySalaryValidInput } from '../../../../../types/domains/monerate/salary/MySalaryValidInput'
import FlexCol from '../../../../_common/flex/FlexCol'
import FlexVCenter from '../../../../_common/flex/FlexVCenter'
import MyTextInput from '../../../../_common/inputs/MyTextInput'
import MyPaper from '../../../../_common/overrides/MyPaper'

type Props = {}

const SalarySection = (props: Props) => {
  const { data: queryData } = useSalaryQuery()
  const [values, setValues] = useState<MySalaryValidInput>({
    id: null,
    value: 0,
    jobHoursPerMonth: 0,
  })
  const [hasChanged, setHasChanged] = useState(false)

  const [debouncedValues] = useDebouncedValue(values, 500)

  const { mutate: submitSave } = useSaveSalaryMutation()

  useEffect(() => {
    fetchSalary().then((salary) => {
      setValues((curr) => ({
        ...curr,
        id: salary?.id ?? null,
        value: salary?.value ?? 0,
        jobHoursPerMonth: salary?.jobHoursPerMonth ?? 0,
      }))
    })
  }, [])

  useEffect(() => {
    if (!hasChanged) return
    const payload = new MySalaryValidInput()
    payload.value = debouncedValues.value
    payload.jobHoursPerMonth = debouncedValues.jobHoursPerMonth

    console.log({
      payload,
    })

    submitSave(payload)
  }, [debouncedValues, hasChanged])

  const valueInputRef = useRef<HTMLInputElement>(null)
  const hoursInputRef = useRef<HTMLInputElement>(null)

  const moneyPerHour = useMemo(() => {
    const hoursPerDay = values.jobHoursPerMonth
    return (values.value ?? 0) / (hoursPerDay * 20)
  }, [values.value, values.jobHoursPerMonth])

  return (
    <MyPaper>
      <Title order={4}>Salary</Title>
      <FlexCol gap={8}>
        <FlexVCenter gap={16}>
          <MyTextInput
            ref={valueInputRef}
            label="Job Monthly Income"
            mt={8}
            value={values.value ?? 0}
            onChange={() => {
              setValues((curr) => ({
                ...curr,
                value: Number(valueInputRef.current?.value ?? curr.value),
              }))
              setHasChanged(true)
            }}
            type="number"
          />

          <MyTextInput
            label="Avg hour per day"
            mt={8}
            type="number"
            value={values.jobHoursPerMonth ?? 0}
            ref={hoursInputRef}
            onChange={() => {
              setValues((curr) => ({
                ...curr,
                jobHoursPerMonth: Number(
                  hoursInputRef.current?.value ?? curr.jobHoursPerMonth
                ),
              }))
              setHasChanged(true)
            }}
          />
        </FlexVCenter>
        {moneyPerHour !== 0 && (
          <FlexCol>
            <Text size="sm">
              {moneyPerHour.toFixed(1)} per hour{' '}
              <Tooltip label="Considering 20 working days" withArrow>
                <span
                  style={{
                    position: 'relative',
                    top: 2,
                    left: 2,
                  }}
                >
                  <MdInfo />
                </span>
              </Tooltip>
            </Text>
          </FlexCol>
        )}
      </FlexCol>
    </MyPaper>
  )
}

export default SalarySection
