'use client'

import { Heart, Play } from 'lucide-react'

import { useFavouriteAnimes } from '@/stores/animes/favourite-animes.store'
import { Trailer } from '#/src/app/types/anime.type'

import { Button } from './Button'

/**
 * A component that renders buttons for liking an anime and viewing its trailer.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.animeId - The ID of the anime.
 * @param {Trailer} props.trailer - The trailer object containing trailer details.
 *
 * @returns {JSX.Element} A JSX element with buttons to like/unlike the anime and to view its trailer.
 *
 * The like button toggles the anime's favourite status using state management.
 * The trailer button provides a link to view the trailer on YouTube.
 */

export const AnimeButtons = ({
  animeId,
  trailer,
}: {
  animeId: number
  trailer: Trailer
}) => {
  const favouriteAnimes = useFavouriteAnimes(state => state.favouriteAnimes)
  const toggleFavouriteAnime = useFavouriteAnimes(
    state => state.toggleFavouriteAnime
  )
  const trailerUrl = `https://www.youtube.com/watch?v=${trailer?.id || ''}`
  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <Button
        title={
          favouriteAnimes?.includes(animeId) ? 'Unlike anime' : 'Like anime'
        }
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
      <Button title="See trailer" href={trailerUrl} className="md:flex-grow">
        <Play />
        <span className="hidden md:block">See Trailer</span>
      </Button>
    </div>
  )
}
