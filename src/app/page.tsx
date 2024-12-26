'use client'
import { gql, useQuery } from '@apollo/client'

export const ANIMES = gql`
  query Page {
    Page {
      media {
        title {
          english
          native
        }
        siteUrl
        description
        id
      }
    }
  }
`

export default function HomePage() {
  const { data, loading, error } = useQuery(ANIMES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      {data.Page.media.map((anime: any) => (
        <p key={anime.id}>{anime.title.english}</p>
      ))}
    </div>
  )
}
