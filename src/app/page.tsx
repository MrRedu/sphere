import { SimpleGallery } from '@/components/layout/SimpleGallery'
import { TopRanking } from '@/components/layout/TopRanking'
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
