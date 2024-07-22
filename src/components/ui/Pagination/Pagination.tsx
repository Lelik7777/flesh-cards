import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { ArrowIosBack, ArrowIosForward } from '@/assets'
import { clsx } from 'clsx'

import styles from './Pagination.module.scss'

import { Typography } from '../Typography'
import { usePagination } from './usePagination'

type PaginationProps = {
  children?: ReactNode
  currentPage: number
  onChangePage: (num: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
} & ComponentPropsWithoutRef<'div'>
export const Pagination = ({
  children,
  currentPage,
  onChangePage,
  pageSize,
  siblingCount = 1,
  totalCount,
}: PaginationProps) => {
  const classNames = { container: styles.container, root: styles.root }
  const { handleClickNextBtn, handleClickPrevBtn, handlePageChange, paginationRange } =
    usePagination({ currentPage, onChangePage, pageSize, siblingCount, totalCount })

  const disabledPrevBtn = currentPage < 2
  const disabledNextBtn = currentPage > totalCount - 1

  const mainButtons = paginationRange.map((pageLocal, i) => {
    const isSelected = currentPage === pageLocal

    return (
      <PaginationButton
        isSelected={isSelected}
        key={i}
        onClick={() => handlePageChange(pageLocal as number)}
      >
        <Typography as={'span'} variant={'body2'}>
          {pageLocal}
        </Typography>
      </PaginationButton>
    )
  })

  return (
    <div className={clsx(classNames.root)}>
      <PaginationButton disabled={disabledPrevBtn} onClick={() => handleClickPrevBtn()}>
        <ArrowIosBack />
      </PaginationButton>
      <div className={clsx(classNames.container)}>
        {mainButtons}
        <PaginationButton
          disabled={disabledNextBtn}
          onClick={() => {
            handleClickNextBtn()
          }}
        >
          <ArrowIosForward />
        </PaginationButton>
      </div>
      {children}
    </div>
  )
}

type PaginationButtonProps = {
  disabled?: boolean
  isSelected?: boolean
  onClick?: () => void
} & ComponentPropsWithoutRef<'button'>
const PaginationButton = ({ children, disabled, isSelected, onClick }: PaginationButtonProps) => {
  const classNames = {
    btn: clsx(styles.btn, isSelected && styles.selected, disabled && styles.disabled),
  }

  return (
    <button
      className={clsx(classNames.btn)}
      disabled={disabled}
      onClick={onClick}
      tabIndex={0}
      type={'button'}
    >
      {children}
    </button>
  )
}

type SelectContainerProps = {
  children: ReactNode
  content: string[]
}
export const SelectContainer = ({ children, content }: SelectContainerProps) => {
  const classNames = {
    select: styles.select,
  }

  return (
    <div className={clsx(classNames.select)}>
      <Typography as={'span'} variant={'body2'}>
        {content[0]}
      </Typography>
      <div>{children}</div>
      <Typography as={'span'} variant={'body2'}>
        {content[1]}
      </Typography>
    </div>
  )
}
