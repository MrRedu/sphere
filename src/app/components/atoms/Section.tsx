import { JSX } from 'react'

type SectionProps = {
  children: React.ReactNode
  className?: string
  component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

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
