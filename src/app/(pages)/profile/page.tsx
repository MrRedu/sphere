import { FavouriteAnimes } from '@/components/layout/FavouriteAnimes'
import { UserProfile } from '@/components/molecules/ui/UserProfile'

export default function ProfilePage() {
  return (
    <>
      <UserProfile />
      <FavouriteAnimes />
    </>
  )
}
