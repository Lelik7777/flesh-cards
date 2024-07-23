import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import styles from './Dropdown.module.scss'

type DropdownProps = {
  children?: ReactNode
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>

export const Dropdown = forwardRef<ElementRef<typeof DropdownMenu.Root>, DropdownProps>(
  ({ children, trigger }: DropdownProps, ref) => {
    const classNames = {
      content: styles.content,
      trigger: styles.trigger,
    }

    return (
      <DropdownMenu.Root>
        <DropdownTrigger className={clsx(classNames.trigger)} ref={ref}>
          {trigger}
        </DropdownTrigger>
        <DropdownContent className={clsx(classNames.content)}>{children}</DropdownContent>
      </DropdownMenu.Root>
    )
  }
)
type DropdownTriggerProps = {
  asChild?: boolean
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>
export const DropdownTrigger = forwardRef<
  ElementRef<typeof DropdownMenu.Root>,
  DropdownTriggerProps
>(({ asChild = false, children, className }: DropdownTriggerProps, ref) => {
  return (
    <DropdownMenu.Trigger asChild={asChild} className={className} ref={ref}>
      {children}
    </DropdownMenu.Trigger>
  )
})

type DropdownContentProps = {
  align?: 'center' | 'end' | 'start'
  alignOffset?: number
  children: ReactNode
  className: string
  sideOffset?: number
} & ComponentPropsWithoutRef<typeof DropdownMenu.Portal>

export const DropdownContent = forwardRef<
  ElementRef<typeof DropdownMenu.Portal>,
  DropdownContentProps
>(
  (
    {
      align = 'end',
      alignOffset = -9,
      children,
      className,
      sideOffset = 6,
      ...props
    }: DropdownContentProps,
    ref
  ) => {
    return (
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          alignOffset={alignOffset}
          className={className}
          sideOffset={sideOffset}
          {...props}
          ref={ref}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    )
  }
)

type DropdownItemProps = {} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>
export const DropdownItem = ({ children }: DropdownItemProps) => {
  const classNames = {
    item: styles.item,
  }

  return <DropdownMenu.Item className={classNames.item}>{children}</DropdownMenu.Item>
}
