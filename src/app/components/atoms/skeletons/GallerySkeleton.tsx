const classes = 'h-[200px] bg-dark/85'
export const GallerySkeleton = () => {
  return (
    <div className="grid animate-pulse grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className={`${classes}`} />
      <div className={`${classes}`} />
      <div className={`${classes}`} />
      <div className={`${classes}`} />
      <div className={`${classes}`} />
      <div className={`${classes}`} />
      <div className={`${classes}`} />
      <div className={`${classes}`} />
      <div className={`${classes}`} />
    </div>
  )
}
