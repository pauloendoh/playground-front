import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { Box, Button, Flex, Text, TextInput } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../../../hooks/react-query/auth/useLoginMutation'
import { MyLoginValidInput } from '../../../../types/domains/auth/MyLoginValidInput'

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

  const { mutate: submitLogin } = useLoginMutation()

  const onSubmit = (data: MyLoginValidInput) => {
    submitLogin(data)
  }

  return (
    <>
      <Text>Register</Text>
      <Box mt={16}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Username"
            {...register('usernameOrEmail')}
            error={errors.usernameOrEmail?.message}
          />

          <TextInput
            label="Password"
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />

          <Flex align="center" justify="space-between" mt={16}>
            <Button type="submit">Login</Button>

            <Button variant="subtle" onClick={props.onToggleForm}>
              Register
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  )
}

export default LoginForm
