'use client'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../../styles/swiper.css'

import { useMemo, useState } from 'react'

import useWindowSize from '@/hooks/useWindowSize'
// import { getPosterUrl } from '@/utils/getPosterUrl'
import Image from 'next/image'
// import { CarruselSkeleton } from '../UI/skeletons'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 2,
    title: 'The Godfather',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 4,
    title: 'Inception',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 5,
    title: 'Interstellar',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 6,
    title: 'The Matrix',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 7,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 8,
    title: 'The Lord of the Rings: The Two Towers',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 9,
    title: 'The Lord of the Rings: The Return of the King',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 10,
    title: 'Pulp Fiction',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 11,
    title: 'The Silence of the Lambs',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 12,
    title: 'The Green Mile',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 13,
    title: 'The Usual Suspects',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 14,
    title: 'The Departed',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 15,
    title: "Schindler's List",
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 16,
    title: 'Gladiator',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 17,
    title: 'The Prestige',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 18,
    title: 'The Lion King',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 19,
    title: 'The Dark Knight Rises',
    poster: 'https://via.placeholder.com/300x450',
  },
  {
    id: 20,
    title: 'Inglourious Basterds',
    poster: 'https://via.placeholder.com/300x450',
  },
]

export default function Swiper({
  // movies,
  setCurrentIndex,
}: {
  // movies: MoviesAndSeries[] | undefined
  setCurrentIndex: (index: number) => void
}) {
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
        autoplay={{ delay: 10000 }}
        onSwiper={() => setSwiperReady(true)}
      >
        {swiperReady
          ? movies?.slice(0, showMovies).map(movie => (
              <SwiperSlide key={movie.id} className="cursor-grab object-cover">
                <Link
                  href={`/media/${movie.id}/${movie.title}`}
                  className="aspect-[9/14] h-auto w-auto"
                >
                  <Image
                    src={movie.poster}
                    alt={`poster_path ${movie.title}`}
                    width={206}
                    height={300}
                    className={`aspect-[9/14] rounded object-cover mix-blend-normal`}
                    quality={80}
                    style={{
                      width: 'auto',
                      height: 'auto',
                      aspectRatio: '9/14',
                    }}
                    priority={true}
                    placeholder="empty"
                  />
                </Link>
              </SwiperSlide>
            ))
          : // <CarruselSkeleton />
            null}
      </SwiperComponent>

      {/* Botón de avanzar */}
      <div className="swiper-button-next">
        <div
          className={
            'text-light absolute -right-9 -top-1 hidden w-6 opacity-80 md:block lg:-right-11 lg:-top-2 lg:w-7'
          }
        >
          <ArrowRight />
        </div>
      </div>

      {/* Botón de retroceder */}
      <div className="swiper-button-prev">
        <div
          className={
            'text-light absolute -left-9 -top-1 hidden w-6 opacity-80 md:block lg:-left-11 lg:-top-5 lg:w-7'
          }
        >
          <ArrowLeft />
        </div>
      </div>

      {/* Pagination */}
      <div className="swiper-paginacion relative z-10 min-h-6 w-full text-center" />
    </div>
  )
}
