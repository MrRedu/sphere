'use client'

import { gql, useQuery } from '@apollo/client'
import { useParams } from 'next/navigation'

import Section from '@/components/atoms/Section'
import { SimpleAnime } from '#/src/app/types/anime.type'

interface Data {
  Page: {
    media: SimpleAnime[]
  }
}

const GET_ANIMES_BY_GENRE = gql`
  query GetAnimesByGenre($genre: String!, $perPage: Int!, $page: Int!) {
    Page(perPage: $perPage, page: $page) {
      media(genre: $genre) {
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

type Params = Promise<{ slug: string[] }>

export default function AnimesByGenrePage({ params }: { params: Params }) {
  const { name } = useParams()
  const nameWithoutSpace = (name as string)?.replace(/%20/g, ' ')
  const { data, loading, error } = useQuery<Data>(GET_ANIMES_BY_GENRE, {
    variables: { genre: nameWithoutSpace, perPage: 9, page: 1 },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const animes = data?.Page?.media as SimpleAnime[]

  console.log(animes)

  return (
    <Section>
      {animes?.map(anime => (
        <div key={anime.id}>{anime.title.english || anime.title.native}</div>
      ))}
    </Section>
  )
}
