import type { Meta, StoryObj } from '@storybook/react'

import { ComponentProps } from 'react'

//import { RadioGroupItem, RadioItem, Radiogroup } from './Radiogroup'

import { Radio, RadioGroup } from './Radiogroup'
const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Represents a single radio button item.
 */

type RadioItem = {
  id: string

  label: string

  value: string
}

const items: RadioItem[] = [
  { id: '0', label: 'radiogroup', value: 'radiogroup0' },
  { id: '1', label: 'radiogroup', value: 'radiogroup1' },
  { id: '2', label: 'radiogroup', value: 'radiogroup2' },
  { id: '3', label: 'radiogroup', value: 'radiogroup3' },
  { id: '4', label: 'radiogroup', value: 'radiogroup4' },
]

type RadioGroupProps = ComponentProps<typeof RadioGroup>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This is the default usage of the RadioGroup component.',
      },
    },
  },
  render: () => {
    return (
      <RadioGroup>
        {items.map(item => (
          <Radio id={item.id} key={item.id} label={item.label} value={item.value} />
        ))}
      </RadioGroup>
    )
  },
}
export const DisabledRadioGroup: Story = {
  args: {
    disabled: true,
    name: 'disabled-radio-group',
  } as RadioGroupProps,
  render: args => {
    return (
      <RadioGroup {...args}>
        {items.map(item => (
          <Radio id={item.id} key={item.id} label={item.label} value={item.value} />
        ))}
      </RadioGroup>
    )
  },
}

export const PreselectedRadio: Story = {
  args: {
    defaultValue: 'radiogroup2',
  } as RadioGroupProps,
  render: args => {
    return (
      <RadioGroup {...args}>
        {items.map(item => (
          <Radio id={item.id} key={item.id} label={item.label} value={item.value} />
        ))}
      </RadioGroup>
    )
  },
}
