'use client'

import { gql, useQuery } from '@apollo/client'
import { Suspense, useEffect, useState } from 'react'

import Section from '@/components/atoms/Section'
import Gallery from '@/components/organisms/Gallery'
import { Pagination } from '@/components/organisms/ui/Pagination'
import { usePagination } from '@/hooks/usePagination'

import { SimpleAnime } from '../../types/anime.type'

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

const GET_ANIMES_BY_GENRE = gql`
  query GetAnimesByGenre($genre: String!, $perPage: Int, $page: Int) {
    Page(perPage: $perPage, page: $page) {
      media(genre: $genre, sort: POPULARITY_DESC) {
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

export const GenreGallery = ({ genre }: { genre: string }) => {
  const perPage = 9
  const [totalPages, setTotalPages] = useState<number>(0)
  const { currentPage, setCurrentPage, getPaginationRange } =
    usePagination(totalPages)

  const { data, loading, error } = useQuery<Data>(GET_ANIMES_BY_GENRE, {
    variables: { genre, page: currentPage, perPage },
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
      <h2 className="text-3xl font-bold">{genre}</h2>
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
