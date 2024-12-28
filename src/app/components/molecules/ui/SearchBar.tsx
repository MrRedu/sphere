import { Search } from 'lucide-react'

import { BorderTrail } from '../../atoms/ui/BorderTail'

export const SearchBar = () => {
  return (
    <form>
      <div className="w-full min-w-[200px] max-w-sm">
        <div className="relative rounded-md bg-dark/70">
          <BorderTrail
            style={{
              boxShadow:
                '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
            }}
            size={0}
          />
          <input
            className="w-full rounded-md border border-primary bg-transparent p-2 pr-12 text-sm font-semibold text-primary shadow-lg transition duration-300 placeholder:text-slate-400"
            placeholder="ONE PIECE, Trigun, One Punch Man..."
          />
          <button
            className="absolute right-1 top-1 flex items-center rounded p-2 text-center"
            type="button"
          >
            <Search size={14} />
          </button>
        </div>
      </div>
    </form>
  )
}
