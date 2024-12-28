'use client'
import { gql, useQuery } from '@apollo/client'

import Section from '@/components/atoms/Section'
import { Grid } from '@/components/organisms/Grid'

import { SimpleAnime } from '../../types/anime.type'

interface Data {
  Page: {
    media: SimpleAnime[]
  }
}

const FAVOURITES_ANIMES = gql`
  query GetFavouritesAnimes {
    Page(perPage: 4) {
      media(sort: FAVOURITES_DESC) {
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
    }
  }
`

export const TopRanking = () => {
  const { data, loading, error } = useQuery<Data>(FAVOURITES_ANIMES)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  const animes = data?.Page?.media as SimpleAnime[]

  return (
    <Section className="flex w-full flex-col gap-8">
      <h2 className="text-3xl font-bold">Top Ranking</h2>
      <Grid animes={animes} />
    </Section>
  )
}