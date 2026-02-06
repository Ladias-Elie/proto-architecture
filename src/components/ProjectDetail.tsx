'use client'

import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { cn } from "@/lib/utils"
import { ProjectCarousel } from "@/components/ProjectCarousel"
import type { Project } from "@/data/projects"

interface ProjectDetailProps {
  project: Project
  nextProject?: Project
  prevProject?: Project
}

export default function ProjectDetail({ project, nextProject, prevProject }: ProjectDetailProps) {
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  })

  const infoItems = [
    { label: 'Programme', value: project.category },
    { label: 'Lieu', value: project.location },
    { label: 'Mission', value: project.type },
    { label: 'Année', value: project.year },
    { label: 'Surface', value: project.surfaces },
    { label: 'Budget', value: project.cost },
  ].filter(item => item.value && item.value !== '-- m²' && item.value !== '-- € HT')

  return (
    <main className="pt-24 pb-24 bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${typeof project.coverImage === 'string' ? project.coverImage : project.coverImage.src})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-8 pb-12">
            <ScrollAnimate animation="fade-up">
              <span className="font-mono text-[0.7rem] font-medium tracking-[0.15em] uppercase text-accent mb-4 block">
                {project.year}
              </span>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight leading-tight max-w-4xl">
                {project.title}
              </h1>
            </ScrollAnimate>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        {/* Info Grid */}
        <div ref={infoRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 pb-16 border-b border-border">
          {infoItems.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "transform transition-all duration-500",
                infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: infoVisible ? `${index * 75}ms` : "0ms" }}
            >
              <h3 className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground mb-2">
                {item.label}
              </h3>
              <p className="font-sans text-sm text-foreground leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Images Grid */}
        {(project.images.length > 0 || project.plans.length > 0) && (
          <div className="mb-20">
            <div className={`grid gap-8 ${
              project.images.length > 0 && project.plans.length > 0
                ? 'lg:grid-cols-2'
                : 'lg:grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {/* Photos Carousel */}
              {project.images.length > 0 && (
                <ScrollAnimate animation="fade-up">
                  <ProjectCarousel images={project.images} title={project.title} type="Photo" />
                </ScrollAnimate>
              )}

              {/* Plans Carousel */}
              {project.plans.length > 0 && (
                <ScrollAnimate animation="fade-up" delay={150}>
                  <ProjectCarousel images={project.plans} title={project.title} type="Plan" />
                </ScrollAnimate>
              )}
            </div>
          </div>
        )}

        {/* Description */}
        <ScrollAnimate animation="fade-up">
          <div className="max-w-3xl mb-16 prose prose-lg prose-neutral dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-p:font-sans prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
            <ReactMarkdown>
              {project.description}
            </ReactMarkdown>
          </div>
        </ScrollAnimate>

        {/* Credits */}
        <ScrollAnimate animation="fade-up">
          <div className="max-w-3xl space-y-4 pt-8 border-t border-border">
            {project.collaboration && (
              <p className="font-sans text-sm text-muted-foreground">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] mr-2">Collaboration</span>
                {project.collaborationUrl ? (
                  <a
                    href={project.collaborationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    {project.collaboration}
                  </a>
                ) : (
                  <span className="text-foreground">{project.collaboration}</span>
                )}
              </p>
            )}

            {project.imgCredit && (
              <p className="font-sans text-sm text-muted-foreground">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] mr-2">Photos</span>
                {project.imgCreditUrl ? (
                  <a
                    href={project.imgCreditUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    {project.imgCredit}
                  </a>
                ) : (
                  <span className="text-foreground">{project.imgCredit}</span>
                )}
              </p>
            )}
          </div>
        </ScrollAnimate>

        {/* Navigation */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-2 gap-8">
            {prevProject ? (
              <Link
                href={`/projets/${prevProject.slug}`}
                className="group"
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground mb-2 block">
                  ← Projet précédent
                </span>
                <span className="font-display text-lg font-medium group-hover:text-accent transition-colors line-clamp-1">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projets/${nextProject.slug}`}
                className="group text-right"
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground mb-2 block">
                  Projet suivant →
                </span>
                <span className="font-display text-lg font-medium group-hover:text-accent transition-colors line-clamp-1">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
