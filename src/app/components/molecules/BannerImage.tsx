import Image from 'next/image'

type BannerImageProps = {
  banner?: string
  title?: string
}

/**
 * A component that displays a background image with a gradient overlay.
 * Useful for a hero section.
 *
 * @param {Object} props - The props object.
 * @param {string} [props.banner='/placeholder_1536x864.jpg'] - The URL of the background image.
 * @param {string} [props.title='Unknown'] - The title of the anime.
 *
 * @returns {JSX.Element} A JSX element representing the banner component.
 */
export const BannerImage = ({
  banner = '/placeholder_1536x864.jpg',
  title = 'Unknown',
}: BannerImageProps) => {
  return (
    <div
      className={`after:h-[calc(100vh - 65px)] h-[calc(100vh - 65px)] before:h-[calc(100vh - 65px)] absolute inset-0 -z-50 flex h-full max-h-[100vh] w-full before:absolute before:inset-0 before:z-[1] before:bg-gradiantBotton before:content-[''] after:absolute after:inset-0 after:bg-gradiantLeft after:content-[''] sm:h-screen before:sm:h-screen after:sm:h-screen`}
    >
      <div
        className={`h-[calc(100vh - 65px)] after:h-[calc(100vh - 65px)] absolute right-0 top-0 h-full max-h-[100vh] w-full after:absolute after:inset-0 after:bg-gradiantTop2 sm:h-screen after:sm:h-screen`}
      >
        <Image
          src={banner || '/placeholder_1536x864.jpg'}
          alt={`Poster ${title || 'Unknown'}`}
          fill
          className={'h-full w-full object-cover object-top saturate-[1.2]'}
          priority={true}
          quality={100}
        />
      </div>
    </div>
  )
}
