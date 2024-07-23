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
  color?: string
  variant?: TypographyType
}

/**
 * The `Typography` component is a flexible and reusable component for rendering text content with predefined styles.
 * It allows you to specify the semantic HTML element (e.g., 'p', 'h1', 'span') and the desired text variant (e.g., 'body1', 'h1', 'link1').
 *
 * @param props - The props object for the `Typography` component.
 * @param props.as - The semantic HTML element to be used as the root element for the text content.
 * @param props.children - The content to be rendered inside the `Typography` component.
 * @param props.className - Additional CSS class names to be applied to the `Typography` component.
 * @param props.variant - The predefined text variant to be applied to the `Typography` component.
 * @returns The rendered `Typography` component.
 */

export const Typography = <T extends ElementType = 'p'>({
  as,
  children,
  className,
  color,
  variant = 'body1',
  ...rest
}: Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>> & TypographyProps<T>) => {
  const Component = as || 'p'

  return (
    <Component className={clsx(styles[variant], className)} color={color} {...rest}>
      {children}
    </Component>
  )
}
