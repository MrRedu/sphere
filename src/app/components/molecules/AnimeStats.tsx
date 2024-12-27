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

export const AnimeStats = ({ stats }: AnimeStatsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {stats.map(({ id, field, data, icon }) => {
        const isLast = id === stats.length
        return (
          <Fragment key={id}>
            <div className="flex items-center gap-2 text-light">
              {icon}
              {field && <p className="font-semibold">{field}</p>}
              <p>{data}</p>
            </div>
            {!isLast && <span className="text-zinc-400">|</span>}
          </Fragment>
        )
      })}
    </div>
  )
}
