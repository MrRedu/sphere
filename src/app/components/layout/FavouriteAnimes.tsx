'use client'
import { gql, useQuery } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Section from '@/components/atoms/Section'
import { Pagination } from '@/components/organisms/ui/Pagination'
import { usePagination } from '@/hooks/usePagination'

import Gallery from '../../components/organisms/Gallery'
import { useFavouriteAnimes } from '../../stores/animes/favourite-animes.store'

const GET_MY_FAVOURITE_ANIMES = gql`
  query GetMyFavouriteAnimes($ids: [Int], $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(id_in: $ids, type: ANIME) {
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

export const FavouriteAnimes = () => {
  const favouriteAnimes = useFavouriteAnimes(state => state.favouriteAnimes)
  const [animeData, setAnimeData] = useState([])
  const perPage = 9 // Número de animes por página
  const [totalPages, setTotalPages] = useState(0)
  const { currentPage, setCurrentPage, getPaginationRange } =
    usePagination(totalPages)

  const { data, loading, error } = useQuery(GET_MY_FAVOURITE_ANIMES, {
    variables: { ids: favouriteAnimes, page: currentPage, perPage },
    skip: favouriteAnimes.length === 0,
  })

  useEffect(() => {
    if (data) {
      setAnimeData(data.Page.media)
      setTotalPages(Math.ceil(favouriteAnimes.length / perPage))
    }
  }, [data, favouriteAnimes])

  const paginationRange = getPaginationRange()

  if (loading) return <div className="h-screen w-screen animate-pulse" />
  if (error) return <p>Error: {error.message}</p>

  return (
    <Section className="flex w-full flex-col gap-8 py-16">
      {favouriteAnimes.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-8 py-12 md:flex-row md:gap-32">
          <div className="w-full max-w-[400px]">
            <p className="mb-4 text-3xl font-bold">
              {`You don't have any favourite animes yet.`}
            </p>
            <p className="mb-4 text-2xl font-semibold">Start adding some!</p>
            {/* <Link href="/">Search for animes</Link> */}
          </div>
          <Image
            src="/box.svg"
            alt="Box"
            width={100}
            height={100}
            className="w-full max-w-[300px] object-cover"
          />
        </div>
      )}
      {favouriteAnimes.length > 0 && (
        <>
          <h2 className="text-3xl font-bold">My Favourite Animes</h2>
          <Gallery animes={animeData} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            paginationRange={paginationRange}
          />
        </>
      )}
    </Section>
  )
}
