import { Box, Button, Flex } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'

interface Props {
  submitButtonId?: string
  isLoading?: boolean
  disabled?: boolean
  onSave?: () => void
  onCancel?: () => void
  onEnabledAndCtrlEnter?: () => void
  onEnableAndCtrlS?: () => void
}

const SaveCancelButtons = (props: Props) => {
  useHotkeys(
    [
      [
        'ctrl+enter',
        () => {
          if (
            !props.disabled &&
            !props.isLoading &&
            props.onEnabledAndCtrlEnter
          ) {
            props.onEnabledAndCtrlEnter()
          }
        },
      ],
      [
        'ctrl+s',
        (e) => {
          e.preventDefault()
          if (!props.disabled && !props.isLoading && props.onEnableAndCtrlS) {
            props.onEnableAndCtrlS()
          }
        },
      ],
    ],
    ['input', 'select', 'textarea']
  )

  return (
    <Flex>
      <Button
        loading={props.isLoading}
        type="submit"
        id={props.submitButtonId}
        disabled={props.disabled}
        styles={(theme) => ({
          label: {
            color: theme.colors.dark[0],
          },
        })}
        onClick={props.onSave}
      >
        Save
      </Button>

      <Box ml={8}>
        <Button onClick={props.onCancel} variant="subtle">
          Cancel
        </Button>
      </Box>
    </Flex>
  )
}

export default SaveCancelButtons
