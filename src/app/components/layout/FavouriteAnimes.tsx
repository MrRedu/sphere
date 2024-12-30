'use client'
import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

import Section from '@/components/atoms/Section'
import { FavouriteAnimesEmptyState } from '@/components/atoms/skeletons/FavouriteAnimesEmptyState'
import { GallerySkeleton } from '@/components/atoms/skeletons/GallerySkeleton'
import Gallery from '@/components/organisms/Gallery'
import { Filters } from '@/components/organisms/ui/Filters'
import { Pagination } from '@/components/organisms/ui/Pagination'
import { usePagination } from '@/hooks/usePagination'
import { useFavouriteAnimes } from '@/stores/animes/favourite-animes.store'

import { SimpleAnime } from '../../types/anime.type'

const GET_MY_FAVOURITE_ANIMES = gql`
  query GetMyFavouriteAnimes($ids: [Int], $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(id_in: $ids) {
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
        status
        averageScore
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
  const perPage = 9
  const favouriteAnimes = useFavouriteAnimes(state => state.favouriteAnimes)
  const [totalPages, setTotalPages] = useState(0)
  const [animeData, setAnimeData] = useState<SimpleAnime[]>([])
  const [filteredAnimeData, setFilteredAnimeData] = useState<SimpleAnime[]>([])
  const [filters, setFilters] = useState({
    mediaGenre2: '',
    status: '',
    sort: 'SCORE_DESC',
    search: '',
  })

  const { currentPage, setCurrentPage, getPaginationRange } =
    usePagination(totalPages)

  const { data, loading, error } = useQuery(GET_MY_FAVOURITE_ANIMES, {
    variables: { ids: favouriteAnimes, page: currentPage, perPage },
    skip: favouriteAnimes.length === 0,
  })

  const animes = data?.Page?.media as SimpleAnime[]

  const paginationRange = getPaginationRange()

  useEffect(() => {
    if (animes) {
      setAnimeData(animes)
      setTotalPages(Math.ceil(favouriteAnimes.length / perPage))
    }
  }, [animes, favouriteAnimes])

  // Efecto para aplicar filtros
  useEffect(() => {
    let filteredData: SimpleAnime[] = [...animeData]

    // Aplicar filtros
    if (filters.mediaGenre2) {
      filteredData = filteredData.filter(anime =>
        anime.genres.includes(filters.mediaGenre2)
      )
    }

    if (filters.status) {
      filteredData = filteredData.filter(
        anime => anime.status === filters.status
      )
    }

    // Ordenar según el filtro seleccionado
    if (filters.sort) {
      filteredData.sort((a, b) => {
        if (filters.sort === 'SCORE_DESC') {
          return (b.averageScore || 0) - (a.averageScore || 0) // Orden descendente
        } else if (filters.sort === 'SCORE') {
          return (a.averageScore || 0) - (b.averageScore || 0) // Orden ascendente
        }
        return 0 // Sin cambio si no hay un filtro válido
      })
    }

    // Filtrar por búsqueda
    if (filters.search.length >= 3) {
      filteredData = filteredData.filter(anime =>
        anime.title.english.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    // Actualizar datos filtrados y total de páginas
    setFilteredAnimeData(filteredData)

    // Calcular totalPages basado en filteredAnimeData
    setTotalPages(Math.ceil(filteredData.length / perPage))

    // Reset a la primera página si cambian los filtros
    setCurrentPage(1)
  }, [animeData, filters, setCurrentPage])

  // if (loading) return <div className="h-screen w-screen animate-pulse" />
  // if (error) return <p>Error: {error.message}</p>

  return (
    <Section className="flex w-full flex-col gap-8 py-16">
      {favouriteAnimes.length === 0 && <FavouriteAnimesEmptyState />}
      {favouriteAnimes.length > 0 && (
        <>
          <h2 className="text-3xl font-bold">My Favourite Animes</h2>
          <Filters filters={filters} onFilterChange={setFilters} />
          {loading || error ? (
            <GallerySkeleton />
          ) : (
            <Gallery animes={filteredAnimeData} />
          )}
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
