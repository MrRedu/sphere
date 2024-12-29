import { gql } from '@apollo/client'

import { Anime } from '@/components/layout/Anime'
import { getClient } from '@/lib/client'
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
  // || {
  //   name: 'NetworkError',
  //   message: 'Failed to fetch',
  // }

  return (
    <>
      <Anime anime={anime} />
    </>
  )
}
