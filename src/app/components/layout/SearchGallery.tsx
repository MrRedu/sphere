'use client'
import { gql, useQuery } from '@apollo/client'
import { Suspense, useEffect, useState } from 'react'

import Section from '@/components/atoms/Section'
import Gallery from '@/components/organisms/Gallery'
import { SimpleAnime } from '#/src/app/types/anime.type'

import { usePagination } from '@/hooks/usePagination'
import { AnimatedGroup } from '@/components/atoms/ui/AnimatedGroup'
import { Pagination } from '@/components/organisms/ui/Pagination'

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

const GET_ANIMES_BY_QUERY = gql`
  query GetAnimesByQuery($search: String, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search, sort: POPULARITY_DESC) {
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

export const SearchGallery = ({ query }: { query: string }) => {
  const perPage = 9
  const [totalPages, setTotalPages] = useState<number>(0)
  const { currentPage, setCurrentPage, getPaginationRange } =
    usePagination(totalPages)

  const { data, loading, error } = useQuery<Data>(GET_ANIMES_BY_QUERY, {
    variables: { search: query, page: currentPage, perPage },
  })

  useEffect(() => {
    if (data) {
      setTotalPages(data.Page.pageInfo.lastPage)
    }
  }, [data])

  const animes = data?.Page?.media as SimpleAnime[]
  const paginationRange = getPaginationRange()

  console.log(animes, loading, animes)

  return (
    <Section className="flex w-full flex-col gap-8 py-16">
      <h2 className="text-3xl font-bold">{query}</h2>
      {animes && !error && !loading ? (
        <>
          <Suspense fallback={<div>Loading Gallery...</div>}>
            <Gallery animes={animes} />
          </Suspense>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            paginationRange={paginationRange}
          />
        </>
      ) : (
        <AnimatedGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-[200px] bg-red-600" />
          <div className="h-[200px] bg-red-600" />
          <div className="h-[200px] bg-red-600" />
          <div className="h-[200px] bg-red-600" />
          <div className="h-[200px] bg-red-600" />
          <div className="h-[200px] bg-red-600" />
          <div className="h-[200px] bg-red-600" />
          <div className="h-[200px] bg-red-600" />
          <div className="h-[200px] bg-red-600" />
        </AnimatedGroup>
      )}
    </Section>
  )
}
