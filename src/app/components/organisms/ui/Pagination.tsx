import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/molecules/ui/Button'

interface PaginationProps {
  totalPages: number
  currentPage: number
  setCurrentPage: (page: number) => void
  paginationRange: (number | string)[]
}

/**
 * A pagination component that displays a range of pages and allows the user to navigate between them.
 *
 * The component takes the following props:
 *
 * - `totalPages`: The total number of pages.
 * - `currentPage`: The current page number.
 * - `setCurrentPage`: A function to set the current page number.
 * - `paginationRange`: An array of numbers or strings that represent the range of pages to display.
 *
 * The component renders a range of pages as buttons, with the current page highlighted.
 * It also renders a "Previous" and "Next" button that allow the user to navigate between pages.
 */
export const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  paginationRange,
}: PaginationProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-4 font-bold">
      <Button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`transition-colors duration-300 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        <ChevronLeft />
        <span className="hidden lg:block">Previous</span>
      </Button>

      {paginationRange.map(pg => (
        <div key={pg}>
          {pg === '...' ? (
            <span className="mx-2 text-gray-300">...</span>
          ) : (
            <Button
              onClick={() => setCurrentPage(pg as number)}
              className={`${pg === currentPage ? 'bg-light text-dark hover:text-light' : ''}`}
            >
              {pg}
            </Button>
          )}
        </div>
      ))}

      <Button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`transition-colors duration-300 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        <span className="hidden lg:block">Next</span>
        <ChevronRight />
      </Button>
    </div>
  )
}
