import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import styles from './Radiogroup.module.scss'

import { Typography } from '../Typography'

/**
 * Props for the RadioGroup component.
 * @typedef {Object} RadioGroupProps
 * @property {ReactNode} [children] - The child elements of the radio group.
 * @property {string} [defaultValue] - The default value of the radio group.
 * @property {boolean} [disabled] - Whether the radio group is disabled.
 */
export type RadioGroupProps = {
  children?: ReactNode
  defaultValue?: string
  disabled?: boolean
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

/**
 * A custom RadioGroup component using Radix UI RadioGroup.
 * @param {RadioGroupProps} props - The props for the RadioGroup component.
 * @param {React.Ref<ElementRef<typeof RadioGroupRadix.Root>>} ref - The ref for the radio group root element.
 * @returns {JSX.Element} - The rendered RadioGroup component.
 */
export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioGroupProps>(
  ({ children, defaultValue, disabled, ...rest }: RadioGroupProps, ref) => {
    const classNames = {
      root: styles.root,
    } as const

    return (
      <RadioGroupRadix.Root
        aria-label={'View density'}
        className={clsx(classNames.root)}
        defaultValue={defaultValue}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {children}
      </RadioGroupRadix.Root>
    )
  }
)

/**
 * Props for the Radio component.
 * @typedef {Object} RadioProps
 * @property {string} [id] - The id of the radio item.
 * @property {string} [label] - The label for the radio item.
 * @property {string} value - The value of the radio item.
 */
export type RadioProps = {
  id?: string
  label?: string
  value: string
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Item>

/**
 * A custom Radio component using Radix UI RadioGroup.Item.
 * @param {RadioProps} props - The props for the Radio component.
 * @param {React.Ref<ElementRef<typeof RadioGroupRadix.Item>>} ref - The ref for the radio item element.
 * @returns {JSX.Element} - The rendered Radio component.
 */

export const Radio = forwardRef<ElementRef<typeof RadioGroupRadix.Item>, RadioProps>(
  ({ id, label, value, ...rest }: RadioProps, ref) => {
    const classNames = {
      indicator: styles.indicator,
      item: styles.item,
      label: styles.label,
    } as const

    return (
      <div className={styles.container}>
        <RadioGroupRadix.Item
          className={clsx(classNames.item)}
          id={id}
          ref={ref}
          value={value}
          {...rest}
        >
          <RadioGroupRadix.Indicator className={clsx(classNames.indicator)} />
        </RadioGroupRadix.Item>
        {label && (
          <Typography
            as={'label'}
            className={clsx(classNames.label)}
            htmlFor={id}
            variant={'body2'}
          >
            {label}
          </Typography>
        )}
      </div>
    )
  }
)
