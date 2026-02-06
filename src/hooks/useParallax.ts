'use client'

import { useEffect, useState, RefObject } from 'react'

interface UseParallaxOptions {
  speed?: number // 0.1 = subtle, 0.5 = dramatic
  direction?: 'up' | 'down'
}

export function useParallax<T extends HTMLElement>(
  ref: RefObject<T>,
  options: UseParallaxOptions = {}
) {
  const { speed = 0.15, direction = 'up' } = options
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Only calculate when element is in view
      if (rect.bottom < 0 || rect.top > windowHeight) {
        return
      }

      // Calculate how far through the viewport the element is
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height)
      const parallaxOffset = (scrollProgress - 0.5) * speed * 100

      setOffset(direction === 'up' ? -parallaxOffset : parallaxOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref, speed, direction])

  return offset
}
