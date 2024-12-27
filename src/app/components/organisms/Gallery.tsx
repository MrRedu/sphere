'use client'
import { gql, useQuery } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Section from '@/components/atoms/Section'
import { SimpleAnime } from '../../types/anime.type'
import { AnimatedGroup } from '../atoms/ui/AnimatedGroup'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../molecules/ui/Button'
import { usePagination } from '@/hooks/usePagination'

/**
 * A Gallery component that displays a list of animes in a grid.
 * The list is paginated and the user can navigate between pages.
 * The component also displays a pagination bar at the bottom.
 *
 * @example
 * <Gallery />
 *
 * @returns {JSX.Element} A JSX element representing the gallery component.
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

export const Gallery = () => {
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
      <AnimatedGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {animes?.map(anime => (
          <Link
            key={anime.id}
            href={`/anime/${anime.id}/${anime.title.english || anime.title.native}`}
            className="relative flex h-[220px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-sm bg-dark/70 p-4 transition-colors duration-500 ease-in-out lg:bg-transparent lg:hover:bg-dark/70"
          >
            <Image
              src={anime.bannerImage || 'https://via.placeholder.com/300x450'}
              alt={`Poster ${anime.title.english || anime.title.native || 'Unknown'}`}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
              width={1280}
              height={763}
            />
            <p className="text-sm">{anime.genres.join(', ')}</p>
            <h2 className="text-lg font-bold">
              {anime.title.english || anime.title.native || 'Unknown'}
            </h2>
          </Link>
        ))}
      </AnimatedGroup>

      {/* Pagination */}
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
    </Section>
  )
}
