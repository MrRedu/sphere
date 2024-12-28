'use client'
import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

import Section from '@/components/atoms/Section'
import { Gallery } from '@/components/organisms/Gallery'
import { GenreList } from '@/components/organisms/GenreList'
import { Pagination } from '@/components/organisms/ui/Pagination'
import { usePagination } from '@/hooks/usePagination'

import { SimpleAnime } from '../../types/anime.type'

/**
 * A simple gallery component that fetches a list of animes from the Anilist API
 * and displays them in a grid. The component also includes a pagination control
 * that allows the user to navigate through the list of animes.
 *
 * @remarks
 * The component uses the `useQuery` hook from `@apollo/client` to fetch the list
 * of animes from the Anilist API. The component also uses the `usePagination`
 * hook to manage the pagination state.
 *
 * @returns A JSX element representing the gallery component.
 */

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
      <h2 className="text-3xl font-bold">All Animes</h2>
      <GenreList />
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
