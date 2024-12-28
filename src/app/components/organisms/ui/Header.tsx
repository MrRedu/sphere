import { LogoHeader } from '@/components/atoms/ui/LogoHeader'
import { SearchBar } from '@/components/molecules/ui/SearchBar'
import { Avatar } from './Avatar'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-full max-h-[64px] w-full max-w-screen-2xl items-center justify-between gap-1 bg-gradient-to-b from-dark to-transparent px-5 py-4 md:px-8 lg:px-12 2xl:px-16">
      <h1 className="hidden" aria-label="Go to landing page">
        Sphere
      </h1>
      <LogoHeader />

      <div className="flex items-center gap-4">
        <SearchBar />
        <Avatar />
      </div>
    </header>
  )
}
