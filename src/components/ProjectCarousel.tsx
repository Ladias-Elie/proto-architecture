'use client'

import type { StaticImageData } from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ProjectCarousel({
  images,
  title,
  type
}: {
  images: (string | StaticImageData)[]
  title: string
  type: string
}) {
  if (images.length === 0) {
    return (
      <div className="aspect-[4/3] bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-sm">
          {type === 'Photo' ? 'Aucune photo disponible' : 'Plans à venir'}
        </p>
      </div>
    )
  }

  return (
    <Carousel className="w-full group">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-[4/3] bg-background flex items-center justify-center">
              <img
                src={typeof image === 'string' ? image : image.src}
                alt={`${title} - ${type} ${index + 1}`}
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious variant="ghost" className="left-4 h-10 w-10 hover:bg-background/50 transition-colors" />
          <CarouselNext variant="ghost" className="right-4 h-10 w-10 hover:bg-background/50 transition-colors" />
        </>
      )}
    </Carousel>
  )
}
