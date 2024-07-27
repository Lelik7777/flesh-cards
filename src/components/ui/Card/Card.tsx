import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import styles from './Card.module.scss'

type PropsCard = {} & ComponentPropsWithoutRef<'div'>

/**
 * The `Card` component is a reusable UI element that can be used to display content in a visually appealing way.
 * It provides a consistent and customizable structure for presenting information, often with an image, title, and description.
 *
 * @param {Object} props - The props object for the `Card` component.
 * @param {string} [props.className] - Additional CSS class names to be applied to the card.
 * @param {React.Ref<HTMLDivElement>} [ref] - A ref object that can be used to access the underlying `div` element.
 * @returns {ReactElement} - The rendered `Card` component.
 */

export const Card = forwardRef<HTMLDivElement, PropsCard>(({ className, ...rest }, ref) => {
  const classNames = {
    root: styles.root,
  }

  return <div ref={ref} {...rest} className={clsx(classNames.root, className)}></div>
})
