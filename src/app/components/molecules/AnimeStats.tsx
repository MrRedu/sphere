import { Fragment } from 'react'

/**
 * A component that displays a list of anime stats. The stats are given as a list
 * of objects, each with an id, field, data, and icon. The id is used as the key
 * for the fragment, the field is the name of the stat, the data is the value of
 * the stat, and the icon is the icon to display next to the stat. The stats are
 * displayed in a flex container with a gap of 4 between each stat. The last stat
 * is not followed by a separator.
 *
 * @example
 * // Display a list of anime stats
 * <AnimeStats
 *   stats={[
 *     {
 *       id: 1,
 *       field: "Episodes",
 *       data: 24,
 *       icon: <FileVideo />,
 *     },
 *     {
 *       id: 2,
 *       field: "Episode duration",
 *       data: "24 minutes",
 *       icon: <Clock />,
 *     },
 *     {
 *       id: 3,
 *       field: "Origin",
 *       data: (
 *         <ReactCountryFlag
 *           countryCode="JP"
 *           svg
 *           style={{ width: "2em", height: "2em" }}
 *         />
 *       ),
 *       icon: <Globe />,
 *     },
 *   ]}
 * />
 */

interface AnimeStatsProps {
  stats: Stat[]
}

type Stat = {
  id: number
  field?: string
  data: string | number | React.ReactNode
  icon: React.ReactNode
}

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
