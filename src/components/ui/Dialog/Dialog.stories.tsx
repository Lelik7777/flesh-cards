import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../Checkbox'
import { Select } from '../Select'
import { TextField } from '../TextField'
import { Typography } from '../Typography'
import { Dialog } from './Dialog'

const meta = {
  args: {
    headerTitle: 'title',
    triggerTitle: 'open modal',
  },
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Typography variant={'body1'}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, numquam recusandae
        pariatur eius distinctio perferendis sequi quo eaque. Saepe amet obcaecati et nobis ducimus
        id nulla quisquam pariatur! Eos, sunt.
      </Typography>
    ),
  },
}
export const Default2: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <Typography color={'#808080'} variant={'body2'}>
            Select
          </Typography>

          <Select onChangeValue={() => {}} options={[]} placeholder={'select-box'} value={''} />
        </div>
        <div>
          <Typography color={'#808080'} variant={'body2'}>
            Input
          </Typography>
          <TextField />
        </div>
        <div>
          <Typography color={'#808080'} variant={'body2'}>
            Input
          </Typography>
          <TextField />
        </div>

        <Checkbox checked label={'checkbox'} />
      </div>
    ),
    footer: 'footer2',
    header: 'header2',
  },
}
