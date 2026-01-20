'use client'

import { useState, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import GridOverlay from "@/components/GridOverlay"
import { Analytics } from '@/components/Analytics'

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="relative">
          <GridOverlay />
          {children}
        </div>
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  )
}
