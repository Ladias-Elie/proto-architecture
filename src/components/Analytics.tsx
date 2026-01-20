'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ReactGA from 'react-ga4'

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize GA4 on mount
    const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-KPWGXDKRPB"

    if (MEASUREMENT_ID && !ReactGA.isInitialized) {
      ReactGA.initialize(MEASUREMENT_ID)
      console.log("GA4 Initialized with ID:", MEASUREMENT_ID)
    }
  }, [])

  useEffect(() => {
    // Track page views on route change
    if (pathname) {
      ReactGA.send({ hitType: "pageview", page: pathname })
    }
  }, [pathname])

  return null
}
