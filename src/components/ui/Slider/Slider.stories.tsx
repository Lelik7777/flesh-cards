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
  args: {},
  render: () => {
    return (
      <div className={styles.wrapper}>
        <Slider />
      </div>
    )
  },
}
export const ControlledSlider: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState([15, 60])
    const handleOnChangeValue = (e: number[]) => {
      setValue(e)
    }

    return (
      <div className={styles.wrapper}>
        <Slider onValueChange={handleOnChangeValue} value={value} />
      </div>
    )
  },
}
