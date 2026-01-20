import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-8 space-y-12">
        <h1 className="text-9xl md:text-[12rem] text-foreground/20">
          404
        </h1>

        <div className="space-y-6">
          <p className="text-3xl text-foreground">
            Page introuvable
          </p>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <Link href="/" className="inline-block text-accent hover:text-foreground transition-colors border-b border-accent">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
