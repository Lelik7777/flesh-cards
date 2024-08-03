import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import styles from './Slider.module.scss'

import { Slider } from './Slider'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    step: 1,
    value: [20, 80],
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default usage of the Slider component.',
      },
    },
  },
  render: () => {
    return (
      <div className={styles.wrapper}>
        <Slider />
      </div>
    )
  },
}
export const ControlledSlider: Story = {
  args: {
    step: 1,
  },
  render: args => {
    const [value, setValue] = useState([15, 60])
    const handleOnChangeValue = (newValue: number[]) => {
      setValue(newValue)
    }

    return (
      <div className={styles.wrapper}>
        <Slider {...args} onValueChange={handleOnChangeValue} value={value} />
      </div>
    )
  },
}
