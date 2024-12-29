'use client'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { BorderTrail } from '@/components/atoms/ui/BorderTail'
import { SearchBar } from '@/components/molecules/ui/SearchBar'

const genres = [
  { label: 'All', value: '' },
  { label: 'Action', value: 'Action' },
  { label: 'Adventure', value: 'Adventure' },
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Drama', value: 'Drama' },
  { label: 'Ecchi', value: 'Ecchi' },
  { label: 'Fantasy', value: 'Fantasy' },
  { label: 'Horror', value: 'Horror' },
  { label: 'Mahou Shoujo', value: 'Mahou Shoujo' },
  { label: 'Mecha', value: 'Mecha' },
  { label: 'Music', value: 'Music' },
  { label: 'Mystery', value: 'Mystery' },
  { label: 'Psychological', value: 'Psychological' },
  { label: 'Romance', value: 'Romance' },
  { label: 'Sci-Fi', value: 'Sci-Fi' },
  { label: 'Slice of Life', value: 'Slice of Life' },
  { label: 'Sports', value: 'Sports' },
  { label: 'Supernatural', value: 'Supernatural' },
  { label: 'Thriller', value: 'Thriller' },
]

const statuses = [
  { label: 'All', value: '' },
  { label: 'Finished', value: 'FINISHED' },
  { label: 'Releasing', value: 'RELEASING' },
  { label: 'Not yet released', value: 'NOT_YET_RELEASED' },
  { label: 'Cancelled', value: 'CANCELLED' },
  { label: 'Hiatus', value: 'HIATUS' },
]

const scores = [
  { label: 'Ascending', value: 'SCORE' },
  { label: 'Descending', value: 'SCORE_DESC' },
]

interface FiltersProps {
  filters: {
    mediaGenre2: string
    status: string
    sort: string
    search: string
  }
  onFilterChange: (filters: {
    mediaGenre2: string
    status: string
    sort: string
    search: string
  }) => void
}
interface DropDownItem {
  label: string
  value: string
}

interface DropDownProps {
  title: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  items: DropDownItem[]
}

const DropDown = ({ title, value, onChange, items }: DropDownProps) => {
  return (
    <div className="w-full max-w-[200px]">
      <label className="mb-1 block font-semibold">{title}</label>

      <div className="relative rounded-md">
        <BorderTrail
          style={{
            boxShadow:
              '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
          }}
          size={0}
        />
        <select
          value={value || ''}
          onChange={onChange}
          className="w-full cursor-pointer appearance-none rounded-md border border-primary/30 bg-dark/70 py-2 pl-3 pr-8 text-sm text-slate-200 focus:outline-none"
        >
          {items.map(item => (
            <option key={item.value} value={item.value || ''}>
              {item.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 ml-1 h-5 w-5 text-primary" />
      </div>
    </div>
  )
}

export const Filters = ({ filters, onFilterChange }: FiltersProps) => {
  const [selectedGenre, setSelectedGenre] = useState(filters.mediaGenre2)
  const [selectedStatus, setSelectedStatus] = useState(filters.status)
  const [selectedSort, setSelectedSort] = useState(filters.sort)
  const [query, setQuery] = useState(filters.search)
  const [isVibrating, setIsVibrating] = useState<boolean>(false)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setQuery(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (query.length < 3 && query !== '') {
      setIsVibrating(true)
      setTimeout(() => {
        setIsVibrating(false)
      }, 500)
      return
    }

    onFilterChange({
      mediaGenre2: selectedGenre,
      status: selectedStatus,
      sort: selectedSort,
      search: query,
    })
  }

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = event.target.value
    setSelectedGenre(genre)
    onFilterChange({
      mediaGenre2: genre,
      status: selectedStatus,
      sort: selectedSort,
      search: query,
    })
  }

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value
    setSelectedStatus(status)
    onFilterChange({
      mediaGenre2: selectedGenre,
      status,
      sort: selectedSort,
      search: query,
    })
  }

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value
    setSelectedSort(sort)
    onFilterChange({
      mediaGenre2: selectedGenre,
      status: selectedStatus,
      sort,
      search: query,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-center justify-between gap-2 md:gap-4"
    >
      <div className="flex items-center gap-4">
        <DropDown
          title="Genre"
          value={selectedGenre}
          onChange={handleGenreChange}
          items={genres}
        />
        <DropDown
          title="Status"
          value={selectedStatus}
          onChange={handleStatusChange}
          items={statuses}
        />
        <DropDown
          title="Score"
          value={selectedSort}
          onChange={handleSortChange}
          items={scores}
        />
      </div>

      <div className="w-full lg:max-w-[320px]">
        <label className="mb-1 block font-semibold">Search</label>
        <SearchBar
          query={query}
          isVibrating={isVibrating}
          handleChange={handleSearchChange}
        />
      </div>
    </form>
  )
}
