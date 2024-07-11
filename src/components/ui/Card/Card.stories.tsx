import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../Typography'
import { Card } from './Card'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Typography variant={'h1'}>Card</Typography>,
    style: {
      alignItems: 'center',
      display: 'flex',
      height: '300px',
      justifyContent: 'center',
      width: '200px',
    },
  },
}
