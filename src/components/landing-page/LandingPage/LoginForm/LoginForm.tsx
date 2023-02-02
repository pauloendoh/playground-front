import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { Button, Flex, Text } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../../../hooks/react-query/auth/useLoginMutation'
import { MyLoginValidInput } from '../../../../types/domains/auth/MyLoginValidInput'
import FlexCol from '../../../_common/flex/FlexCol'
import MyTextInput from '../../../_common/inputs/MyTextInput'

interface Props {
  onToggleForm: () => void
}

const resolver = classValidatorResolver(MyLoginValidInput)

const LoginForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyLoginValidInput>({
    resolver,
  })

  const { mutate: submitLogin, isLoading } = useLoginMutation()

  const onSubmit = (data: MyLoginValidInput) => {
    submitLogin(data)
  }

  return (
    <>
      <Text>Register</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexCol mt={16} gap={8}>
          <MyTextInput
            label="Username"
            {...register('usernameOrEmail')}
            error={errors.usernameOrEmail?.message}
          />

          <MyTextInput
            label="Password"
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />

          <Flex align="center" justify="space-between" mt={16}>
            <Button type="submit" loading={isLoading}>
              Login
            </Button>

            <Button variant="subtle" onClick={props.onToggleForm}>
              Register
            </Button>
          </Flex>
        </FlexCol>
      </form>
    </>
  )
}

export default LoginForm
