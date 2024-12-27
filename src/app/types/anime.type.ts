export interface Anime {
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
}
