import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavouriteAnimesState {
  favouriteAnimes: number[]
  toggleFavouriteAnime: (animeId: number) => void
}

export const useFavouriteAnimes = create<FavouriteAnimesState>()(
  persist(
    set => ({
      favouriteAnimes: [],
      toggleFavouriteAnime: (animeId: number) => {
        set(state => {
          if (state.favouriteAnimes.includes(animeId)) {
            return {
              favouriteAnimes: state.favouriteAnimes.filter(
                id => id !== animeId
              ),
            }
          } else {
            return { favouriteAnimes: [...state.favouriteAnimes, animeId] }
          }
        })
      },
    }),

    {
      name: 'favourite-animes-store',
    }
  )
)
