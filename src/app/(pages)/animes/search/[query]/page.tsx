'use client'

import { useParams } from 'next/navigation'

import { SearchGallery } from '@/components/layout/SearchGallery'

type Params = Promise<{ slug: string[] }>

export default function AnimesByQueryPage({ params }: { params: Params }) {
  const { query } = useParams()

  return <SearchGallery query={query as string} />
}
