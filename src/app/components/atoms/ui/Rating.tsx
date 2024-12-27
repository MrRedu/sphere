import { StarHalf, Star } from 'lucide-react'

const MAX_RATING = 5

const calculateRoundedRating = (average: number): number => {
  // Convertir el promedio (0-100) a una calificación (0-MAX_RATING)
  return (average / 100) * MAX_RATING // Retorna un número decimal
}

const renderStars = (rating: number) => {
  const stars = []

  for (let i = 0; i < MAX_RATING; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<Star key={i} className="text-primary" />)
    } else if (i === Math.floor(rating) && rating % 1 !== 0) {
      stars.push(<StarHalf key={i} className="text-primary" />)
    } else {
      stars.push(<Star key={i} className="text-zinc-500" />)
    }
  }

  return <ul className="flex">{stars}</ul>
}

export const Rating = ({ average }: { average: number }) => {
  const rating = calculateRoundedRating(average)

  return (
    <div className="flex items-center gap-2">
      {renderStars(rating)}
      <p className="font-bold">{average}</p>
    </div>
  )
}
