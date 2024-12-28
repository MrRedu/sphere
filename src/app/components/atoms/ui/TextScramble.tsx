'use client'
/* eslint-disable react-hooks/exhaustive-deps */

import { motion, type MotionProps } from 'motion/react'
import { type JSX, useEffect, useState } from 'react'

/**
 * A component that animates the scrambling of text.
 *
 * This component takes the provided `children` string and creates a
 * scrambling animation effect where each character is replaced with a
 * random character from the `characterSet` until the original text is
 * revealed. The animation can be controlled using the `duration` and
 * `speed` props.
 *
 * The `as` prop allows specifying which HTML element to render as the
 * root element of the component, defaulting to a `<p>` tag.
 *
 * The `trigger` prop controls whether the scrambling animation should
 * start automatically.
 *
 * The `onScrambleComplete` callback is invoked once the scrambling
 * animation is completed.
 *
 * @param {string} children - The text to be scrambled.
 * @param {number} [duration=0.8] - The total duration of the scramble
 * animation in seconds.
 * @param {number} [speed=0.04] - The speed of the scramble effect.
 * @param {string} [characterSet=defaultChars] - The set of characters
 * used for scrambling.
 * @param {React.ElementType} [as='p'] - The HTML element or component
 * to render.
 * @param {string} [className] - Additional CSS classes to apply.
 * @param {boolean} [trigger=true] - Whether to start the animation.
 * @param {Function} [onScrambleComplete] - Callback when scramble is complete.
 */

type TextScrambleProps = {
  children: string
  duration?: number
  speed?: number
  characterSet?: string
  as?: React.ElementType
  className?: string
  trigger?: boolean
  onScrambleComplete?: () => void
} & MotionProps

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements
  )
  const [displayText, setDisplayText] = useState(children)
  const [isAnimating, setIsAnimating] = useState(false)
  const text = children

  const scramble = async () => {
    if (isAnimating) return
    setIsAnimating(true)

    const steps = duration / speed
    let step = 0

    const interval = setInterval(() => {
      let scrambled = ''
      const progress = step / steps

      for (let index = 0; index < text.length; index++) {
        if (text[index] === ' ') {
          scrambled += ' '
          continue
        }

        scrambled +=
          progress * text.length > index
            ? text[index]
            : characterSet[Math.floor(Math.random() * characterSet.length)]
      }

      setDisplayText(scrambled)
      step++

      if (step > steps) {
        clearInterval(interval)
        setDisplayText(text)
        setIsAnimating(false)
        onScrambleComplete?.()
      }
    }, speed * 1000)
  }

  useEffect(() => {
    if (!trigger) return

    scramble()
  }, [trigger])

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  )
}
