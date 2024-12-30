import { AnimatedGroup } from '@/components/atoms/ui/AnimatedGroup'
import { GalleryCard } from '@/components/molecules/ui/GalleryCard'

import { SimpleAnime } from '../../types/anime.type'

const Gallery = ({ animes }: { animes: SimpleAnime[] }) => {
  return (
    <AnimatedGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {animes &&
        animes?.map(anime => <GalleryCard key={anime.id} {...anime} />)}
    </AnimatedGroup>
  )
}

export default Gallery
