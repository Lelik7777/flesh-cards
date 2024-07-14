import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './Checkbox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: true,
    label: 'checked checkbox',
  },
}
export const UnChecked: Story = {
  args: {
    checked: false,
    label: 'unchecked checkbox',
  },
}
export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'disabled checkbox',
  },
}
export const ControlCheckbox: Story = {
  args: {
    label: 'controlled  checkbox',
  },
  render: args => {
    const [checked, setChecked] = useState(false)

    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}
