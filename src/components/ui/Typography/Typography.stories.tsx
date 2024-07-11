import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    children: 'h1',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'h2',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'h3',
    variant: 'h3',
  },
}
export const H4: Story = {
  args: {
    children: 'h4',
    variant: 'h4',
  },
}
export const Body1: Story = {
  args: {
    children: 'body1',
    variant: 'body1',
  },
}
export const Body2: Story = {
  args: {
    children: 'body2',
    variant: 'body2',
  },
}
export const Subtitle1: Story = {
  args: {
    children: 'subtitle1',
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'subtitle2',
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    children: 'caption',
    variant: 'caption',
  },
}
export const Overline: Story = {
  args: {
    children: 'overline',
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    children: 'link1: google',
    href: 'www.google.com',
    onClick: () => window.open('http://www.google.com', '_blank'),
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    children: 'link2: yandex',
    href: 'www.yandex.ru',
    onClick: () => window.open('http://www.yandex.ru', '_blank'),
    variant: 'link2',
  },
}
export const Error: Story = {
  args: {
    children: 'error',
    variant: 'error',
  },
}
