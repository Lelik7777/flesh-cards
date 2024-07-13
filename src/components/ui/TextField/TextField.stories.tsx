import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'

const meta = {
  argTypes: {},
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'default',
    type: 'text',
  },
}
export const Password: Story = {
  args: {
    label: 'Input',
    placeholder: 'Password',
    type: 'password',
  },
}
export const Search: Story = {
  args: {
    label: 'Input',
    placeholder: 'Search',
    type: 'search',
  },
}
export const Error: Story = {
  args: {
    error: 'some error',
    label: 'Error',
    placeholder: 'Error',
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
    placeholder: 'Disabled',
  },
}
