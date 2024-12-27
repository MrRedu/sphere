'use client'

import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

import Section from '@/components/atoms/Section'
import { Swiper } from '@/components/organisms/Swiper'
import { BannerImage } from '#/src/app/components/molecules/BannerImage'

import { Anime } from '../../types/anime.type'
import { InformationActiveBanner } from '../molecules/InformationActiveBanner'

interface Data {
  Page: {
    media: Anime[]
  }
}

const POPULAR_ANIMES = gql`
  query GetPopularAnimes {
    Page(perPage: 20) {
      media(sort: POPULARITY_DESC) {
        id
        title {
          english
          native
        }
        bannerImage
        coverImage {
          medium
          large
          color
        }
        genres
      }
    }
  }
`

export const HeroSection = () => {
  const { data, loading, error } = useQuery<Data>(POPULAR_ANIMES)
  const [currentIndex, setCurrentIndex] = useState(0)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  const animes = data?.Page?.media as Anime[]

  return (
    <div className="mt-18 relative -top-16 h-screen sm:mt-0">
      <Section className="relative flex h-screen flex-col justify-end pb-4">
        <BannerImage
          banner={animes?.[currentIndex]?.bannerImage}
          title={
            animes?.[currentIndex]?.title.english ||
            animes?.[currentIndex]?.title.native
          }
        />

        <div className="z-20 flex flex-col justify-end sm:h-screen">
          <InformationActiveBanner
            id={animes?.[currentIndex]?.id}
            title={animes?.[currentIndex]?.title.english}
            genres={animes?.[currentIndex]?.genres}
          />

          <h2 className="relative z-20 mb-3 font-medium uppercase">
            Most Popular
          </h2>
          <Swiper setCurrentIndex={setCurrentIndex} animes={animes} />
        </div>
      </Section>
    </div>
  )
}
