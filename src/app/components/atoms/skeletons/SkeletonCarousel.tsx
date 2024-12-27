const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent'

export function SkeletonCarousel() {
  return (
    <ul className="3xl:grid-cols-8 relative grid w-full grid-cols-2 gap-4 *:relative *:aspect-[9/14] *:overflow-hidden *:rounded *:bg-zinc-800 sm:grid-cols-3 md:h-auto md:grid-cols-4 md:gap-10 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
      <li>
        <span className={`${shimmer}`}></span>
      </li>
      <li>
        <span className={`${shimmer}`}></span>
      </li>
      <li className="hidden sm:block">
        <span className={`${shimmer}`}></span>
      </li>
      <li className="hidden md:block">
        <span className={`${shimmer}`}></span>
      </li>
      <li className="hidden lg:block">
        <span className={`${shimmer}`}></span>
      </li>
      <li className="hidden xl:block">
        <span className={`${shimmer}`}></span>
      </li>
      <li className="hidden 2xl:block">
        <span className={`${shimmer}`}></span>
      </li>
      <li className="3xl:block hidden">
        <span className={`${shimmer}`}></span>
      </li>
    </ul>
  )
}
