'use client'

import { gql, useQuery } from '@apollo/client'
import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Swiper from '@/components/organisms/Swiper'

import Section from '../atoms/Section'

interface Anime {
  id: number
  title: {
    english: string
    native: string
  }
  bannerImage: string
  genres: string[]
}

interface Data {
  Page: {
    media: Anime[]
  }
}

const ANIMES = gql`
  query Page {
    Page(perPage: 1) {
      media {
        id
        title {
          english
          native
        }
        bannerImage
        genres
      }
    }
  }
`

export const HeroSection = () => {
  const { data, loading, error } = useQuery<Data>(ANIMES)
  const animes = data?.Page?.media as Anime[]
  const [currentIndex, setCurrentIndex] = useState(0)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="mt-18 relative -top-16 h-screen sm:mt-0">
      <Section className="relative flex h-screen flex-col justify-end">
        <div
          className={`after:h-[calc(100vh - 65px)] h-[calc(100vh - 65px)] before:h-[calc(100vh - 65px)] absolute inset-0 -z-50 flex h-full w-full before:absolute before:inset-0 before:z-[1] before:bg-gradiantBotton before:content-[''] after:absolute after:inset-0 after:bg-gradiantLeft after:content-[''] sm:h-screen before:sm:h-screen after:sm:h-screen`}
        >
          <div
            className={
              'h-[calc(100vh - 65px)] after:h-[calc(100vh - 65px)] absolute right-0 top-0 h-full w-full after:absolute after:inset-0 after:bg-gradiantTop2 sm:h-screen after:sm:h-screen'
            }
          >
            <Image
              src={
                animes?.[currentIndex]?.bannerImage ||
                'https://placehold.co/1536x864.jpg'
              }
              alt={`Poster ${animes?.[currentIndex]?.title.english}`}
              fill
              className={'h-full w-full object-cover object-top saturate-[1.2]'}
              priority={true}
              quality={100}
            />
          </div>
        </div>

        <div className="z-20 flex flex-col justify-end sm:h-screen">
          <div className={`flex flex-col justify-end gap-4 sm:max-w-lg`}>
            <div className="animate-fadeInUp flex min-h-[100px] flex-col justify-end gap-4">
              <h2
                className={`mv:text-2xl lg:text-4xlb line-clamp-2 text-xl font-medium uppercase text-white md:text-[1.9rem]`}
              >
                {animes?.[currentIndex]?.title.english}
              </h2>

              <ul className="flex gap-4 text-xs lg:gap-6 lg:text-sm">
                {animes?.[currentIndex]?.genres
                  ?.slice(0, 3)
                  .map((genre: string, index: number) => (
                    <li key={index} className="text-txtGray2 hover:text-white">
                      <Link
                        // href={`/search/movie?genre=${genre?.id}`}
                        href="#"
                      >
                        {genre}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <Link
              // aria-label={`Ver trailer de ${currentMovie.title}`}
              // href={`/media/${currentMovie.id}-movie`}
              href={'#'}
              className="h-[36px] w-[36px] transition duration-300 hover:scale-125 sm:mt-4 lg:h-[45px] lg:w-[45px]"
            >
              <Play />
            </Link>
          </div>

          {/* <EspaciadoLayout className='relative z-30 mb-2 sm:mb-4'> */}
          {/* <h2 className="relative z-20 mb-3 font-medium uppercase text-white"> */}
          <h2 className="relative z-20 mb-3 font-medium uppercase">
            TÍTULO DE ESTE SLIDER
          </h2>
          <Swiper setCurrentIndex={setCurrentIndex} />
          {/* </EspaciadoLayout> */}
        </div>
      </Section>
    </div>
  )
}
