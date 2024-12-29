// Interface to landing-page/sliders/banner, etc -> Simple
export interface SimpleAnime {
  id: number
  title: {
    english: string
    native: string
  }
  bannerImage: string
  coverImage: {
    medium: string
    large: string
    color: string
  }
  genres: string[]
  status?:
    | 'FINISHED'
    | 'RELEASING'
    | 'NOT_YET_RELEASED'
    | 'CANCELLED'
    | 'HIATUS'
  averageScore?: number
}

export interface Media {
  Media: Anime
}

export interface Anime {
  __typename: string
  id: number
  title: Title
  countryOfOrigin: string
  description: string
  genres: string[]
  siteUrl: string
  format: string
  type: string
  status: 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS'
  bannerImage: string
  coverImage: CoverImage
  averageScore: number
  updatedAt: number
  startDate: StartEndDate
  endDate: StartEndDate
  episodes: number
  duration: number
  volumes: null
  trailer: Trailer
}
export interface Title {
  __typename: string
  english: string
  native: string
}

export interface CoverImage {
  __typename: string
  medium: string
  large: string
  extraLarge: string
  color: string
}

export interface StartEndDate {
  __typename: string
  day: number
  month: number
  year: number
}

export interface Trailer {
  __typename: string
  id: string
  site: string
  thumbnail: string
}
