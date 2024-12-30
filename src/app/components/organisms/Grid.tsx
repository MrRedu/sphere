import Image from 'next/image'
import Link from 'next/link'

import { Chip } from '@/components/atoms/ui/Chip'

import { SimpleAnime } from '../../types/anime.type'

/**
 * A card component for an anime, with a poster image and a heading with the title and genres.
 * The component is a link to the anime's information page.
 *
 * @param {{ anime: SimpleAnime, gridArea: string }} props
 * @prop {SimpleAnime} anime - The anime data.
 * @prop {string} gridArea - The CSS grid area for the component.
 *
 * @returns {JSX.Element} A JSX element representing the card component.
 */
const AnimeCard = ({
  anime,
  gridArea,
}: {
  anime: SimpleAnime
  gridArea: string
}) => {
  const overlay = `after:absolute after:inset-0 lg:after:bg-dark/70 after:content-[''] after:bg-gradient-to-t after:from-dark after:to-transparent after:transition-all after:duration-500 hover:after:bg-transparent`

  return (
    <Link
      href={`/anime/${anime.id}/${anime.title?.english || anime.title?.native || 'Unknown'}`}
      className={`relative ${overlay} h-full w-full overflow-hidden rounded-xl`}
    >
      <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-2">
        <h3 className="text-sm font-medium uppercase">
          {anime.title?.english || anime.title?.native || 'Unknown'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {anime.genres?.slice(0, 3).map(genre => (
            <Chip key={genre}>
              <span className="text-xs font-semibold">{genre}</span>
            </Chip>
          ))}
        </div>
      </div>
      <Image
        src={gridArea === 'B' ? anime.coverImage?.large : anime.bannerImage}
        alt={`Poster ${anime.title?.english || anime.title?.native || 'Unknown'}`}
        width={800}
        height={600}
        className="h-full w-full object-cover"
      />
    </Link>
  )
}

/**
 * A grid component that displays a collection of anime cards.
 *
 * @param {{ animes: SimpleAnime[] }} props
 * @prop {SimpleAnime[]} animes - An array of anime objects to be displayed in the grid.
 *
 * @returns {JSX.Element} A JSX element rendering a grid layout with multiple anime cards.
 */

export const Grid = ({ animes }: { animes: SimpleAnime[] }) => {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-[280px_280px]">
      <div className="flex h-[200px] md:col-span-2 md:row-span-1 md:h-full">
        <AnimeCard anime={animes[0]} gridArea="A" />
      </div>
      <div className="flex h-[200px] md:col-span-1 md:row-span-2 md:h-full">
        <AnimeCard anime={animes[1]} gridArea="B" />
      </div>
      <div className="flex h-[200px] md:col-span-1 md:row-span-1 md:h-full">
        <AnimeCard anime={animes[2]} gridArea="C" />
      </div>
      <div className="flex h-[200px] md:col-span-1 md:row-span-1 md:h-full">
        <AnimeCard anime={animes[3]} gridArea="D" />
      </div>
    </section>
  )
}
