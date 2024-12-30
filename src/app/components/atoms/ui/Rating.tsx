import { Star, StarHalf } from 'lucide-react'

const MAX_RATING = 5

const calculateRoundedRating = (average: number): number => {
  // Convertir el promedio (0-100) a una calificación (0-MAX_RATING)
  return (average / 100) * MAX_RATING // Retorna un número decimal
}

const renderStars = (rating: number) => {
  const stars = []

  for (let index = 0; index < MAX_RATING; index++) {
    if (index < Math.floor(rating)) {
      stars.push(
        <li key={index}>
          <Star key={index} className="text-primary" />
        </li>
      )
    } else if (index === Math.floor(rating) && rating % 1 !== 0) {
      stars.push(
        <li key={index}>
          <StarHalf key={index} className="text-primary" />
        </li>
      )
    } else {
      stars.push(
        <li key={index}>
          <Star key={index} className="text-zinc-500" />
        </li>
      )
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
