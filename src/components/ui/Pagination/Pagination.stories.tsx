import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Option, Select } from '../Select'
import { Pagination, SelectContainer } from './Pagination'

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

export const PaginationWithSelect: Story = {
  render: args => {
    const [page, setPage] = useState(1)
    const [option, setOption] = useState('10')
    const handlePageChange = (num: number) => {
      setPage(num)
    }
    const options: Option[] = [
      { id: 0, title: '10', value: '10' },
      { id: 1, title: '20', value: '20' },
      { id: 2, title: '30', value: '30' },
      { id: 3, title: '50', value: '50' },
      { id: 4, title: '100', value: '100' },
    ]

    return (
      <Pagination
        currentPage={page}
        onChangePage={handlePageChange}
        pageSize={args.pageSize}
        totalCount={args.totalCount}
      >
        <SelectContainer content={['Показать', 'на странице']}>
          <Select onChangeValue={setOption} options={options} value={option} />
        </SelectContainer>
      </Pagination>
    )
  },
}
