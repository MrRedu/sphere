'use client'

import { useParams } from 'next/navigation'

import { GenreGallery } from '@/components/layout/GenreGallery'

type Params = Promise<{ slug: string[] }>

export default function AnimesByGenrePage({ params }: { params: Params }) {
  const { name } = useParams()
  const nameWithoutSpace = (name as string)?.replace(/%20/g, ' ')

  return <GenreGallery genre={nameWithoutSpace} />
}
