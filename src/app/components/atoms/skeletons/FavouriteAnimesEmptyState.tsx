import Image from 'next/image'

export const FavouriteAnimesEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12 md:flex-row md:gap-32">
      <div className="w-full max-w-[400px] text-center md:text-left">
        <p className="mb-4 text-3xl font-bold">
          {`You don't have any favourite animes yet.`}
        </p>
        <p className="mb-4 text-2xl font-semibold">Start adding some!</p>
      </div>
      <Image
        src="/box.svg"
        alt="Box"
        width={100}
        height={100}
        className="w-full max-w-[300px] object-cover"
      />
    </div>
  )
}
