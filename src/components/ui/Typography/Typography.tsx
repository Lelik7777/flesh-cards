import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import styles from './Typography.module.scss'

type TypographyType =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'error'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'large'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?: TypographyType
}

export const Typography = <T extends ElementType = 'p'>({
  as,
  children,
  className,
  variant = 'body1',
  ...rest
}: Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>> & TypographyProps<T>) => {
  const Component = as || 'p'

  return (
    <Component className={clsx(styles[variant], className)} {...rest}>
      {children}
    </Component>
  )
}
