import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from './Pagination'

const meta = {
  args: {
    currentPage: 1,
    onChangePage: () => {},
    pageSize: 1,
    totalCount: 10,
  },
  component: Pagination,

  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [page, setPage] = useState(1)
    const handlePageChange = (num: number) => {
      setPage(num)
    }

    return (
      <Pagination
        currentPage={page}
        onChangePage={handlePageChange}
        pageSize={args.pageSize}
        totalCount={args.totalCount}
      />
    )
  },
}
