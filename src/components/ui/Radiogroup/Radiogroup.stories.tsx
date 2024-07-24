import type { Meta, StoryObj } from '@storybook/react'

import { Radiogroup } from './Radiogroup'

const meta = {
  component: Radiogroup,
  tags: ['autodocs'],
  title: 'Components/Radiogroup',
} satisfies Meta<typeof Radiogroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
