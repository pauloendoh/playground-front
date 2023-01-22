import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { Box, Button, Flex, Text, TextInput } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { useRegisterMutation } from '../../../../hooks/react-query/auth/useRegisterMutation'
import { MyRegisterValidInput } from '../../../../types/domains/auth/MyRegisterAuthInput'

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

  const { mutate: submitRegister } = useRegisterMutation()

  const onSubmit = (data: MyRegisterValidInput) => {
    submitRegister(data)
  }

  return (
    <>
      <Text>Register</Text>
      <Box mt={16}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Username"
            {...register('username')}
            error={errors.username?.message}
          />
          <TextInput
            label="Email"
            {...register('email')}
            error={errors.email?.message}
          />
          <TextInput
            label="Password"
            type="password"
            {...register('password1')}
            error={errors.password1?.message}
          />
          <TextInput
            label="Confirm Password"
            type="password"
            {...register('password2')}
            error={errors.password2?.message}
          />

          <Flex align="center" justify="space-between" mt={16}>
            <Button type="submit">Register</Button>

            <Button variant="subtle" onClick={props.onToggleForm}>
              Login
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  )
}

export default RegisterForm
