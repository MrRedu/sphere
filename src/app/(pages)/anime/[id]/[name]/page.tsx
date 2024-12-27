'use client'
import { gql, useQuery } from '@apollo/client'
import {
  CirclePlay,
  Clapperboard,
  Clock,
  FileVideo,
  Globe,
  Heart,
  MoveDown,
  MoveUp,
  Play,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ReactCountryFlag } from 'react-country-flag'

import Section from '@/components/atoms/Section'
import { Chip } from '@/components/atoms/ui/Chip'
import { Rating } from '@/components/atoms/ui/Rating'
import { RichText } from '@/components/atoms/ui/RichText'
import { Spotlight } from '@/components/atoms/ui/Spotlight'
import { TextLoop } from '@/components/atoms/ui/TextLoop'
import { Tilt } from '@/components/atoms/ui/Tilt'
import { AnimeStats } from '@/components/molecules/AnimeStats'
import { BannerImage } from '@/components/molecules/BannerImage'
import { capitalize, formatDate } from '@/lib/utils'
import { Anime, Media } from '#/src/app/types/anime.type'

const GET_ANIME_BY_ID = gql`
  query GetAnime($id: Int) {
    Media(id: $id, type: ANIME) {
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

type Params = Promise<{ slug: string[] }>

export default function AnimePage({ params }: { params: Params }) {
  const { id, name } = useParams()
  const { data, loading, error } = useQuery<Media>(GET_ANIME_BY_ID, {
    variables: { id: Number(id) },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const anime = data?.Media as Anime
  const episodesInformation = [
    {
      id: 1,
      field: 'Episodes',
      data: anime.episodes,
      icon: <FileVideo size={14} />,
    },
    {
      id: 2,
      field: 'Episode Duration',
      data: anime.duration,
      icon: <Clock size={14} />,
    },
    {
      id: 3,
      field: 'Origin',
      data: (
        <ReactCountryFlag
          countryCode={anime.countryOfOrigin}
          svg
          style={{ width: '2em', height: '2em' }}
        />
      ),
      icon: <Globe size={14} />,
    },
  ]
  const formatInformation = [
    {
      id: 1,
      // field: 'Format',
      data: capitalize(anime.format),
      icon: <Clapperboard size={14} />,
    },
    {
      id: 2,
      // field: 'Type',
      data: capitalize(anime.type),
      icon: <CirclePlay size={14} />,
    },
  ]
  const datesInformation = [
    {
      id: 1,
      // field: 'Start Date',
      data: formatDate(
        `${anime.startDate?.month}/${anime.startDate?.day}/${anime.startDate?.year}`
      ),
      icon: <MoveUp size={14} />,
    },
    {
      id: 2,
      // field: 'End Date',
      data: formatDate(
        `${anime.endDate?.month}/${anime.endDate?.day}/${anime.endDate?.year}`
      ),
      icon: <MoveDown size={14} />,
    },
  ]

  return (
    <>
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-dark/60" />
      <BannerImage
        banner={anime.bannerImage}
        title={anime.title.english || anime.title.native}
      />
      {/* ⬇⬇⬇ Components */}
      <Section className="grid gap-8 py-12 md:grid-cols-[320px_1fr]">
        <div className="flex w-full flex-col">
          <Tilt rotationFactor={8} isRevese>
            <div className="mx-auto aspect-[9/14] h-[420px] w-fit max-w-[320px]">
              <Spotlight
                className={`z-10 from-white/50 via-white/20 to-white/10 blur-2xl`}
                size={248}
                springOptions={{
                  stiffness: 26.7,
                  damping: 4.1,
                  mass: 0.2,
                }}
              />
              <Image
                src={anime.coverImage.extraLarge || '/placeholder_300x450.jpg'}
                alt={`Cover ${anime.title.english || anime.title.native || 'Unknown'}`}
                width={1280}
                height={720}
                className={`aspect-[9/14] rounded object-cover mix-blend-normal`}
                quality={80}
                style={{
                  width: '100%',
                  height: '100%',
                  aspectRatio: '9/14',
                }}
                priority={true}
                placeholder="empty"
              />
            </div>
          </Tilt>
          <div className="mt-4 flex w-full items-center justify-center gap-4">
            <button
              className={`flex gap-2 rounded border border-gray-600 px-4 py-2 text-center text-sm text-light shadow-sm transition-all hover:bg-dark hover:shadow-lg`}
              type="button"
            >
              <Heart />
              Like
            </button>
            <button
              className={`flex gap-2 rounded border border-gray-600 px-4 py-2 text-center text-sm text-light shadow-sm transition-all hover:bg-dark hover:shadow-lg`}
              type="button"
            >
              <Play />
              See Trailer
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {/* Title */}
          <TextLoop className="text-wrap">
            {anime.title?.english && (
              <h2
                className={`scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl`}
              >
                {anime.title.english}
              </h2>
            )}
            {anime.title?.native && (
              <h2
                className={`scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl`}
              >
                {anime.title.native}
              </h2>
            )}
          </TextLoop>
          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {anime.genres.map(genre => (
              <Link key={genre} href={`/animes/genre/${genre}`}>
                <Chip key={genre}>
                  <span className="text-sm font-semibold">{genre}</span>
                </Chip>
              </Link>
            ))}
          </div>
          {/* Episodes, Episodes Duration, Origin */}
          <AnimeStats stats={episodesInformation} />
          {/* Rating */}
          <Rating average={anime.averageScore} />
          {/* Format & Type */}
          <AnimeStats stats={formatInformation} />
          {/* Start Date & End Date */}
          <AnimeStats stats={datesInformation} />
          {/* Description */}
          <RichText content={anime.description} />
        </div>
        {/* 
        <pre>
          <code>{JSON.stringify(anime, undefined, 2)}</code>
        </pre> */}
      </Section>
    </>
  )
}
