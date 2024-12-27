import Image from 'next/image'

/**
 * Renders a full-screen banner image with gradient overlays.
 *
 * @param {Object} props - The component props.
 * @param {string} banner - The URL of the banner image. Defaults to a placeholder image.
 * @param {string} title - The title used as alt text for the image. Defaults to 'Unknown'.
 *
 * This component uses multiple CSS gradients to create an overlay effect on the image.
 * It ensures that the image covers the full viewport height and applies a saturation effect.
 */

type BannerImageProps = {
  banner?: string
  title?: string
}

export const BannerImage = ({
  banner = 'https://placehold.co/1536x864.jpg',
  title = 'Unknown',
}: BannerImageProps) => {
  return (
    <div
      className={`after:h-[calc(100vh - 65px)] h-[calc(100vh - 65px)] before:h-[calc(100vh - 65px)] absolute inset-0 -z-50 flex h-full w-full before:absolute before:inset-0 before:z-[1] before:bg-gradiantBotton before:content-[''] after:absolute after:inset-0 after:bg-gradiantLeft after:content-[''] sm:h-screen before:sm:h-screen after:sm:h-screen`}
    >
      <div
        className={
          'h-[calc(100vh - 65px)] after:h-[calc(100vh - 65px)] absolute right-0 top-0 h-full w-full after:absolute after:inset-0 after:bg-gradiantTop2 sm:h-screen after:sm:h-screen'
        }
      >
        <Image
          src={banner}
          alt={`Poster ${title}`}
          fill
          className={'h-full w-full object-cover object-top saturate-[1.2]'}
          priority={true}
          quality={100}
        />
      </div>
    </div>
  )
}
