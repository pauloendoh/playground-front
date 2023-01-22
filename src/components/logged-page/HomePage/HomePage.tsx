import { Button } from '@mantine/core'
import { useLogout } from '../../../hooks/domains/auth/useLogout'

type Props = {
  test?: string
}

const HomePage = (props: Props) => {
  const logout = useLogout()
  return (
    <>
      Logged
      <Button
        onClick={() => {
          logout()
        }}
      >
        Logout
      </Button>
    </>
  )
}

export default HomePage
