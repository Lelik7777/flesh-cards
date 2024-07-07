import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import styles from './Button.module.scss'

export type Props<T extends ElementType = 'button'> = ComponentPropsWithoutRef<T> &
  Partial<{
    as: T
    children: ReactNode
    className: string
    fullWidth: boolean
    variant: 'link' | 'primary' | 'secondary'
  }>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component
      className={clsx(
        styles[variant],
        fullWidth && styles.fullWidth,
        className && styles[className]
      )}
      {...rest}
    />
  )
}
