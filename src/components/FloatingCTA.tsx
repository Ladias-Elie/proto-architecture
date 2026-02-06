'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { X, ArrowRight, ArrowLeft, Check, Home, Building2, Hammer, MapPin, Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import emailjs from '@emailjs/browser'
import { trackEvent } from '@/lib/analytics'
import { cn } from '@/lib/utils'

// Form Schema
const projectFormSchema = z.object({
  // Step 1: Type de projet
  projectType: z.enum(['appartement', 'maison', 'commerce', 'autre'], {
    required_error: 'Sélectionnez un type de projet',
  }),
  renovationType: z.enum(['complete', 'partielle', 'extension', 'neuf'], {
    required_error: 'Sélectionnez un type de rénovation',
  }),
  // Step 2: Surface & Budget
  surface: z.string().min(1, 'Indiquez la surface'),
  budget: z.enum(['moins-50k', '50k-100k', '100k-200k', '200k-plus', 'indetermine'], {
    required_error: 'Sélectionnez une fourchette de budget',
  }),
  // Step 3: Localisation & Délai
  location: z.string().min(2, 'Indiquez la localisation'),
  timeline: z.enum(['urgent', '3-6mois', '6-12mois', 'plus-12mois', 'flexible'], {
    required_error: 'Sélectionnez un délai',
  }),
  // Step 4: Coordonnées
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  message: z.string().optional(),
})

type ProjectFormData = z.infer<typeof projectFormSchema>

const STEPS = [
  { id: 1, title: 'Votre projet', subtitle: 'Type de bien & travaux' },
  { id: 2, title: 'Dimensions', subtitle: 'Surface & budget' },
  { id: 3, title: 'Planning', subtitle: 'Lieu & délai' },
  { id: 4, title: 'Contact', subtitle: 'Vos coordonnées' },
]

