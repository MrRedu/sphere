'use client'
import {
  AnimatePresence,
  motion,
  type Transition,
  type Variants,
} from 'motion/react'
import { Children, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

/**
 * A component that loops through an array of children and displays one at a time.
 *
 * This component will loop through the children every `interval` seconds, and
 * will use the `transition` prop to animate the transition between the previous
 * and next children.
 *
 * The `variants` prop can be used to override the animation variants used by the
 * component. The default animation variants are:
 *
 * - `initial`: `y: 20, opacity: 0`
 * - `animate`: `y: 0, opacity: 1`
 * - `exit`: `y: -20, opacity: 0`
 *
 * The `onIndexChange` prop can be used to be notified whenever the index of the
 * current child changes.
 *
 * @example
 * <TextLoop
 *   interval={5}
 *   transition={{ duration: 0.3 }}
 *   onIndexChange={(index) => console.log(index)}
 * >
 *   <span>Child 1</span>
 *   <span>Child 2</span>
 *   <span>Child 3</span>
 * </TextLoop>
 *
 * @param {React.ReactNode[]} children - The children to loop through.
 * @param {string} [className] - The class name to apply to the wrapper element.
 * @param {number} [interval=5] - The interval in seconds at which to loop through the children.
 * @param {Transition} [transition={{ duration: 0.3 }}] - The transition to use when animating between children.
 * @param {Variants} [variants] - The animation variants to use. If not provided, the default variants will be used.
 * @param {(index: number) => void} [onIndexChange] - A callback to be called whenever the index of the current child changes.
 */

type TextLoopProps = {
  children: React.ReactNode[]
  className?: string
  interval?: number
  transition?: Transition
  variants?: Variants
  onIndexChange?: (index: number) => void
}
export function TextLoop({
  children,
  className,
  interval = 5,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = Children.toArray(children)

  useEffect(() => {
    const intervalMs = interval * 1000

    const timer = setInterval(() => {
      setCurrentIndex(current => {
        const next = (current + 1) % items.length
        onIndexChange?.(next)
        return next
      })
    }, intervalMs)
    return () => clearInterval(timer)
  }, [items.length, interval, onIndexChange])

  const motionVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  }

  return (
    <div className={cn('relative inline-block whitespace-nowrap', className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants || motionVariants}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
