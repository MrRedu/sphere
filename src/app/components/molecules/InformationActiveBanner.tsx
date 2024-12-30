import { TvMinimalPlay } from 'lucide-react'
import Link from 'next/link'

type InformationActiveBanner = {
  id: number
  title?: string
  genres?: string[]
}

/**
 * A component that displays information about an anime, including its title and genres,
 * and provides a link to more detailed information.
 *
 * @param {Object} props - The properties for the component.
 * @param {number} props.id - The ID of the anime.
 * @param {string} [props.title='Unknown'] - The title of the anime.
 * @param {string[]} [props.genres=['placeholder-genre']] - The genres of the anime.
 *
 * @returns {JSX.Element} A JSX element representing the information banner.
 *
 * The component includes an animated title and a list of genres, each linking to their respective genre pages.
 * It also includes a link to the anime's detailed information page.
 */
export const InformationActiveBanner = ({
  id,
  title = 'Unknown',
  genres = ['placeholder-genre'],
}: InformationActiveBanner) => {
  return (
    <div className={`flex flex-col justify-end gap-4 sm:max-w-lg`}>
      <div className="animate-fadeInUp flex min-h-[100px] flex-col justify-end gap-4">
        <h2
          className={`mv:text-2xl lg:text-4xlb line-clamp-2 text-xl font-medium uppercase text-light md:text-[1.9rem]`}
        >
          {title || 'Unknown'}
        </h2>

        <ul className="flex gap-4 text-base lg:gap-6 lg:text-sm">
          {genres?.slice(0, 3).map((genre: string, index: number) => (
            <li
              key={index}
              className="transition duration-300 hover:text-stone-300"
            >
              <Link href={`/animes/genre/${genre}`}>{genre}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        aria-label={`See information about ${title}`}
        href={`/anime/${id}/${title}`}
        className="h-[36px] w-[36px] transition duration-300 sm:mt-4 md:hover:scale-110 lg:h-[45px] lg:w-[45px]"
      >
        <TvMinimalPlay />
      </Link>
    </div>
  )
}
