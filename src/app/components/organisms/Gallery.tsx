import { AnimatedGroup } from '@/components/atoms/ui/AnimatedGroup'
import { GalleryCard } from '@/components/molecules/ui/GalleryCard'

import { SimpleAnime } from '../../types/anime.type'

/**
 * A component that displays a list of anime cards in a grid. The cards are
 * contained in an AnimatedGroup, which allows for animations to be applied to
 * the cards.
 *
 * @param animes - The list of anime to display.
 */
const Gallery = ({ animes }: { animes: SimpleAnime[] }) => {
  return (
    <AnimatedGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {animes &&
        animes?.map(anime => <GalleryCard key={anime.id} {...anime} />)}
    </AnimatedGroup>
  )
}

export default Gallery
