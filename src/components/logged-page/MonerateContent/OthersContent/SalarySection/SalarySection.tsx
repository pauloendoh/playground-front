import { Textarea, Title } from '@mantine/core'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useSalaryQuery } from '../../../../../hooks/react-query/monerate/salary/useSalaryQuery'
import { useSaveSalaryMutation } from '../../../../../hooks/react-query/monerate/salary/useSaveSalaryMutation'
import {
  emptyMySalaryValidInput,
  MySalaryValidInput,
} from '../../../../../types/domains/monerate/salary/MySalaryValidInput'
import FlexCol from '../../../../_common/flex/FlexCol'
import FlexVCenter from '../../../../_common/flex/FlexVCenter'
import MyTextInput from '../../../../_common/inputs/MyTextInput'
import SaveCancelButtons from '../../../../_common/inputs/SaveCancelButtons'
import MyPaper from '../../../../_common/overrides/MyPaper'
import { useMoneyPerHour } from './useMoneyPerHour/useMoneyPerHour'

type Props = {}

const SalarySection = (props: Props) => {
  const { data: queryData } = useSalaryQuery()

  const { mutate: submitSave, isLoading } = useSaveSalaryMutation()

  const valueInputRef = useRef<HTMLInputElement>(null)
  const hoursInputRef = useRef<HTMLInputElement>(null)

  const moneyPerHour = useMoneyPerHour()

  const form = useForm<MySalaryValidInput>({
    defaultValues: emptyMySalaryValidInput(),
  })

  useEffect(() => {
    if (queryData) {
      form.reset({
        id: queryData.id,
        jobHoursPerMonth: queryData.jobHoursPerMonth,
        notes: queryData.notes,
        value: queryData.value,
      })
    }
  }, [queryData])

  return (
    <MyPaper>
      <Title order={4}>
        Salary
        {!!moneyPerHour && (
          <span>
            {' '}
            -{' '}
            <span
              style={{
                color: 'green',
              }}
            >
              {moneyPerHour.toFixed(1)} per hour
            </span>
          </span>
        )}
      </Title>
      <form
        onSubmit={form.handleSubmit((data) => {
          submitSave(data)
        })}
      >
        <FlexCol gap={16}>
          <FlexVCenter gap={16}>
            <MyTextInput
              ref={valueInputRef}
              label="Job Monthly Income"
              mt={8}
              value={form.watch('value') ?? 0}
              onChange={() => {
                form.setValue('value', Number(valueInputRef.current?.value), {
                  shouldDirty: true,
                  shouldTouch: true,
                  shouldValidate: true,
                })
              }}
              type="number"
            />

            <MyTextInput
              label="Avg hour per day"
              mt={8}
              type="number"
              value={form.watch('jobHoursPerMonth') ?? 0}
              ref={hoursInputRef}
              onChange={() => {
                form.setValue(
                  'jobHoursPerMonth',
                  Number(hoursInputRef.current?.value),
                  {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  }
                )
              }}
            />
          </FlexVCenter>

          <Textarea
            value={form.watch('notes')}
            label="Notes"
            onChange={(e) => {
              form.setValue('notes', e.target.value, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
              })
            }}
            minRows={2}
            placeholder='e.g. "I work 8 hours per day, 5 days per week"'
          />

          <SaveCancelButtons
            onEnabledAndCtrlEnter={() => {
              submitSave(form.getValues())
            }}
            disabled={
              !form.formState.isDirty || !form.formState.isValid || isLoading
            }
          />
        </FlexCol>
      </form>
    </MyPaper>
  )
}

export default SalarySection
