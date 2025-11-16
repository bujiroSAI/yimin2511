'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'fade',
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    fade: '',
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${directionClasses[direction]}`
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

