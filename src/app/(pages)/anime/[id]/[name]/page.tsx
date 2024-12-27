'use client'
import { gql, useQuery } from '@apollo/client'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import Section from '@/components/atoms/Section'

const GET_ANIME_BY_ID = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        english
        native
      }
      bannerImage
      genres
      description
    }
  }
`

interface Anime {
  id: number
  title: {
    english: string
    native: string
  }
  bannerImage: string
  genres: string[]
  description: string
}

export default function AnimePage({
  params,
}: {
  params: { id: string; name: string }
}) {
  const { id, name } = useParams()
  const { data, loading, error } = useQuery(GET_ANIME_BY_ID, {
    variables: { id: Number(id) },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const anime = data?.Media as Anime

  return (
    <Section>
      <div
        className={`after:h-[calc(100vh - 65px)] h-[calc(100vh - 65px)] before:h-[calc(100vh - 65px)] before:bg-gradiantBotton after:bg-gradiantLeft absolute inset-0 -z-50 flex h-full w-full before:absolute before:inset-0 before:z-[1] before:content-[''] after:absolute after:inset-0 after:content-[''] sm:h-screen before:sm:h-screen after:sm:h-screen`}
      >
        <div
          className={
            'h-[calc(100vh - 65px)] after:h-[calc(100vh - 65px)] after:bg-gradiantTop2 absolute right-0 top-0 h-full w-full after:absolute after:inset-0 sm:h-screen after:sm:h-screen'
          }
        >
          <Image
            src={anime?.bannerImage || 'https://placehold.co/1536x864.jpg'}
            // alt={`Poster ${animes?.[currentIndex]?.title.english}`}
            alt="hi"
            fill
            className={'h-full w-full object-cover object-top saturate-[1.2]'}
            priority={true}
            quality={100}
          />
        </div>
      </div>
      <pre>
        <code>{JSON.stringify(data, undefined, 2)}</code>
      </pre>
    </Section>
  )
}
