import Image from 'next/image'
import Link from 'next/link'

import { AnimatedGroup } from '@/components/atoms/ui/AnimatedGroup'

import { SimpleAnime } from '../../types/anime.type'

/**
 * A component that displays a list of anime as a grid of cards. The cards
 * will be animated when they come into view.
 *
 * @param {SimpleAnime[]} animes - The list of anime to display.
 *
 * @example
 * // Display a list of anime
 * <Gallery animes={animes} />
 */
const Gallery = ({ animes }: { animes: SimpleAnime[] }) => {
  return (
    <AnimatedGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {animes?.map(anime => (
        <Link
          key={anime.id}
          href={`/anime/${anime.id}/${anime.title.english || anime.title.native}`}
          className="relative flex h-[220px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-sm bg-dark/70 p-4 transition-colors duration-500 ease-in-out lg:bg-transparent lg:hover:bg-dark/70"
        >
          <Image
            src={anime.bannerImage || '/placeholder_300x450.jpg'}
            alt={`Poster ${anime.title.english || anime.title.native || 'Unknown'}`}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            width={1280}
            height={763}
          />
          <p className="text-sm">{anime.genres.join(', ')}</p>
          <h2 className="text-lg font-bold">
            {anime.title.english || anime.title.native || 'Unknown'}
          </h2>
        </Link>
      ))}
    </AnimatedGroup>
  )
}

export default Gallery