// Selection Card Component
const SelectionCard = ({
  selected,
  onClick,
  icon: Icon,
  label,
  description,
}: {
  selected: boolean
  onClick: () => void
  icon: React.ElementType
  label: string
  description?: string
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'group relative w-full p-4 text-left border-2 transition-all duration-300',
      'hover:border-foreground',
      selected
        ? 'border-foreground bg-foreground text-background'
        : 'border-border bg-background'
    )}
  >
    <div className="flex items-start gap-3">
      <div
        className={cn(
          'p-2 transition-colors duration-300',
          selected ? 'bg-background text-foreground' : 'bg-muted text-foreground'
        )}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-semibold text-sm uppercase tracking-wide block">
          {label}
        </span>
        {description && (
          <span
            className={cn(
              'text-xs mt-1 block transition-colors',
              selected ? 'text-background/70' : 'text-muted-foreground'
            )}
          >
            {description}
          </span>
        )}
      </div>
      <div
        className={cn(
          'w-5 h-5 border-2 flex items-center justify-center transition-all duration-300',
          selected ? 'border-background bg-background' : 'border-border'
        )}
      >
        {selected && <Check className="w-3 h-3 text-foreground" />}
      </div>
    </div>
  </button>
)

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      projectType: undefined,
      renovationType: undefined,
      surface: '',
      budget: undefined,
      location: '',
      timeline: undefined,
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300
      if (scrolled && !isDismissed) {
        setIsVisible(true)
      } else if (!scrolled) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setCurrentStep(1)
        setIsSuccess(false)
        form.reset()
      }, 300)
    }
  }, [isOpen, form])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  const validateCurrentStep = async () => {
    const fieldsToValidate: (keyof ProjectFormData)[][] = [
      ['projectType', 'renovationType'],
      ['surface', 'budget'],
      ['location', 'timeline'],
      ['name', 'email'],
    ]

    const result = await form.trigger(fieldsToValidate[currentStep - 1])
    return result
  }

  const handleNext = async () => {
    const isValid = await validateCurrentStep()
    if (isValid && currentStep < 4) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true)

    try {
      const SERVICE_ID = 'service_af8lfrq'
      const TEMPLATE_ID = 'template_etivnz8'
      const PUBLIC_KEY = 'fiW-E1g_xGIAu6iAv'

      const projectTypeLabels: Record<string, string> = {
        appartement: 'Appartement',
        maison: 'Maison',
        commerce: 'Commerce',
        autre: 'Autre',
      }

      const renovationTypeLabels: Record<string, string> = {
        complete: 'Rénovation complète',
        partielle: 'Rénovation partielle',
        extension: 'Extension',
        neuf: 'Construction neuve',
      }

      const budgetLabels: Record<string, string> = {
        'moins-50k': 'Moins de 50 000€',
        '50k-100k': '50 000€ - 100 000€',
        '100k-200k': '100 000€ - 200 000€',
        '200k-plus': 'Plus de 200 000€',
        indetermine: 'À déterminer',
      }

      const timelineLabels: Record<string, string> = {
        urgent: 'Urgent (< 3 mois)',
        '3-6mois': '3 à 6 mois',
        '6-12mois': '6 à 12 mois',
        'plus-12mois': 'Plus de 12 mois',
        flexible: 'Flexible',
      }

      const formattedMessage = `
NOUVELLE DEMANDE DE PROJET

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 TYPE DE PROJET
• Bien : ${projectTypeLabels[data.projectType]}
• Travaux : ${renovationTypeLabels[data.renovationType]}

📐 DIMENSIONS
• Surface : ${data.surface} m²
• Budget : ${budgetLabels[data.budget]}

📍 PLANNING
• Localisation : ${data.location}
• Délai souhaité : ${timelineLabels[data.timeline]}

👤 CONTACT
• Nom : ${data.name}
• Email : ${data.email}
• Téléphone : ${data.phone || 'Non renseigné'}

💬 MESSAGE
${data.message || 'Aucun message complémentaire'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Envoyé depuis le formulaire multi-étapes
      `.trim()

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: formattedMessage,
          to_name: 'Proto Architecture',
        },
        PUBLIC_KEY
      )

      trackEvent({
        category: 'Form',
        action: 'Submit Project Form',
        label: 'Floating CTA Multi-Step',
      })

      setIsSuccess(true)
    } catch (error) {
      console.error("Erreur d'envoi", error)
      toast({
        title: 'Erreur',
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const progress = (currentStep / 4) * 100

  return (
    <>
      {/* Floating CTA Button */}
      <div
        className={cn(
          'fixed bottom-6 right-6 z-40 transition-all duration-500',
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-20 opacity-0 pointer-events-none'
        )}
      >
        <div className="relative group">
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 w-6 h-6 bg-muted border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-foreground hover:text-background z-10"
            aria-label="Fermer"
          >
            <X className="w-3 h-3" />
          </button>

          {/* Main CTA */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-foreground text-background px-6 py-4 font-semibold uppercase tracking-wider text-sm flex items-center gap-3 hover:bg-accent transition-colors duration-300 shadow-2xl"
          >
            {/* Pulse indicator */}
            <span className="absolute -left-1 -top-1 w-3 h-3 bg-accent">
              <span className="absolute inset-0 bg-accent animate-ping opacity-75" />
            </span>

            <MessageSquare className="w-5 h-5" />
            <span>Parlons de votre projet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Multi-Step Form Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[540px] p-0 gap-0 overflow-hidden border-2 border-foreground">
          {!isSuccess ? (
            <>
              {/* Header with Progress */}
              <DialogHeader className="p-6 pb-4 border-b-2 border-border">
                <div className="flex items-center justify-between mb-4">
                  <DialogTitle className="text-2xl font-bold tracking-tight">
                    {STEPS[currentStep - 1].title}
                  </DialogTitle>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    {currentStep}/4
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {STEPS[currentStep - 1].subtitle}
                </p>

                {/* Progress Bar */}
                <div className="mt-4 h-1 bg-muted overflow-hidden">
                  <div
                    className="h-full bg-foreground transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Step Indicators */}
                <div className="flex gap-2 mt-3">
                  {STEPS.map((step) => (
                    <div
                      key={step.id}
                      className={cn(
                        'flex-1 h-1 transition-colors duration-300',
                        step.id <= currentStep ? 'bg-foreground' : 'bg-muted'
                      )}
                    />
                  ))}
                </div>
              </DialogHeader>

              {/* Form Content */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="p-6 min-h-[320px]">
                    {/* Step 1: Type de projet */}
                    <div
                      className={cn(
                        'space-y-4 transition-all duration-300',
                        currentStep === 1
                          ? 'opacity-100 translate-x-0'
                          : 'hidden'
                      )}
                    >
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-semibold mb-3 block">
                              Type de bien
                            </FormLabel>
                            <FormControl>
                              <div className="grid grid-cols-2 gap-3">
                                <SelectionCard
                                  selected={field.value === 'appartement'}
                                  onClick={() => field.onChange('appartement')}
                                  icon={Building2}
                                  label="Appartement"
                                />
                                <SelectionCard
                                  selected={field.value === 'maison'}
                                  onClick={() => field.onChange('maison')}
                                  icon={Home}
                                  label="Maison"
                                />
                                <SelectionCard
                                  selected={field.value === 'commerce'}
                                  onClick={() => field.onChange('commerce')}
                                  icon={Building2}
                                  label="Commerce"
                                />
                                <SelectionCard
                                  selected={field.value === 'autre'}
                                  onClick={() => field.onChange('autre')}
                                  icon={Hammer}
                                  label="Autre"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="renovationType"
                        render={({ field }) => (
                          <FormItem className="mt-6">
                            <FormLabel className="text-xs uppercase tracking-widest font-semibold mb-3 block">
                              Type de travaux
                            </FormLabel>
                            <FormControl>
                              <div className="grid grid-cols-2 gap-3">
                                <SelectionCard
                                  selected={field.value === 'complete'}
                                  onClick={() => field.onChange('complete')}
                                  icon={Hammer}
                                  label="Rénovation complète"
                                />
                                <SelectionCard
                                  selected={field.value === 'partielle'}
                                  onClick={() => field.onChange('partielle')}
                                  icon={Hammer}
                                  label="Rénovation partielle"
                                />
                                <SelectionCard
                                  selected={field.value === 'extension'}
                                  onClick={() => field.onChange('extension')}
                                  icon={Home}
                                  label="Extension"
                                />
                                <SelectionCard
                                  selected={field.value === 'neuf'}
                                  onClick={() => field.onChange('neuf')}
                                  icon={Building2}
                                  label="Construction neuve"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Step 2: Surface & Budget */}
                    <div
                      className={cn(
                        'space-y-6 transition-all duration-300',
                        currentStep === 2
                          ? 'opacity-100 translate-x-0'
                          : 'hidden'
                      )}
                    >
                      <FormField
                        control={form.control}
                        name="surface"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-semibold">
                              Surface estimée (m²)
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  type="number"
                                  placeholder="Ex: 80"
                                  {...field}
                                  className="border-2 border-border focus:border-foreground transition-colors bg-background pr-12"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                                  m²
                                </span>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-semibold mb-3 block">
                              Budget envisagé
                            </FormLabel>
                            <FormControl>
                              <div className="space-y-2">
                                {[
                                  { value: 'moins-50k', label: 'Moins de 50 000€' },
                                  { value: '50k-100k', label: '50 000€ - 100 000€' },
                                  { value: '100k-200k', label: '100 000€ - 200 000€' },
                                  { value: '200k-plus', label: 'Plus de 200 000€' },
                                  { value: 'indetermine', label: 'À déterminer ensemble' },
                                ].map((option) => (
                                  <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => field.onChange(option.value)}
                                    className={cn(
                                      'w-full p-3 text-left border-2 transition-all duration-200 flex items-center justify-between',
                                      field.value === option.value
                                        ? 'border-foreground bg-foreground text-background'
                                        : 'border-border hover:border-foreground'
                                    )}
                                  >
                                    <span className="font-medium text-sm">{option.label}</span>
                                    {field.value === option.value && (
                                      <Check className="w-4 h-4" />
                                    )}
                                  </button>
                                ))}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Step 3: Localisation & Délai */}
                    <div
                      className={cn(
                        'space-y-6 transition-all duration-300',
                        currentStep === 3
                          ? 'opacity-100 translate-x-0'
                          : 'hidden'
                      )}
                    >
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-semibold">
                              <MapPin className="w-4 h-4 inline mr-2" />
                              Localisation du projet
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ex: Lyon 6ème, Villeurbanne..."
                                {...field}
                                className="border-2 border-border focus:border-foreground transition-colors bg-background"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-semibold mb-3 block">
                              <Calendar className="w-4 h-4 inline mr-2" />
                              Délai souhaité pour démarrer
                            </FormLabel>
                            <FormControl>
                              <div className="space-y-2">
                                {[
                                  { value: 'urgent', label: 'Urgent', desc: 'Moins de 3 mois' },
                                  { value: '3-6mois', label: 'Court terme', desc: '3 à 6 mois' },
                                  { value: '6-12mois', label: 'Moyen terme', desc: '6 à 12 mois' },
                                  { value: 'plus-12mois', label: 'Long terme', desc: 'Plus de 12 mois' },
                                  { value: 'flexible', label: 'Flexible', desc: 'Pas de contrainte' },
                                ].map((option) => (
                                  <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => field.onChange(option.value)}
                                    className={cn(
                                      'w-full p-3 text-left border-2 transition-all duration-200 flex items-center justify-between',
                                      field.value === option.value
                                        ? 'border-foreground bg-foreground text-background'
                                        : 'border-border hover:border-foreground'
                                    )}
                                  >
                                    <div>
                                      <span className="font-medium text-sm block">{option.label}</span>
                                      <span className={cn(
                                        'text-xs',
                                        field.value === option.value ? 'text-background/70' : 'text-muted-foreground'
                                      )}>
                                        {option.desc}
                                      </span>
                                    </div>
                                    {field.value === option.value && (
                                      <Check className="w-4 h-4" />
                                    )}
                                  </button>
                                ))}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Step 4: Coordonnées */}
                    <div
                      className={cn(
                        'space-y-4 transition-all duration-300',
                        currentStep === 4
                          ? 'opacity-100 translate-x-0'
                          : 'hidden'
                      )}
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-semibold">
                              <User className="w-4 h-4 inline mr-2" />
                              Nom complet
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Votre nom"
                                {...field}
                                className="border-2 border-border focus:border-foreground transition-colors bg-background"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-semibold">
                              <Mail className="w-4 h-4 inline mr-2" />
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="votre@email.com"
                                {...field}
                                className="border-2 border-border focus:border-foreground transition-colors bg-background"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-semibold">
                              <Phone className="w-4 h-4 inline mr-2" />
                              Téléphone
                              <span className="text-muted-foreground font-normal ml-2">(optionnel)</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="06 00 00 00 00"
                                {...field}
                                className="border-2 border-border focus:border-foreground transition-colors bg-background"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-semibold">
                              <MessageSquare className="w-4 h-4 inline mr-2" />
                              Message
                              <span className="text-muted-foreground font-normal ml-2">(optionnel)</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Détails supplémentaires sur votre projet..."
                                className="min-h-[80px] resize-none border-2 border-border focus:border-foreground transition-colors bg-background"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Footer Navigation */}
                  <div className="p-6 pt-0 flex gap-3">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrev}
                        className="flex-1"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour
                      </Button>
                    )}

                    {currentStep < 4 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1"
                      >
                        Suivant
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-accent hover:bg-accent/90"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin mr-2" />
                            Envoi...
                          </>
                        ) : (
                          <>
                            Envoyer ma demande
                            <Check className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </>
          ) : (
            /* Success State */
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">
                Demande envoyée
              </h3>
              <p className="text-muted-foreground mb-8">
                Merci pour votre intérêt. Je vous recontacterai dans les 48h pour discuter de votre projet.
              </p>
              <Button onClick={() => setIsOpen(false)} className="w-full">
                Fermer
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
