// Fichier de redirections statiques
// Les anciennes URLs (avant le changement vers les slugs SEO-friendly)
// Ce fichier ne doit PAS être modifié quand vous changez les IDs des projets

export const legacyRedirects: Record<string, string> = {
  // Ancien ID -> Nouveau slug (uniquement pour les anciens projets avec URL courte)
  'bag': 'renovation-d-une-maison-bigourdane-bagnere-de-bigorre',
  '123': 'renovation-d-une-cuisine-dans-un-appartement-des-annees-60-lyon-7',
  'chv': 'transformation-d-un-atelier-en-logement-champagne-en-valromey',
  'ssa': 'renovation-et-extension-d-un-chalet-de-montagne-saint-sorlin-d-arves',
};

// Liste des anciens IDs pour générer les pages de redirection
export const legacyIds = Object.keys(legacyRedirects);
