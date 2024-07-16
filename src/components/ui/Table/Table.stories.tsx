import type { Meta, StoryObj } from '@storybook/react'

import { ArrowIosUp, Edit2Outline, PlayCircleOutline, Star, StarOutline } from '@/assets'
import img from '@/assets/images/Снимок экрана 2023-06-14 в 18.23 1.png'

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from './Table'

const meta = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell arrowDown>
              Name
              <ArrowIosUp />
            </TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <img alt={'screen display'} src={img} />
              Name
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>
              <Star fill={'var(--color-warning-300)'} />
              <Star fill={'var(--color-warning-300)'} />
              <Star fill={'var(--color-warning-300)'} />
              <Star fill={'var(--color-warning-300)'} />
              <StarOutline fill={'var(--color-warning-300)'} />
            </TableCell>
            <TableCell>
              <PlayCircleOutline />
              <Edit2Outline />
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTable: Story = {
  args: {},
}
