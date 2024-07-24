import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import styles from './Radiogroup.module.scss'

import { Typography } from '../Typography'

type RadioGroupProps = {
  children?: ReactNode
  defaultValue?: string
  disabled?: boolean
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioGroupProps>(
  ({ children, defaultValue, disabled }: RadioGroupProps, ref) => {
    const classNames = {
      root: styles.root,
    }

    return (
      <RadioGroupRadix.Root
        aria-label={'View density'}
        className={clsx(classNames.root)}
        defaultValue={defaultValue}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </RadioGroupRadix.Root>
    )
  }
)

type RadioProps = {
  id?: string
  label?: string
  value?: string
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Item>

export const Radio = forwardRef<ElementRef<typeof RadioGroupRadix.Item>, RadioProps>(
  ({ id, label, value }: RadioProps, ref) => {
    const classNames = {
      indicator: styles.indicator,
      item: styles.item,
      label: styles.label,
    }

    return (
      <div className={styles.container}>
        <RadioGroupRadix.Item className={clsx(classNames.item)} id={id} ref={ref} value={value}>
          <RadioGroupRadix.Indicator className={clsx(classNames.indicator)} />
        </RadioGroupRadix.Item>
        <Typography as={'label'} className={clsx(classNames.label)} htmlFor={id} variant={'body2'}>
          {label}
        </Typography>
      </div>
    )
  }
)
