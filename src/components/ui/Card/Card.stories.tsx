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
    children: (
      <Typography variant={'body1'}>
        =Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia sed, sint earum vero
        placeat est esse! Esse rem eum eos. Nobis, dignissimos aliquid. Quia eaque eveniet officia
        deserunt. Architecto.
      </Typography>
    ),
    style: {
      alignItems: 'center',
      display: 'flex',
      height: '300px',
      justifyContent: 'center',
      padding: '20px',
      width: '200px',
    },
  },
}
