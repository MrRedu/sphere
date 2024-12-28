import { TopRanking } from '@/components/layout/TopRanking'
import { SimpleGallery } from '@/components/layout/SimpleGallery'
import { HeroSection } from '@/components/organisms/HeroSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TopRanking />
      <SimpleGallery />
    </>
  )
}
