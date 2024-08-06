import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import styles from './Dropdown.module.scss'

/**
 * A customizable dropdown component using Radix UI's DropdownMenu.
 *
 * @param {DropdownProps} props - The props for the Dropdown component
 * @param {React.Ref<ElementRef<typeof DropdownMenu.Content>>} ref - Ref forwarded to the DropdownMenu.Content
 * @returns {JSX.Element} The Dropdown component
 */

export type DropdownProps = {
  children?: ReactNode
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>

/**
 * A customizable dropdown component using Radix UI's DropdownMenu.
 *
 * @param {DropdownProps} props - The props for the Dropdown component
 * @param {React.Ref<ElementRef<typeof DropdownMenu.Content>>} ref - Ref forwarded to the DropdownMenu.Content
 * @returns {JSX.Element} The Dropdown component
 */

export const Dropdown = forwardRef<ElementRef<typeof DropdownMenu.Content>, DropdownProps>(
  ({ children, trigger, ...rest }, ref) => {
    const classNames = {
      content: styles.content,
      trigger: styles.trigger,
    } as const

    return (
      <DropdownMenu.Root {...rest}>
        <DropdownTrigger className={clsx(classNames.trigger)}>{trigger}</DropdownTrigger>
        <DropdownContent className={clsx(classNames.content)} ref={ref}>
          {children}
        </DropdownContent>
      </DropdownMenu.Root>
    )
  }
)

/**
 * Props for the DropdownTrigger component.
 * @typedef {Object} DropdownTriggerProps
 * @property {boolean} [asChild] - Whether to render the trigger as a child element.
 * @property {ReactNode} [children] - The content of the trigger.
 * @property {string} [className] - Additional CSS class for the trigger.
 * @extends {ComponentPropsWithoutRef<typeof DropdownMenu.Trigger>}
 */

export type DropdownTriggerProps = {
  asChild?: boolean
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownMenu.Trigger>

/**
 * The trigger component for the Dropdown.
 *
 * @param {DropdownTriggerProps} props - The props for the DropdownTrigger component.
 * @param {React.Ref<ElementRef<typeof DropdownMenu.Root>>} ref - Ref forwarded to the DropdownMenu.Trigger.
 * @returns {JSX.Element} The DropdownTrigger component.
 */

export const DropdownTrigger = forwardRef<
  ElementRef<typeof DropdownMenu.Trigger>,
  DropdownTriggerProps
>(({ asChild = false, children, className, ...rest }: DropdownTriggerProps, ref) => {
  return (
    <DropdownMenu.Trigger asChild={asChild} className={className} {...rest} ref={ref}>
      {children}
    </DropdownMenu.Trigger>
  )
})

/**
 * Props for the DropdownContent component.
 * @typedef {Object} DropdownContentProps
 * @property {'center' | 'end' | 'start'} [align] - Alignment of the dropdown content.
 * @property {number} [alignOffset] - Offset for alignment.
 * @property {ReactNode} children - The content of the dropdown.
 * @property {string} className - Additional CSS class for the content.
 * @property {number} [sideOffset] - Offset from the side.
 * @extends {ComponentPropsWithoutRef<typeof DropdownMenu.Content>}
 */

export type DropdownContentProps = {
  align?: 'center' | 'end' | 'start'
  alignOffset?: number
  children: ReactNode
  className: string
  sideOffset?: number
} & ComponentPropsWithoutRef<typeof DropdownMenu.Content>

/**
 * The content component for the Dropdown.
 *
 * @param {DropdownContentProps} props - The props for the DropdownContent component.
 * @param {React.Ref<ElementRef<typeof DropdownMenu.Content>>} ref - Ref forwarded to the DropdownMenu.Content.
 * @returns {JSX.Element} The DropdownContent component.
 */

export const DropdownContent = forwardRef<
  ElementRef<typeof DropdownMenu.Content>,
  DropdownContentProps
>(
  (
    {
      align = 'end',
      alignOffset = -9,
      children,
      className,
      sideOffset = 6,
      ...rest
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
          {...rest}
          ref={ref}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    )
  }
)

/**
 * Props for the DropdownItem component.
 * @typedef {Object} DropdownItemProps
 * @extends {ComponentPropsWithoutRef<typeof DropdownMenu.Item>}
 */

export type DropdownItemProps = {} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>

/**
 * An individual item within the Dropdown.
 *
 * @param {DropdownItemProps} props - The props for the DropdownItem component.
 * @returns {JSX.Element} The DropdownItem component.
 */

export const DropdownItem = ({ children, ...rest }: DropdownItemProps) => {
  const classNames = {
    item: styles.item,
  } as const

  return (
    <DropdownMenu.Item className={classNames.item} {...rest}>
      {children}
    </DropdownMenu.Item>
  )
}
