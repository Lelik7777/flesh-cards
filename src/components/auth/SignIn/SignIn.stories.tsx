import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { SignIn } from './SignIn'

const meta: Meta<typeof SignIn> = {
  args: {
    onSubmit: (data: any) => {
      alert(JSON.stringify(data))
    },
  },
  component: SignIn,
  tags: ['autodocs'],
  title: 'Components/SignIn',
}

export default meta

type Story = StoryObj<typeof meta>

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: 'var(--color-dark-900)',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
    }}
  >
    {children}
  </div>
)

export const Default: Story = {
  args: {},
  render: args => (
    <Wrapper>
      <SignIn {...args} />
    </Wrapper>
  ),
}
