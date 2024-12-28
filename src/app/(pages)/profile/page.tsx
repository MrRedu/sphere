import { FavouriteAnimes } from '@/components/layout/FavouriteAnimes'
import { ProfileAvatar } from '@/components/molecules/ui/ProfileAvatar'

export default function ProfilePage() {
  return (
    <>
      <ProfileAvatar />
      <FavouriteAnimes />
    </>
  )
}
