/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import styles from './Select.module.scss'

import { Option, Select } from './Select'

const options: Option[] = [
  { id: 0, title: 'box0', value: 'box0' },
  { id: 1, title: 'box1', value: 'box1' },
  { id: 2, title: 'box2', value: 'box2' },
  { id: 3, title: 'box3', value: 'box3' },
  { id: 4, title: 'box4', value: 'box4' },
  { id: 5, title: 'box5', value: 'box5' },
]

const meta = {
  args: {
    options: [{ id: 0, title: 'box0', value: 'box0' }],
    placeholder: 'Select-box',
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectDemo: Story = {
  args: {
    onChangeValue: value => console.log('Selected value:', value),
    options: options,
    placeholder: 'Select-box',
    value: options[0].value,
  },
  render: () => {
    const [value, setValue] = useState(options[0].value)

    return (
      <div className={styles.wrapper}>
        <Select onChangeValue={setValue} options={options} value={value} />
      </div>
    )
  },
}

export const DisabledSelect: Story = {
  args: {
    onChangeValue: value => console.log('Selected value:', value),
    options: options,
    placeholder: 'Select-box',
    value: options[0].value,
  },
  render: () => {
    const [value, setValue] = useState(options[0].value)

    return <Select disabled onChangeValue={setValue} options={options} value={value} />
  },
}
