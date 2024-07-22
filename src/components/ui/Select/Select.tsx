import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowIosDownOutline } from '@/assets'
import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import styles from './Select.module.scss'

import { Typography } from '../Typography'

export type Option = {
  id: number
  title: string
  value: string
}
type Props = {
  disabled?: boolean
  onChangeValue: (value: string) => void
  options: Option[]
  placeholder?: string
  value: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

/**
 * A customized select component using Radix UI's `react-select` library.
 *
 * @param {Props} props - The component props.
 * @param {boolean} [props.disabled] - Whether the select is disabled.
 * @param {(value: string) => void} props.onChangeValue - The function to call when the selected value changes.
 * @param {Option[]} props.options - The available options for the select.
 * @type {Option = {id: number title: string value: string}}
 * @param {string} [props.placeholder] - The placeholder text to display when no value is selected.
 * @param {string} props.value - The currently selected value.
 * @param {React.Ref<ElementRef<typeof SelectRadix.Root>>} ref - The ref to the select component.
 * @returns {React.ReactElement} The Select component.
 */

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, Props>(
  ({ disabled, onChangeValue, options, placeholder, value }: Props, ref) => {
    const classNames = {
      content: styles.content,
      icon: styles.icon,
      trigger: styles.trigger,
      viewport: styles.viewport,
    }

    return (
      <SelectRadix.Root disabled={disabled} onValueChange={onChangeValue} value={value}>
        <SelectRadix.Trigger
          aria-label={'select-box'}
          className={clsx(classNames.trigger)}
          ref={ref}
        >
          <Typography as={'span'} variant={'body1'}>
            <SelectRadix.Value placeholder={placeholder} />
          </Typography>

          <SelectRadix.Icon className={clsx(classNames.icon)}>
            <ArrowIosDownOutline />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content
            className={clsx(classNames.content)}
            position={'popper'}
            ref={ref}
            sideOffset={1}
          >
            <SelectRadix.Viewport className={clsx(classNames.viewport)}>
              {options.map(option => (
                <SelectItem key={option.id} value={option.value}>
                  {option.title}
                </SelectItem>
              ))}
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    )
  }
)

type SelectItemProps = {} & ComponentPropsWithoutRef<typeof SelectRadix.Item>
const SelectItem = React.forwardRef<ElementRef<typeof SelectRadix.Item>, any>(
  ({ children, className, ...props }: SelectItemProps, ref) => {
    const classNames = {
      selectItem: styles.selectItem,
    }

    return (
      <SelectRadix.Item className={clsx(classNames.selectItem, className)} {...props} ref={ref}>
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
