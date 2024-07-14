import { useId } from 'react'

import { Checked } from '@/assets'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import styles from './Checkbox.module.scss'

import { Typography } from '../Typography'

type Props = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
}

export const Checkbox = ({ checked, disabled, id, label, onChange }: Props) => {
  const innerId = useId()
  const finalId = id ?? innerId
  const classNames = {
    container: styles.container,
    indicator: styles.indicator,
    label: clsx(styles.label, disabled && styles.disabled),
    root: clsx(styles.root, disabled && styles.disabled),
    wrapper: styles.wrapper,
  }

  return (
    <div className={clsx(classNames.container)}>
      <div className={clsx(classNames.wrapper)}>
        <CheckboxRadix.Root
          checked={checked}
          className={clsx(classNames.root)}
          disabled={disabled}
          id={finalId}
          onCheckedChange={onChange}
        >
          <CheckboxRadix.Indicator className={clsx(classNames.indicator)} forceMount>
            {checked && <Checked />}
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      <Typography
        as={'label'}
        className={clsx(classNames.label)}
        htmlFor={finalId}
        variant={'body2'}
      >
        {label}
      </Typography>
    </div>
  )
}
