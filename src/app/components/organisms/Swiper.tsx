'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../../styles/swiper.css'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'

import { CarouselSkeleton } from '@/components/atoms/skeletons/CarouselSkeleton'
import { useWindowSize } from '@/hooks/useWindowSize'

import { SimpleAnime } from '../../types/anime.type'

export const Swiper = ({
  animes = [],
  setCurrentIndex,
}: {
  animes: SimpleAnime[]
  setCurrentIndex: (index: number) => void
}) => {
  const [swiperReady, setSwiperReady] = useState(false)
  const windowSize = useWindowSize()

  const showMovies = useMemo(() => {
    if (windowSize.width >= 1800) return 20
    if (windowSize.width >= 1400) return 16
    if (windowSize.width >= 1024) return 12
    return 10
  }, [windowSize.width])

  const breakpoints = {
    300: { slidesPerView: 2, spaceBetween: 20 },
    600: { slidesPerView: 3, spaceBetween: 30 },
    800: { slidesPerView: 4, spaceBetween: 30 },
    1024: { slidesPerView: 5, spaceBetween: 30 },
    1200: { slidesPerView: 6, spaceBetween: 30 },
    1500: { slidesPerView: 7, spaceBetween: 40 },
    1800: { slidesPerView: 8, spaceBetween: 40 },
  }

  return (
    <div className="relative">
      <SwiperComponent
        pagination={{
          clickable: true,
          el: '.swiper-paginacion',
        }}
        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
        slidesPerView={2}
        breakpoints={breakpoints}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 10_000 }}
        onSwiper={() => setSwiperReady(true)}
      >
        {swiperReady && animes.length > 0 ? (
          animes?.slice(0, showMovies).map(anime => (
            <SwiperSlide key={anime.id} className="cursor-grab object-cover">
              <Link
                href={`/anime/${anime.id}/${anime.title?.english || anime.title?.native || 'Unknown'}`}
                className="aspect-[9/14] h-auto w-auto"
              >
                <Image
                  src={
                    anime.coverImage?.large ||
                    anime.coverImage?.medium ||
                    '/placeholder_300x450.jpg'
                  }
                  alt={`Poster ${anime.title?.english || anime.title?.native || 'Unknown'}`}
                  width={300}
                  height={450}
                  className={`aspect-[9/14] rounded object-cover mix-blend-normal`}
                  quality={80}
                  style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: '9/14',
                  }}
                  priority={true}
                  placeholder="empty"
                />
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <CarouselSkeleton />
        )}
      </SwiperComponent>

      {/* Botón de avanzar */}
      <div className="swiper-button-next">
        <div
          className={
            'absolute -right-9 -top-1 hidden w-6 text-light opacity-80 md:block lg:-right-11 lg:-top-2 lg:w-7'
          }
        >
          <ChevronRight />
        </div>
      </div>

      {/* Botón de retroceder */}
      <div className="swiper-button-prev">
        <div
          className={
            'absolute -left-9 -top-1 hidden w-6 text-light opacity-80 md:block lg:-left-11 lg:-top-5 lg:w-7'
          }
        >
          <ChevronLeft />
        </div>
      </div>

      {/* Pagination */}
      <div className="swiper-paginacion relative z-10 min-h-6 w-full text-center" />
    </div>
  )
}
