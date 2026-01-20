'use client'

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }, 100)
            }}
            className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity"
          >
            prôto.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/a-propos"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }, 100)
              }}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                isActive("/a-propos")
                  ? "text-foreground border-b-2 border-accent pb-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              À propos
            </Link>
            <Link
              href="/projets"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }, 100)
              }}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                isActive("/projets")
                  ? "text-foreground border-b-2 border-accent pb-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projets
            </Link>
            <Button
              onClick={() => {
                router.push("/")
                setTimeout(() => {
                  trackEvent({
                    category: "CTA",
                    action: "Click",
                    label: "Header Contact Button",
                  })
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }, 100)
              }}
              size="sm"
              className="font-semibold uppercase tracking-wider"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t-2 border-border">
            <Link
              href="/a-propos"
              onClick={() => {
                setIsOpen(false)
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }, 100)
              }}
              className={`block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider ${
                isActive("/a-propos") ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              À propos
            </Link>
            <Link
              href="/projets"
              onClick={() => {
                setIsOpen(false)
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }, 100)
              }}
              className={`block w-full text-left py-2 text-sm font-semibold uppercase tracking-wider ${
                isActive("/projets") ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Projets
            </Link>
            <Button
              onClick={() => {
                router.push("/")
                setIsOpen(false)
                setTimeout(() => {
                  trackEvent({
                    category: "CTA",
                    action: "Click",
                    label: "Mobile Menu Contact Button",
                  })
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }, 100)
              }}
              className="w-full font-semibold uppercase tracking-wider"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
