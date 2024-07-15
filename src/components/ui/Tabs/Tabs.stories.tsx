import type { Meta, StoryObj } from '@storybook/react'

import { TabContent, Tabs } from './Tabs'

const meta = {
  args: {
    children: (
      <>
        <TabContent value={'one'}>content one</TabContent>
        <TabContent value={'two'}>content two</TabContent>
        <TabContent value={'three'}>content three</TabContent>
      </>
    ),
    defaultValue: 'one',
    tabs: [
      { id: '0', title: 'one', value: 'one' },
      { id: '1', title: 'two', value: 'two' },
      { id: '2', title: 'three', value: 'three' },
    ],
  },
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTabs: Story = {}

export const DisabledTabs: Story = {
  args: {
    tabs: [
      { id: '0', title: 'one', value: 'one' },
      { id: '1', title: 'two', value: 'two' },
      { disabled: true, id: '2', title: 'three', value: 'three' },
    ],
  },
}
