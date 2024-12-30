'use client'

import { useState } from 'react'

import Section from '@/components/atoms/Section'
import { BannerImage } from '@/components/molecules/BannerImage'
import { InformationActiveBanner } from '@/components/molecules/InformationActiveBanner'
import { Swiper } from '@/components/organisms/Swiper'

import { SimpleAnime } from '../../types/anime.type'

/**
 * The HeroSection component is a section that displays a banner image of an anime,
 * information about the anime, and a swiper that shows the most watched animes.
 *
 * @param {{ animes?: SimpleAnime[] }} props - The props for the component.
 * @param {SimpleAnime[]} [props.animes=[]] - An array of animes to display in the swiper.
 * @returns {JSX.Element} The HeroSection component.
 */
export const HeroSection = ({ animes = [] }: { animes?: SimpleAnime[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const defaultAnime = {
    id: 0,
    title: { english: 'Exceeded requests', native: 'Exceeded requests' },
    bannerImage: '',
    genres: ['Try', 'Again', 'Later'],
  }

  return (
    <div className="mt-18 relative -top-16 h-screen sm:mt-0">
      <Section className="relative flex h-screen flex-col justify-end pb-4">
        <BannerImage
          banner={
            animes?.[currentIndex]?.bannerImage || defaultAnime.bannerImage
          }
          title={
            animes?.[currentIndex]?.title.english || defaultAnime.title.english
          }
        />
        <div className="z-20 flex flex-col justify-end sm:h-screen">
          <InformationActiveBanner
            id={animes?.[currentIndex]?.id || defaultAnime.id}
            title={
              animes?.[currentIndex]?.title.english ||
              defaultAnime.title.english
            }
            genres={animes?.[currentIndex]?.genres || defaultAnime.genres}
          />
          <h2 className="relative z-20 mb-3 font-medium uppercase">
            Most watched
          </h2>
          <Swiper setCurrentIndex={setCurrentIndex} animes={animes || []} />
        </div>
      </Section>
    </div>
  )
}
