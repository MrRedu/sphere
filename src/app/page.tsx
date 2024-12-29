import { ApolloError, gql } from '@apollo/client'

import { SimpleGallery } from '@/components/layout/SimpleGallery'
import { TopRanking } from '@/components/layout/TopRanking'
import { HeroSection } from '@/components/organisms/HeroSection'

import { getClient } from './lib/client'
import { SimpleAnime } from './types/anime.type'

const POPULAR_ANIMES = gql`
  query GetPopularAnimes {
    Page(perPage: 20) {
      media(sort: POPULARITY_DESC) {
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

async function loadData() {
  try {
    const { data } = await getClient().query({ query: POPULAR_ANIMES })
    return data
  } catch (error) {
    // Afirmar que el error es un ApolloError
    const apolloError = error as ApolloError

    // Verificamos si hay un error de red
    const networkError = apolloError.networkError

    if (networkError && 'statusCode' in networkError) {
      const statusCode = networkError.statusCode // Acceso directo al statusCode

      if (statusCode === 429) {
        console.error(
          'Demasiadas solicitudes o error del servidor. Intenta más tarde.'
        )
        console.log(networkError)
        return { Page: { media: [] } }
      }
    }

    throw apolloError
  }
}

export default async function HomePage() {
  const data = await loadData()
  const animes = data.Page.media as SimpleAnime[]

  return (
    <>
      <HeroSection animes={animes} />
      <TopRanking />
      <SimpleGallery />
    </>
  )
}
