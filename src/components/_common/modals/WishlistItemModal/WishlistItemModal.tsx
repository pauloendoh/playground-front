import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import {
  CloseButton,
  Flex,
  Grid,
  Modal,
  NumberInput,
  Textarea,
  Title,
} from '@mantine/core'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSaveWishlistItemMutation } from '../../../../hooks/react-query/monerate/wishlist-item/useSaveWishlistItemMutation'
import { useWishlistItemModalStore } from '../../../../hooks/zustand/modals/useWishlistItemModalStore'
import { MyWishlistItemValidInput } from '../../../../types/domains/monerate/wishlist-item/MyWishlistItemValidInput'
import MyTextInput from '../../inputs/MyTextInput'
import SaveCancelButtons from '../../inputs/SaveCancelButtons'
import { WishlistItemMoreMenu } from './WishlistItemMoreMenu/WishlistItemMoreMenu'

const resolver = classValidatorResolver(MyWishlistItemValidInput)

export default function WishlistItemModal() {
  const { isOpen, onClose, initialValue } = useWishlistItemModalStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
    watch,
    setValue,
  } = useForm<MyWishlistItemValidInput>({
    resolver,
    defaultValues: initialValue,
  })

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setFocus('itemName')
        reset(initialValue)
      }, 100)
    }
  }, [isOpen])

  const { mutate: submitSave, isLoading } = useSaveWishlistItemMutation()

  const onSubmit = (data: MyWishlistItemValidInput) => {
    submitSave(data, {
      onSuccess: () => {
        onClose()
      },
    })
  }

  return (
    <Modal
      opened={isOpen}
      onClose={() => onClose()}
      withCloseButton={false}
      size="md"
      styles={{
        title: {
          width: '100%',
        },
      }}
      title={
        <Flex align={'center'} justify="space-between">
          <Title order={3}>
            {initialValue?.id ? 'Edit Wishlist Item' : 'Add Wishlist Item'}
          </Title>
          {initialValue?.id ? (
            <WishlistItemMoreMenu
              item={initialValue}
              afterDelete={() => onClose()}
            />
          ) : (
            <CloseButton onClick={() => onClose()} />
          )}
        </Flex>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Col span={12}>
            <Textarea
              autosize
              label="Item Name"
              {...register('itemName')}
              error={errors.itemName?.message}
            />
          </Grid.Col>

          <Grid.Col span={5}>
            <MyTextInput
              label="Threshold in thousands"
              {...register('priceInThousands')}
              error={errors.priceInThousands?.message}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <NumberInput
              label="Price"
              onChange={(value) => {
                if (value === '') return
                setValue('price', value)
              }}
              value={watch('price') || 0}
              error={errors.price?.message}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Priority"
              onChange={(value) => {
                if (value === '') {
                  setValue('priority', null)
                  return
                }
                setValue('priority', value)
              }}
              value={watch('priority') ?? ''}
              error={errors.price?.message}
              step={0.1}
              precision={1}
            />
          </Grid.Col>
        </Grid>

        <Flex align="center" justify="space-between" mt={16}>
          <SaveCancelButtons
            onEnabledAndCtrlEnter={handleSubmit(onSubmit)}
            isLoading={isLoading}
            onCancel={() => onClose()}
          />
        </Flex>
      </form>
    </Modal>
  )
}
