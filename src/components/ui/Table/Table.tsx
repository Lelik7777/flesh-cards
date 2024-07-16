import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import styles from './Table.module.scss'

type PropsTable = {} & ComponentPropsWithoutRef<'table'>
export const Table = forwardRef<HTMLTableElement, PropsTable>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      table: styles.table,
    }

    return (
      <table aria-label={'Table'} className={clsx(classNames.table)} ref={ref} {...rest}>
        {children}
      </table>
    )
  }
)

type PropsTableHead = {} & ComponentPropsWithoutRef<'thead'>
export const TableHead = forwardRef<ElementRef<'thead'>, PropsTableHead>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      thead: styles.thead,
    }

    return (
      <thead aria-label={'Table header'} className={clsx(classNames.thead)} ref={ref} {...rest} />
    )
  }
)

type PropsTableHeadCell = { arrowDown?: boolean } & ComponentPropsWithoutRef<'th'>
export const TableHeadCell = forwardRef<ElementRef<'th'>, PropsTableHeadCell>(
  ({ arrowDown, children, className, ...rest }, ref) => {
    const classNames = {
      arrowDown: styles.arrowDown,
      headCell: styles.headCell,
    }

    return (
      <th
        aria-label={children?.toString()}
        className={clsx(classNames.headCell, arrowDown && classNames.arrowDown)}
        ref={ref}
        {...rest}
      >
        <span>{children}</span>
      </th>
    )
  }
)

type PropsTableBody = {} & ComponentPropsWithoutRef<'tbody'>
export const TableBody = forwardRef<ElementRef<'tbody'>, PropsTableBody>(({ ...rest }, ref) => {
  return <tbody aria-label={'Table body'} ref={ref} {...rest} />
})

type PropsTableRow = {} & ComponentPropsWithoutRef<'tr'>
export const TableRow = forwardRef<HTMLTableRowElement, PropsTableRow>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      trow: styles.trow,
    }

    return <tr className={clsx(classNames.trow)} ref={ref} {...rest} />
  }
)

type PropsTableCell = {} & ComponentPropsWithoutRef<'td'>
export const TableCell = forwardRef<HTMLTableCellElement, PropsTableCell>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      tcell: styles.tcell,
    }

    return (
      <td aria-label={children?.toString()} className={clsx(classNames.tcell)} ref={ref} {...rest}>
        <span>{children}</span>
      </td>
    )
  }
)
