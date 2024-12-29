import Link from 'next/link'

import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  type?: 'submit' | 'reset' | 'button'
  href?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  href,
  ...rest
}) => {
  const buttonClasses = cn(
    `flex cursor-pointer items-center justify-center gap-2 rounded border border-gray-600 px-4 py-2 text-center text-sm text-light shadow-sm transition-all hover:bg-dark hover:shadow-lg`,
    className
  )

  if (href) {
    return (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className={buttonClasses}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={buttonClasses} {...rest}>
      {children}
    </button>
  )
}
