import { Box, Center } from '@mantine/core'
import { useState } from 'react'
import MyPaper from '../../_common/overrides/MyPaper'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'

type Props = {
  test?: string
}

const LandingPage = (props: Props) => {
  const [currentForm, setCurrentForm] = useState<'loginForm' | 'registerForm'>(
    'loginForm'
  )

  return (
    <Box>
      <Center>
        <MyPaper p={16} mt={40} w={300}>
          {currentForm === 'loginForm' && (
            <LoginForm
              onToggleForm={() => {
                setCurrentForm('registerForm')
              }}
            />
          )}
          {currentForm === 'registerForm' && (
            <RegisterForm
              onToggleForm={() => {
                setCurrentForm('loginForm')
              }}
            />
          )}
        </MyPaper>
      </Center>
    </Box>
  )
}

export default LandingPage
