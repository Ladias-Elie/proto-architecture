'use client'

import { useState, useEffect } from 'react'
import type { StaticImageData } from 'next/image'
import type { CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

export function ProjectCarousel({
  images,
  title,
  type
}: {
  images: (string | StaticImageData)[]
  title: string
  type: string
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [modalCarouselApi, setModalCarouselApi] = useState<CarouselApi>()

  useEffect(() => {
    if (modalCarouselApi && isModalOpen) {
      modalCarouselApi.scrollTo(selectedImageIndex)
    }
  }, [modalCarouselApi, isModalOpen, selectedImageIndex])

  if (images.length === 0) {
    return (
      <div className="aspect-[4/3] bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-sm">
          {type === 'Photo' ? 'Aucune photo disponible' : 'Plans à venir'}
        </p>
      </div>
    )
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const handleModalContentClick = (e: React.MouseEvent) => {
    // Fermer la modal sauf si on clique sur les boutons de navigation
    const target = e.target as HTMLElement
    if (!target.closest('button')) {
      setIsModalOpen(false)
    }
  }

  return (
    <>
      <Carousel
        className="w-full group"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className="aspect-[4/3] bg-background flex items-center justify-center cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={typeof image === 'string' ? image : image.src}
                  alt={`${title} - ${type} ${index + 1}`}
                  className="w-auto h-auto max-w-full max-h-full object-contain hover:opacity-90 transition-opacity"
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

      {/* Modal pour afficher l'image en grand */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] p-0 bg-background/0 backdrop-blur-sm border-0 [&>button]:hidden"
          onClick={handleModalContentClick}
        >
          <DialogTitle className="sr-only">
            {title} - {type}
          </DialogTitle>
          <Carousel
            opts={{
              loop: true,
            }}
            setApi={setModalCarouselApi}
            className="w-full h-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center p-4 min-h-[80vh]">
                    <img
                      src={typeof image === 'string' ? image : image.src}
                      alt={`${title} - ${type} ${index + 1}`}
                      className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </>
            )}
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  )
}
