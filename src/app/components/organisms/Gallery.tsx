import { AnimatedGroup } from '@/components/atoms/ui/AnimatedGroup'

import { SimpleAnime } from '../../types/anime.type'

import { GalleryCard } from '@/components/molecules/ui/GalleryCard'

const Gallery = ({ animes }: { animes: SimpleAnime[] }) => {
  return (
    <AnimatedGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {animes?.map(anime => <GalleryCard key={anime.id} {...anime} />)}
    </AnimatedGroup>
  )
}

export default Gallery
