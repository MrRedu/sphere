'use client'
import { Heart } from 'lucide-react'
import { Button } from './Button'
import Link from 'next/link'
import Image from 'next/image'
import { useFavouriteAnimes } from '@/stores/animes/favourite-animes.store'
import { SimpleAnime } from '#/src/app/types/anime.type'

type GalleryCardProps = Omit<SimpleAnime, 'coverImage'>

export const GalleryCard = ({
  id,
  title,
  bannerImage,
  genres,
}: GalleryCardProps) => {
  const favouriteAnimes = useFavouriteAnimes(state => state.favouriteAnimes)
  const toggleFavouriteAnime = useFavouriteAnimes(
    state => state.toggleFavouriteAnime
  )

  return (
    <div key={id} className="relative">
      <Button
        onClick={() => toggleFavouriteAnime(id)}
        className="absolute right-4 top-4 z-10 border-none p-2"
      >
        {favouriteAnimes.includes(id) ? (
          <Heart size={24} className="fill-current text-red-500" />
        ) : (
          <Heart size={24} />
        )}
      </Button>
      <Link
        href={`/anime/${id}/${title.english || title.native}`}
        className="relative flex h-[220px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-sm bg-black/70 p-4 transition-colors duration-500 ease-in-out lg:bg-transparent lg:hover:bg-black/70"
      >
        <Image
          src={bannerImage || '/placeholder_300x450.jpg'}
          alt={`Poster ${title.english || title.native || 'Unknown'}`}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1280}
          height={763}
        />
        <p className="text-sm">{genres.join(', ')}</p>
        <h2 className="text-lg font-bold">
          {title.english || title.native || 'Unknown'}
        </h2>
      </Link>
    </div>
  )
}
