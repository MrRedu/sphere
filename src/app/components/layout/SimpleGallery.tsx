'use client'
import { gql, useQuery } from '@apollo/client'
import { lazy, Suspense, useEffect, useState } from 'react'

import Section from '@/components/atoms/Section'
import { Filters } from '@/components/organisms/ui/Filters'
import { Pagination } from '@/components/organisms/ui/Pagination'
import { usePagination } from '@/hooks/usePagination'

import { SimpleAnime } from '../../types/anime.type'

const Gallery = lazy(() => import('@/components/organisms/Gallery'))

interface Data {
  Page: {
    media: SimpleAnime[]
    pageInfo: {
      total: number
      currentPage: number
      lastPage: number
    }
  }
}

const ANIMES = gql`
  query GetAnimes(
    $page: Int
    $perPage: Int
    $mediaGenre2: String
    $status: MediaStatus
    $sort: [MediaSort]
    $search: String
  ) {
    Page(page: $page, perPage: $perPage) {
      media(
        genre: $mediaGenre2
        status: $status
        sort: $sort
        search: $search
      ) {
        id
        title {
          english
          native
        }
        bannerImage
        coverImage {
          medium
          large
          color
        }
        genres
      }
      pageInfo {
        total
        currentPage
        lastPage
      }
    }
  }
`
export const SimpleGallery = () => {
  const perPage = 9
  const [totalPages, setTotalPages] = useState(0)
  const [filters, setFilters] = useState({
    mediaGenre2: '',
    status: '',
    sort: 'SCORE_DESC',
    search: '',
  })
  const { currentPage, setCurrentPage, getPaginationRange } =
    usePagination(totalPages)

  const { data, loading, error } = useQuery<Data>(ANIMES, {
    variables: {
      page: currentPage,
      perPage,
      mediaGenre2: filters.mediaGenre2 || undefined,
      status: filters.status || undefined,
      sort: filters.sort,
      search: filters.search.length >= 3 ? filters.search : undefined,
    },
    skip: !currentPage,
  })

  useEffect(() => {
    if (data) {
      setTotalPages(data.Page.pageInfo.lastPage)
    }
  }, [data])

  if (loading)
    return <div className="h-[400px] w-full animate-pulse bg-red-500" />

  if (error) return <p>Error: {error.message}</p>

  const animes = data?.Page?.media as SimpleAnime[]
  const paginationRange = getPaginationRange()

  return (
    <Section className="flex w-full flex-col gap-8 py-16">
      <h2 className="text-3xl font-bold">All Animes</h2>
      <Filters filters={filters} onFilterChange={setFilters} />
      <Suspense fallback={<div>Loading Gallery...</div>}>
        <Gallery animes={animes} />
      </Suspense>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationRange={paginationRange}
      />
    </Section>
  )
}
