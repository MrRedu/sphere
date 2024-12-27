'use client'
import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

import Section from '@/components/atoms/Section'
import { SimpleAnime } from '../../types/anime.type'
import { usePagination } from '@/hooks/usePagination'
import { Gallery } from '../organisms/Gallery'
import { Pagination } from '../organisms/ui/Pagination'

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
  query GetAnimes($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media {
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
  const { currentPage, setCurrentPage, getPaginationRange } =
    usePagination(totalPages)

  const { data, loading, error } = useQuery<Data>(ANIMES, {
    variables: { page: currentPage, perPage },
  })

  useEffect(() => {
    if (data) {
      setTotalPages(data.Page.pageInfo.lastPage)
    }
  }, [data])

  if (loading) return <div className="h-screen w-screen animate-pulse" />
  if (error) return <p>Error: {error.message}</p>

  const animes = data?.Page?.media as SimpleAnime[]
  const paginationRange = getPaginationRange()

  return (
    <Section className="flex w-full flex-col gap-8 py-16">
      <Gallery animes={animes} />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationRange={paginationRange}
      />
    </Section>
  )
}
