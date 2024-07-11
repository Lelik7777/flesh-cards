import { ComponentPropsWithoutRef, forwardRef } from 'react'

import styles from './Card.module.scss'

type PropsCard = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, PropsCard>(({ className, ...rest }, ref) => {
  const classNames = {
    root: styles.root,
  }

  return <div ref={ref} {...rest} className={classNames.root}></div>
})
