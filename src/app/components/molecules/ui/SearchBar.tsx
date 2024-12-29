'use client'
import { Search } from 'lucide-react'

import { BorderTrail } from '@/components/atoms/ui/BorderTail'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const SearchBar = () => {
  const [query, setQuery] = useState<string>('')
  const [isVibrating, setIsVibrating] = useState<boolean>(false)
  const route = useRouter()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setQuery(value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (query.length <= 2) {
      setIsVibrating(true)
      setTimeout(() => {
        setIsVibrating(false)
      }, 500)
      return
    }

    route.push(`/animes/search/${query}`)
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{ animation: isVibrating ? 'shake 0.3s ease-in-out' : '' }}
    >
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
            type="text"
            name="query"
            value={query}
            onChange={handleChange}
            className={`w-full rounded-md border border-primary bg-transparent p-2 pr-12 text-sm font-semibold text-primary shadow-lg transition duration-300 placeholder:text-slate-400 focus:outline-none`}
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
    </form>
  )
}
