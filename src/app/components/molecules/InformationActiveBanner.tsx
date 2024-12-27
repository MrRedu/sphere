import { Play } from 'lucide-react'
import Link from 'next/link'

/**
 * A banner component that displays information about an anime,
 * such as its title and genres. It also includes a link to the
 * anime's information page.
 *
 * @param {{ id: number, title?: string, genres?: string[] }} props
 * @prop {number} id - The ID of the anime.
 * @prop {string} [title='Unknown'] - The title of the anime.
 * @prop {string[]} [genres=['placeholder-genre']] - The genres of the anime.
 *
 * @example
 * <InformationActiveBanner id={1} title="Naruto" genres={['Action', 'Adventure']} />
 *
 * @returns {JSX.Element} A JSX element representing the banner component.
 */

type InformationActiveBanner = {
  id: number
  title?: string
  genres?: string[]
}

export const InformationActiveBanner = ({
  id,
  title = 'Unknown',
  genres = ['placeholder-genre'],
}: InformationActiveBanner) => {
  return (
    <div className={`flex flex-col justify-end gap-4 sm:max-w-lg`}>
      <div className="animate-fadeInUp flex min-h-[100px] flex-col justify-end gap-4">
        <h2
          className={`mv:text-2xl lg:text-4xlb line-clamp-2 text-xl font-medium uppercase text-white md:text-[1.9rem]`}
        >
          {title}
        </h2>

        <ul className="flex gap-4 text-xs lg:gap-6 lg:text-sm">
          {genres?.slice(0, 3).map((genre: string, index: number) => (
            <li key={index} className="text-txtGray2 hover:text-white">
              <Link href={`/animes/genre/${genre}`}>{genre}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        aria-label={`See information about ${title}`}
        href={`/anime/${id}/${title}`}
        className="h-[36px] w-[36px] transition duration-300 hover:scale-125 sm:mt-4 lg:h-[45px] lg:w-[45px]"
      >
        <Play />
      </Link>
    </div>
  )
}
