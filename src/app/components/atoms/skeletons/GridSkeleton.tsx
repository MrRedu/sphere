const classes = `flex h-[200px] rounded-xl bg-dark/85 md:h-full`

export const GridSkeleton = () => {
  return (
    <div className="grid animate-pulse grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-[280px_280px]">
      <div className={`md:col-span-2 md:row-span-1 ${classes}`} />
      <div className={`md:col-span-1 md:row-span-2 ${classes}`} />
      <div className={`md:col-span-1 md:row-span-1 ${classes}`} />
      <div className={`md:col-span-1 md:row-span-1 ${classes}`} />
    </div>
  )
}
