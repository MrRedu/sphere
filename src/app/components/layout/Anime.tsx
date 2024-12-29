import Image from 'next/image'
import { Anime as AnimeInterface } from '../../types/anime.type'
import Section from '../atoms/Section'
import { Spotlight } from '../atoms/ui/Spotlight'
import { Tilt } from '../atoms/ui/Tilt'
import { BannerImage } from '../molecules/BannerImage'
import { TextLoop } from '../atoms/ui/TextLoop'
import Link from 'next/link'
import { Chip } from '../atoms/ui/Chip'
import { AnimeStats } from '../molecules/AnimeStats'
import { Rating } from '../atoms/ui/Rating'
import { RichText } from '../atoms/ui/RichText'
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
import ReactCountryFlag from 'react-country-flag'
import { capitalize, formatDate } from '../../lib/utils'

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
          {/* <div className="mt-4 flex items-center justify-center gap-4">
            <Button
              className="md:flex-grow"
              onClick={() => toggleFavouriteAnime(anime.id)}
            >
              {favouriteAnimes?.includes(anime.id) ? (
                <Heart fill="currentColor" />
              ) : (
                <Heart />
              )}
              {favouriteAnimes?.includes(anime.id) ? (
                <span className="hidden md:block">Liked</span>
              ) : (
                <span className="hidden md:block">Like</span>
              )}
            </Button>
            <Button className="md:flex-grow">
              <Play />
              <span className="hidden md:block">See Trailer</span>
            </Button>
          </div> */}
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
