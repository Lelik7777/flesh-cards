import type { Meta, StoryObj } from '@storybook/react'

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

const content1 = [
  { icon: <PlayCircleOutline />, text: 'Learn' },
  { icon: <Edit2Outline />, text: 'Edit' },
  { icon: <Trash />, text: 'Delete' },
]

export const DropdownWithIcon: Story = {
  args: {
    children: (
      <>
        {content1.map((item, i) => (
          <DropdownItem key={i}>
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
      <div className={styles.wrapper}>
        <Dropdown {...args} />
      </div>
    )
  },
}

const content2 = [
  {
    icon: <img alt={'photo Ivan'} src={Ivan} />,
    text: (
      <>
        <Typography as={'p'} variant={'subtitle2'}>
          Ivan
        </Typography>
        <Typography as={'p'} style={{ color: `#808080` }} variant={'caption'}>
          ortodis@mail.com
        </Typography>
      </>
    ),
  },
  { icon: <PersonOutline />, text: 'My Profile' },
  { icon: <LogOut />, text: 'Sign Out' },
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
