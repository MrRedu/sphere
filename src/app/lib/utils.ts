import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalize = (s: string) =>
  s?.charAt(0).toUpperCase() + s?.slice(1).toLocaleLowerCase()

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

export function hideEmail(email: string) {
  const regex = /^(.)(.*?)(.)(@.*)$/
  return email?.replace(regex, (match, p1, p2, p3, p4) => {
    return p1 + '*'.repeat(p2.length) + p3 + p4
  })
}
