'use client'

import { Heart, Play } from 'lucide-react'

import { useFavouriteAnimes } from '@/stores/animes/favourite-animes.store'

import { Button } from './Button'

export const AnimeButtons = ({ animeId }: { animeId: number }) => {
  const favouriteAnimes = useFavouriteAnimes(state => state.favouriteAnimes)
  const toggleFavouriteAnime = useFavouriteAnimes(
    state => state.toggleFavouriteAnime
  )
  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <Button
        className="md:flex-grow"
        onClick={() => toggleFavouriteAnime(animeId)}
      >
        {favouriteAnimes?.includes(animeId) ? (
          <Heart fill="currentColor" />
        ) : (
          <Heart />
        )}
        {favouriteAnimes?.includes(animeId) ? (
          <span className="hidden md:block">Liked</span>
        ) : (
          <span className="hidden md:block">Like</span>
        )}
      </Button>
      <Button className="md:flex-grow">
        <Play />
        <span className="hidden md:block">See Trailer</span>
      </Button>
    </div>
  )
}
