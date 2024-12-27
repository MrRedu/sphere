'use client'
import { gql, useQuery } from '@apollo/client'
import Section from '@/components/atoms/Section'
import Image from 'next/image'
import Link from 'next/link'

interface Anime {
  id: number
  title: {
    english: string
    native: string
  }
  bannerImage: string
  genres: string[]
}

interface Data {
  Page: {
    media: Anime[]
  }
}

export const ANIMES = gql`
  query Page {
    Page(perPage: 5) {
      media {
        id
        title {
          english
          native
        }
        bannerImage
        genres
      }
    }
  }
`

// Renombrar este componente
export const MultipleCards = () => {
  const { data, loading, error } = useQuery<Data>(ANIMES)

  if (loading) return <div className="h-screen w-screen animate-pulse" />
  if (error) return <p>Error: {error.message}</p>

  const animes = data?.Page?.media as Anime[]

  return (
    <Section className="py-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {animes?.map(anime => (
          <Link
            key={anime.id}
            href={`/anime/${anime.id}/${anime.title.english?.replace(/[^a-zA-Z0-9]/g, '')}`}
            className="hover:bg-dark/50 relative flex h-[220px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-sm p-4 transition-colors duration-500 ease-in-out"
          >
            <Image
              src={anime.bannerImage || 'https://via.placeholder.com/300x450'}
              alt={`Poster ${anime.title.english || anime.title.native || 'Unknown'}`}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
              width={1280}
              height={763}
            />
            <p className="text-sm">{anime.genres.join(', ')}</p>
            <h2 className="text-lg font-bold">{anime.title.english}</h2>
          </Link>
        ))}
      </div>
    </Section>
  )
}
