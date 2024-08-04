import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import {
  Edit2Outline,
  LogOut,
  MoreVerticalOutline,
  PersonOutline,
  PlayCircleOutline,
  Trash,
} from '@/assets'
import Ivan from '@/assets/images/Ivan 1.png'

import styles from './Dropdown.module.scss'

import { Typography } from '../Typography'
import { Dropdown, DropdownItem } from './Dropdown'

const meta = {
  args: {
    children: (
      <>
        <DropdownItem>hello</DropdownItem>
        <DropdownItem>world</DropdownItem>
      </>
    ),
    trigger: <MoreVerticalOutline height={'24px'} width={'24px'} />,
  },
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

type DropdownContent = {
  icon: React.ReactNode
  id: string
  text: React.ReactNode | string
}

/**
 * Wrapper component for Storybook demonstration purposes.
 * This wrapper is used to provide a controlled environment for the Dropdown in Storybook.
 */
const StoryWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.wrapper}>{children}</div>
)

const content1: DropdownContent[] = [
  { icon: <PlayCircleOutline />, id: 'learn', text: 'Learn' },
  { icon: <Edit2Outline />, id: 'edit', text: 'Edit' },
  { icon: <Trash />, id: 'delete', text: 'Delete' },
]

export const DropdownWithIcon: Story = {
  args: {
    children: (
      <>
        {content1.map(item => (
          <DropdownItem key={item.id}>
            {item.icon}
            <Typography as={'span'} variant={'caption'}>
              {item.text}
            </Typography>
          </DropdownItem>
        ))}
      </>
    ),
  },
  render: args => {
    return (
      <StoryWrapper>
        <Dropdown {...args} />
      </StoryWrapper>
    )
  },
}

const content2: DropdownContent[] = [
  {
    icon: <img alt={'photo Ivan'} src={Ivan} />,
    id: 'photo_ivan',
    text: (
      <>
        <Typography as={'p'} variant={'subtitle2'}>
          Ivan
        </Typography>
        <Typography as={'p'} color={'var(--color-dark-100)'} variant={'caption'}>
          ortodis@mail.com
        </Typography>
      </>
    ),
  },
  { icon: <PersonOutline />, id: 'profile', text: 'My Profile' },
  { icon: <LogOut />, id: 'sign_out', text: 'Sign Out' },
]

export const DropdownWithAvatar: Story = {
  args: {
    children: (
      <>
        {content2.map((item, i) => (
          <DropdownItem key={i}>
            {item.icon}
            <Typography as={'span'} variant={'caption'}>
              {item.text}
            </Typography>
          </DropdownItem>
        ))}
      </>
    ),
    trigger: <img alt={'avatar'} src={Ivan} />,
  },
  render: args => {
    return (
      <div className={styles.wrapper}>
        <Dropdown {...args} />
      </div>
    )
  },
}
