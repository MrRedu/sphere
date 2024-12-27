import { useState } from 'react'

export const usePagination = (totalPages: number) => {
  const [currentPage, setCurrentPage] = useState(1)

  const getPaginationRange = (): (number | '...')[] => {
    const pages: (number | '...')[] = []

    if (totalPages <= 0) return pages // Retorna vacío si no hay páginas

    pages.push(1) // Siempre incluir la primera página

    if (currentPage > 3) {
      pages.push(currentPage - 2)
      pages.push(currentPage - 1)
    }

    pages.push(currentPage) // Siempre incluir la página actual

    if (currentPage < totalPages - 2) {
      pages.push(currentPage + 1)
      pages.push(currentPage + 2)
    }

    if (currentPage < totalPages - 3) {
      pages.push('...')
    }

    if (!pages.includes(totalPages)) {
      pages.push(totalPages) // Asegurarse de incluir la última página
    }

    return Array.from(new Set(pages)) // Remover duplicados
  }

  return { currentPage, setCurrentPage, getPaginationRange }
}
