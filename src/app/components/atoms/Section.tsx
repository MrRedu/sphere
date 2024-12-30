import { JSX } from 'react'

type SectionProps = {
  children: React.ReactNode
  className?: string
  component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

/**
 * A simple section component that wraps its children in a div with a
 * consistent horizontal padding. The component will use the provided
 * className, if any, and apply the following default styles:
 *
 * - `px-5` on small screens
 * - `md:px-8` on medium screens
 * - `lg:px-12` on large screens
 * - `2xl:px-16` on extra large screens
 *
 * The component will also use the provided component, if any, or a `div`
 * as a fallback.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render
 * inside the section.
 * @param {string} [props.className] - The CSS class name to apply to the
 * component.
 * @param {React.ComponentType<any>} [props.component=div] - The component to
 * use for the section, rather than a `div`.
 *
 * @returns {JSX.Element} A JSX element that represents the section.
 */
export default function Section({
  children,
  className,
  component: Component = 'div',
}: SectionProps) {
  return (
    <Component className={`px-5 md:px-8 lg:px-12 2xl:px-16 ${className}`}>
      {children}
    </Component>
  )
}
