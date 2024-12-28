import React from 'react'

import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  type?: 'submit' | 'reset' | 'button'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  ...rest
}) => {
  return (
    <button
      type={type}
      className={cn(
        `flex cursor-pointer items-center justify-center gap-2 rounded border border-gray-600 px-4 py-2 text-center text-sm text-light shadow-sm transition-all hover:bg-dark hover:shadow-lg`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
