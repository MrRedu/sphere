import Link from 'next/link'

import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  type?: 'submit' | 'reset' | 'button'
  href?: string
}

/**
 * A versatile button component that can render as either a button or a link.
 *
 * @param {ButtonProps} props - The component props.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @param {string} [props.className] - Additional CSS classes to apply to the button.
 * @param {'submit' | 'reset' | 'button'} [props.type='button'] - The button type attribute.
 * @param {string} [props.href] - If provided, the button will render as a link pointing to this URL.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} rest - Additional attributes to apply to the button element.
 *
 * @returns {JSX.Element} A JSX element representing a styled button or link.
 */
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
