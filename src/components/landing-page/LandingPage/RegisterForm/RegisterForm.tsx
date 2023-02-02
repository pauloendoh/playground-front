import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { Button, Flex, Text } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { useRegisterMutation } from '../../../../hooks/react-query/auth/useRegisterMutation'
import { MyRegisterValidInput } from '../../../../types/domains/auth/MyRegisterAuthInput'
import FlexCol from '../../../_common/flex/FlexCol'
import MyTextInput from '../../../_common/inputs/MyTextInput'

interface Props {
  onToggleForm: () => void
}

const resolver = classValidatorResolver(MyRegisterValidInput)

const RegisterForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyRegisterValidInput>({
    resolver,
  })

  const { mutate: submitRegister, isLoading } = useRegisterMutation()

  const onSubmit = (data: MyRegisterValidInput) => {
    submitRegister(data)
  }

  return (
    <>
      <Text>Register</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexCol mt={16} gap={8}>
          <MyTextInput
            label="Username"
            {...register('username')}
            error={errors.username?.message}
          />
          <MyTextInput
            label="Email"
            {...register('email')}
            error={errors.email?.message}
          />
          <MyTextInput
            label="Password"
            type="password"
            {...register('password1')}
            error={errors.password1?.message}
          />
          <MyTextInput
            label="Confirm Password"
            type="password"
            {...register('password2')}
            error={errors.password2?.message}
          />

          <Flex align="center" justify="space-between" mt={16}>
            <Button type="submit" loading={isLoading}>
              Register
            </Button>

            <Button variant="subtle" onClick={props.onToggleForm}>
              Login
            </Button>
          </Flex>
        </FlexCol>
      </form>
    </>
  )
}

export default RegisterForm
