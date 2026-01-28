// Fichier de redirections statiques
// Les anciennes URLs (avant le changement vers les slugs SEO-friendly)
// Ce fichier ne doit PAS être modifié quand vous changez les IDs des projets

export const legacyRedirects: Record<string, string> = {
  // Ancien ID -> Nouveau slug
  'bag': 'bag-bagnere-de-bigorre',
  '123': 'renovation-cuisine-lyon-7-jean-mace',
  'chv': 'chv-champagne-en-valromey',
  'ssa': 'ssa-saint-sorlin-d-arves',
};

// Liste des anciens IDs pour générer les pages de redirection
export const legacyIds = Object.keys(legacyRedirects);
