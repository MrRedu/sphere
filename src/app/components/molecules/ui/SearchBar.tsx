'use client'
import { Search } from 'lucide-react'

import { BorderTrail } from '@/components/atoms/ui/BorderTail'

interface SearchBarProps {
  query: string
  isVibrating: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = ({
  query,
  isVibrating,
  handleChange,
}: SearchBarProps) => {
  return (
    <div style={{ animation: isVibrating ? 'shake 0.3s ease-in-out' : '' }}>
      <div className="w-full min-w-[200px]">
        <div className="relative rounded-md bg-dark/70">
          <BorderTrail
            style={{
              boxShadow:
                '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
            }}
            size={0}
          />
          <input
            type="text"
            name="query"
            value={query}
            onChange={handleChange}
            className={`w-full rounded-md border border-primary/30 bg-transparent p-2 pr-12 text-sm font-semibold text-primary shadow-lg transition duration-300 placeholder:text-slate-400 focus:outline-none`}
            placeholder="ONE PIECE, Trigun, One Punch Man..."
          />
          <button
            className="absolute right-1 top-1 flex items-center rounded p-2 text-center"
            type="submit"
          >
            <Search size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
