import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/molecules/ui/Button'

interface PaginationProps {
  totalPages: number
  currentPage: number
  setCurrentPage: (page: number) => void
  paginationRange: (number | string)[]
}

export const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  paginationRange,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-4 font-bold">
      <Button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`transition-colors duration-300 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        <ChevronLeft />
        Previous
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
        Next
        <ChevronRight />
      </Button>
    </div>
  )
}
