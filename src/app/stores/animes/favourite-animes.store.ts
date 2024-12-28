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
          return state.favouriteAnimes.includes(animeId)
            ? {
                favouriteAnimes: state.favouriteAnimes.filter(
                  id => id !== animeId
                ),
              }
            : { favouriteAnimes: [...state.favouriteAnimes, animeId] }
        })
      },
    }),

    {
      name: 'favourite-animes-store',
    }
  )
)
