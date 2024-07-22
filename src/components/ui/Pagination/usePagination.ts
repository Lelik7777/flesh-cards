import { useMemo } from 'react'

const DOTS = '...'

type Props = {
  currentPage: number
  onChangePage: (num: number) => void
  pageSize: number
  siblingCount: number
  totalCount: number
}
type PaginationRange = ('...' | number)[]

/**
 Generates an array of pagination elements.
 *source: www.freecodecamp.org/news/*build-a-custom-pagination-component-in-react/
 @param {Object} props - The props object.
 @param {number} props.totalPageCount - The total number of pages.
 @param {number} props.currentPage - The current page.
 @param {number} [props.siblingCount=1] - The number of siblings (pages) to display on each side of the current page.
 @returns {Array} An array of pagination elements.
 */

export const usePagination = ({
  currentPage,
  onChangePage,
  pageSize,
  siblingCount = 1,
  totalCount,
}: Props) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the getRange [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return getRange(1, totalPageCount)
    }

    /*
    	Calculate left and right sibling index and make sure they are within getRange 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = getRange(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = getRange(totalPageCount - rightItemCount + 1, totalPageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = getRange(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalCount, pageSize, siblingCount, currentPage]) as PaginationRange

  const handlePageChange = (num: number) => {
    if (typeof num === 'number') {
      onChangePage(num)
    }
  }
  const handleClickPrevBtn = () => {
    if (currentPage <= totalCount && currentPage > 1) {
      onChangePage(currentPage - 1)
    }
  }
  const handleClickNextBtn = () => {
    if (currentPage < totalCount && currentPage >= 1) {
      onChangePage(currentPage + 1)
    }
  }

  return {
    handleClickNextBtn,
    handleClickPrevBtn,
    handlePageChange,
    paginationRange,
  }
}

function getRange(start: number, end: number) {
  const length = end - start + 1

  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start)
}