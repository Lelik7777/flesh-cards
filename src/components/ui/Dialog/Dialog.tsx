import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Close } from '@/assets'
import * as DialogRadix from '@radix-ui/react-dialog'
import clsx from 'clsx'

import styles from './Dialog.module.scss'

import { Button } from '../Button'
import { Typography } from '../Typography'

type DialogProps = {
  children: ReactNode
  footer?: 'footer1' | 'footer2'
  header?: 'header1' | 'header2'
  headerTitle?: string
  triggerTitle?: string
} & ComponentPropsWithoutRef<typeof DialogRadix.Root>

/**
 * A reusable Dialog component built using Radix UI's Dialog primitive.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be displayed inside the dialog.
 * @param {'footer1' | 'footer2'} [props.footer='footer1'] - The variant of the dialog footer.
 * @param {'header1' | 'header2'} [props.header='header1'] - The variant of the dialog header.
 * @param {string} [props.headerTitle] - The title to be displayed in the dialog header.
 * @param {string} [props.triggerTitle] - The title to be displayed on the dialog trigger button.
 * @param {React.ComponentPropsWithoutRef<typeof DialogRadix.Root>} [props] - Additional props to be passed to the DialogRadix.Root component.
 *
 * @returns {React.ReactElement} - The Dialog component.
 */

export const Dialog = ({
  children,
  footer = 'footer1',
  header = 'header1',
  headerTitle,
  triggerTitle,
}: DialogProps) => {
  const classNames = {
    container: styles.container,
    content: styles.content,
    overlay: styles.overlay,
  }

  return (
    <DialogRadix.Root>
      <DialogTrigger>
        <Button>{triggerTitle}</Button>
      </DialogTrigger>
      <DialogRadix.Portal>
        <DialogRadix.Overlay className={clsx(classNames.overlay)} />
        <DialogRadix.Content className={clsx(classNames.content)}>
          <DialogHeader variant={header}>{headerTitle}</DialogHeader>
          <div className={clsx(classNames.container)}>{children}</div>
          <DialogFooter variant={footer} />
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
}

type DialogTriggerProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<typeof DialogRadix.Trigger>

export const DialogTrigger = ({ children }: DialogTriggerProps) => {
  return <DialogRadix.Trigger asChild>{children}</DialogRadix.Trigger>
}
type DialogHeaderProps = {
  children: ReactNode
  variant: 'header1' | 'header2'
} & ComponentPropsWithoutRef<'div'>
export const DialogHeader = ({ children, variant }: DialogHeaderProps) => {
  return (
    <div className={clsx(styles[variant])}>
      <DialogRadix.Title className={styles.title}>
        <Typography variant={variant === 'header1' ? 'h3' : 'h1'}>{children}</Typography>
      </DialogRadix.Title>
      {variant === 'header1' && (
        <DialogRadix.Close asChild>
          <Button variant={'icon'}>
            <Close />
          </Button>
        </DialogRadix.Close>
      )}
    </div>
  )
}

type DialogFooterProps = {
  titleBtnLeft?: string
  variant?: 'footer1' | 'footer2'
} & ComponentPropsWithoutRef<'div'>

export const DialogFooter = ({
  titleBtnLeft = 'Cancel',
  variant = 'footer1',
}: DialogFooterProps) => {
  return (
    <div className={clsx(styles[variant])}>
      <DialogRadix.Close asChild>
        {variant === 'footer1' ? (
          <Button variant={'secondary'}>{titleBtnLeft}</Button>
        ) : (
          <Button fullWidth>primary</Button>
        )}
      </DialogRadix.Close>
      {variant === 'footer1' && <Button>primary</Button>}
    </div>
  )
}
