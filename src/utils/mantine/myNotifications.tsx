import { NotificationProps } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { MdCheck, MdError } from 'react-icons/md'

export const myNotifications = {
  success: (title: string, options?: NotificationProps) => {
    showNotification({
      title,
      message: '',
      icon: <MdCheck />,
      color: 'teal',
      ...options,
    })
  },
  error: (title: string, options?: NotificationProps) => {
    showNotification({
      title,
      message: '',
      icon: <MdError />,
      color: 'red',
      ...options,
    })
  },
}
