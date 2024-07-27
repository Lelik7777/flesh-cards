import { ComponentPropsWithoutRef, ElementType, ForwardedRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import styles from './Button.module.scss'

type InferType<T> = T extends ElementType<infer U> ? U : never
/**
 * The props for the Button component.
 * @template T - The HTML element type or React component to render as the button.
 */
export type ButtonProps<T extends ElementType = 'button'> = ComponentPropsWithoutRef<T> &
  Partial<{
    as: T
    children: ReactNode
    className: string
    fullWidth: boolean
    variant: 'icon' | 'link' | 'primary' | 'secondary'
  }>

/**
 * A polymorphic and reusable button component.
 * @template T - The HTML element type or React component to render as the button.
 * @param props - The props for the Button component.
 * @returns A React element representing the button.
 */

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref?: ForwardedRef<InferType<T>>) => {
    const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

    return (
      <Component
        className={clsx(
          styles[variant],
          fullWidth && styles.fullWidth,
          className && styles[className]
        )}
        ref={ref}
        {...rest}
      />
    )
  }
)
