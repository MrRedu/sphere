'use client'

import { UserCircle } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'

import { SearchBar } from '@/components/molecules/ui/SearchBar'
import { useClickOutside } from '@/hooks/useClickOutside'

const links = [
  { name: 'Profile', href: '/profile' },
  { name: 'Sign out', href: '#' },
]

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => {
    setIsOpen(previous => !previous)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useClickOutside(dropdownRef, closeMenu)

  return (
    <div className="relative flex items-center gap-4" ref={dropdownRef}>
      <SearchBar />
      <div>
        <button
          type="button"
          className="grid place-items-center"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          <UserCircle size={40} />
        </button>
      </div>

      {isOpen && (
        <div
          className="focus:outline-hidden absolute right-0 top-12 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
