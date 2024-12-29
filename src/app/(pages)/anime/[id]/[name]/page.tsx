import { gql } from '@apollo/client'

import { getClient } from '@/lib/client'
import { Anime } from '#/src/app/components/layout/Anime'
import { Anime as AnimeInterface } from '#/src/app/types/anime.type'

const GET_ANIME_BY_ID = gql`
  query GetAnime($id: Int) {
    Media(id: $id) {
      id
      title {
        english
        native
      }
      countryOfOrigin
      description
      genres
      siteUrl
      format
      type
      status
      bannerImage
      coverImage {
        medium
        large
        extraLarge
        color
      }
      averageScore
      updatedAt
      startDate {
        day
        month
        year
      }
      endDate {
        day
        month
        year
      }

      episodes
      duration
      volumes

      trailer {
        id
        site
        thumbnail
      }
      characters {
        nodes {
          id
          name {
            full
            native
            userPreferred
          }
          gender
          age
          isFavourite
          image {
            large
            medium
          }
          siteUrl
        }
      }
    }
  }
`

async function loadData(id: number) {
  const { data } = await getClient().query({
    query: GET_ANIME_BY_ID,
    variables: { id: id },
  })

  return data
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const data = await loadData(Number(id))
  const anime = data.Media as AnimeInterface

  return {
    title: anime.title.english || anime.title.native,
    description: anime.description,
    keywords: [...anime.genres],
    openGraph: {
      description: anime.description,
      url: anime.siteUrl,
      siteName: `${anime.title.english || anime.title.native} | Sphere`,
      images: [
        {
          url: anime.bannerImage || anime.coverImage.large,
          width: 800,
          height: 600,
          alt: `${anime.title.english || anime.title.native} image`,
        },
        {
          url: anime.bannerImage || anime.coverImage.large,
          width: 1800,
          height: 1600,
          alt: `${anime.title.english || anime.title.native} image`,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
  }
}

export default async function AnimePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const data = await loadData(Number(id))
  const anime = data.Media as AnimeInterface
  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error: {error.message}</p>

  return <Anime anime={anime} />
}
