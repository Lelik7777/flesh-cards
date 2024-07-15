import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as TabsRadix from '@radix-ui/react-tabs'
import clsx from 'clsx'

import styles from './Tabs.module.scss'

type Tab = {
  disabled?: boolean
  id: string
  title: string
  value: string
}

type Props = {
  ariaLabel?: string
  children?: ReactNode
  orientation?: 'horizontal' | 'vertical' | undefined
  tabs?: Tab[]
  value?: string
} & ComponentPropsWithoutRef<typeof TabsRadix.Root>

/**
 * Tabs component that wraps the Radix UI Tabs component.
 * @param {Props} props - The props for the Tabs component.
 * @param {ElementRef<typeof TabsRadix.Root>} ref - The ref for the Tabs component.
 * @returns {JSX.Element} - The Tabs component.
 */

export const Tabs = forwardRef<ElementRef<typeof TabsRadix.Root>, Props>(
  ({ ariaLabel, children, orientation = 'horizontal', tabs, value, ...rest }, ref) => {
    const classNames = {
      list: styles.list,
      root: styles.root,
      trigger: styles.trigger,
    }

    return (
      <TabsRadix.Root
        className={clsx(classNames.root)}
        orientation={orientation}
        ref={ref}
        {...rest}
      >
        <TabsRadix.List aria-label={ariaLabel} className={clsx(classNames.list)}>
          {tabs?.map(tab => (
            <TabsRadix.Trigger
              className={clsx(classNames.trigger, tab.disabled && styles.disabled)}
              disabled={tab.disabled}
              key={tab.id}
              value={tab.value}
            >
              {tab.title}
            </TabsRadix.Trigger>
          ))}
        </TabsRadix.List>
        {children}
      </TabsRadix.Root>
    )
  }
)

type TabsContentProps = {
  children?: ReactNode
  value: string
}

/**
 * TabContent component that wraps the Radix UI TabsContent component.
 * @param {TabsContentProps} props - The props for the TabContent component.
 * @returns {JSX.Element} - The TabContent component.
 */

export const TabContent = ({ children, value }: TabsContentProps) => {
  const classNames = {
    content: styles.content,
  }

  return (
    <TabsRadix.Content className={clsx(classNames.content)} value={value}>
      {children}
    </TabsRadix.Content>
  )
}
