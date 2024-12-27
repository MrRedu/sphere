'use client'
import { motion, type Transition } from 'motion/react'

import { cn } from '@/lib/utils'

type BorderTrailProps = {
  className?: string
  size?: number
  transition?: Transition
  delay?: number
  onAnimationComplete?: () => void
  style?: React.CSSProperties
}

/**
 * Creates a border trail animation effect.
 *
 * This component renders a border trail animation which
 * follows the shape of its parent element. The animation
 * is a continuous loop and can be customized by passing
 * in a transition object.
 *
 * @param {Object} props
 * @prop {string} className - The class name to apply to the animation element.
 * @prop {number} size - The size of the animation element.
 * @prop {Object} transition - The animation transition object.
 * @prop {number} delay - The animation delay.
 * @prop {Function} onAnimationComplete - The callback function to call when the animation is complete.
 * @prop {Object} style - The inline styles to apply to the animation element.
 */
export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear',
  }

  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  )
}
