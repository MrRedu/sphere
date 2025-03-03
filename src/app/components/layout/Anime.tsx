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
import { AnimeButtons } from '@/components/molecules/ui/AnimeButtons'
import { capitalize, formatDate } from '@/lib/utils'

import { Anime as AnimeInterface } from '../../types/anime.type'

/**
 * A component that displays detailed information about an anime, including
 * its episodes, duration, country of origin, status, format, type, start
 * and end dates, genres, and description. It also includes buttons for
 * liking the anime and viewing its trailer.
 *
 * Props:
 * - anime: An object containing anime details conforming to the AnimeInterface.
 *
 * Information is displayed using various components such as AnimeStats
 * for episodes, format, and date details, BannerImage for the banner,
 * TextLoop for displaying titles, Chip for genres, Rating for average score,
 * and RichText for the description.
 */

export const Anime = ({ anime }: { anime: AnimeInterface }) => {
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
          alt={`Flag of ${anime.countryOfOrigin}`}
          style={{ width: '2em', height: '2em' }}
        />
      ),
      icon: <Globe size={14} />,
    },
  ]
  const formatInformation = [
    {
      id: 1,
      // field: 'Status',
      data: capitalize(anime.status),
      icon:
        anime.status === 'FINISHED' ? <Heart size={14} /> : <Play size={14} />,
    },
    {
      id: 2,
      // field: 'Format',
      data: capitalize(anime.format),
      icon: <Clapperboard size={14} />,
    },
    {
      id: 3,
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
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <BannerImage
        banner={anime.bannerImage}
        title={anime.title.english || anime.title.native}
      />
      {/* ⬇⬇⬇ Components */}
      <Section className="grid min-h-screen gap-8 py-12 md:grid-cols-[320px_1fr]">
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
          <AnimeButtons animeId={anime.id} trailer={anime.trailer} />
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
      </Section>
    </>
  )
}
