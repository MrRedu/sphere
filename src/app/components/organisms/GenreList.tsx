'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

import { Chip } from '@/components/atoms/ui/Chip'

const genres = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Ecchi',
  'Fantasy',
  'Horror',
  'Mahou Shoujo',
  'Mecha',
  'Music',
  'Mystery',
  'Psychological',
  'Romance',
  'Sci-Fi',
  'Slice of Life',
  'Sports',
  'Supernatural',
  'Thriller',
]

export const GenreList = () => {
  const scrollRef = useRef<HTMLUListElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -100,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 100,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="scrollbar-hidden relative flex items-center justify-center">
      <button
        className="absolute bottom-0 left-0 top-1/2 z-20 flex size-[42px] translate-y-[-50%] items-center justify-start bg-gradient-to-r from-black to-black/0"
        onClick={scrollLeft}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute bottom-0 right-0 top-1/2 z-20 flex size-[42px] translate-y-[-50%] items-center justify-end"
        onClick={scrollRight}
      >
        <ChevronRight size={28} />
      </button>
      <ul
        ref={scrollRef}
        className="genre-list scrollbar-hidden flex w-[92%] gap-2 overflow-hidden"
      >
        {genres.map(genre => (
          <li key={genre} className="min-w-fit">
            <Link href={`/animes/genre/${genre}`} className="text-sm">
              <Chip>{genre}</Chip>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
