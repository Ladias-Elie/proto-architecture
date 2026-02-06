'use client'

import { useState } from "react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { cn } from "@/lib/utils"

interface Project {
  title: string
  slug: string
  category: string
  location: string
  year: string
  coverImage: string | { src: string }
}

interface ProjectsGridProps {
  projects: Project[]
}

// Simplified filter categories
const filterCategories = [
  { id: 'all', label: 'Tous' },
  { id: 'renovation', label: 'Rénovation' },
  { id: 'mobilier', label: 'Mobilier' },
]

function getFilterCategory(category: string): string {
  const lowerCategory = category.toLowerCase()
  if (lowerCategory.includes('mobilier')) return 'mobilier'
  return 'renovation'
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState('all')
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.05,
    rootMargin: '0px 0px -100px 0px',
  })

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => getFilterCategory(p.category) === activeFilter)

  return (
    <div>
      {/* Filter Tabs */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                "relative px-5 py-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.12em] transition-all duration-300",
                activeFilter === cat.id
                  ? "text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {/* Background pill */}
              <span
                className={cn(
                  "absolute inset-0 bg-accent transition-all duration-300",
                  activeFilter === cat.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                )}
              />
              <span className="relative">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Active filter indicator line */}
        <div className="mt-4 h-px bg-border relative">
          <div
            className="absolute top-0 h-px bg-accent transition-all duration-500"
            style={{
              width: `${100 / filterCategories.length}%`,
              left: `${filterCategories.findIndex(c => c.id === activeFilter) * (100 / filterCategories.length)}%`,
            }}
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filteredProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projets/${project.slug}`}
            className={cn(
              "group block transform transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            )}
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
            }}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-4">
              <img
                src={typeof project.coverImage === 'string' ? project.coverImage : project.coverImage.src}
                alt={`${project.title} - Projet d'architecture ${project.category} à ${project.location}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />

              {/* Corner accents on hover */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

              {/* Year badge */}
              <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1">
                <span className="font-mono text-[0.6rem] tracking-wider">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="font-display text-lg font-medium leading-snug tracking-tight group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
                  {getFilterCategory(project.category) === 'mobilier' ? 'Mobilier' : 'Rénovation'}
                </span>
                <span className="text-xs text-muted-foreground font-sans">
                  {project.location.split(',')[0]}
                </span>
              </div>

              {/* View project link */}
              <div className="pt-2 overflow-hidden">
                <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-accent transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Voir le projet
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground font-sans">
            Aucun projet dans cette catégorie.
          </p>
        </div>
      )}
    </div>
  )
}
