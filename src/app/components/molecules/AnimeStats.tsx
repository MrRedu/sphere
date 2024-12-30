import { Fragment } from 'react'

interface AnimeStatsProps {
  stats: Stat[]
}

type Stat = {
  id: number
  field?: string
  data: string | number | React.ReactNode
  icon: React.ReactNode
}

/**
 * A component to display a list of anime stats. The stats should be an
 * array of objects with the following properties:
 *
 * - `id`: A unique identifier for the stat.
 * - `field`: The field name of the stat (optional).
 * - `data`: The data of the stat. Can be a string, a number, or any
 *   React node.
 * - `icon`: An icon to be displayed next to the stat.
 *
 * The component displays the stats in a horizontal list, with the
 * icon on the left and the field and data on the right. If the field
 * is not provided, it is not displayed. A separator is displayed
 * between each stat.
 */
export const AnimeStats = ({ stats }: AnimeStatsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {stats &&
        stats.map(({ id, field, data, icon }) => {
          const isLast = id === stats.length
          return (
            <Fragment key={id}>
              <div className="flex items-center gap-2 text-light">
                {icon}
                {field && <p className="font-semibold">{field}</p>}
                {data && <p>{data}</p>}
              </div>
              {!isLast && <span className="text-zinc-400">|</span>}
            </Fragment>
          )
        })}
    </div>
  )
}
