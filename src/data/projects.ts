import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

import project_bag_1 from "@/assets/proto architecture_renovation maison_bigorre_01-interieur.webp";
import project_bag_2 from "@/assets/proto architecture_renovation maison_bigorre_02-interieur.webp";
import project_bag_plan_1 from "@/assets/proto architecture_renovation maison_bigorre_facade Est.webp";
import project_bag_plan_2 from "@/assets/proto architecture_renovation maison_bigorre_facade Sud.webp";
import project_bag_plan_3 from "@/assets/proto architecture_renovation maison_bigorre_plan RDC.webp";
import project_bag_plan_4 from "@/assets/proto architecture_renovation maison_bigorre_PM.webp";

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  coverImage: string;
  images: string[];
  plans: string[];
  programme?: string;
  maitriseOuvrage?: string;
  coutTravaux?: string;
  surfaces?: string;
  creditsPhotos?: string;
}

export const projects: Project[] = [
  {
    id: "bag",
    title: "Maison Bigourdane",
    category: "Rénovation (y.c énergétique) d'une ancienne conciergerie et de son annexe",
    location: "Bagnère-de-Bigorre",
    year: "2024",
    description:
      "Située dans le parc arboré d’une villa bourgeoise, cette ancienne conciergerie fait l’objet d’un projet de rénovation intégrale. L’intervention vise à transformer ce petit bâti au charme patrimonial en une habitation contemporaine, fonctionnelle et performante sur le plan énergétique, tout en préservant ses proportions harmonieuses et son identité architecturale.\n\nIl s'agit d'une grange bigourdane typique de la région : toiture en ardoises, encadrements en bois autour des ouvertures et une galerie filante au premier étage qui servait à sécher le foin. Le bâtiment, abandonné depuis une dizaine d’années, avait subi quelques aménagements sommaires réalisés à la hâte. Un curage complet a donc été nécessaire avant de commencer les travaux.\n\nL'objectif principal du projet a été de \"réparer\" le bâtiment pour mettre en valeur les éléments architecturaux qui lui confèrent son caractère unique.\n\nPar exemple, le balcon extérieur a été renforcé plutôt que remplacé. Les volets ont été soit réparés, soit remplacés à l’identique, respectant ainsi l’esthétique originelle.\n\nLe projet a consisté à rénover de fond en comble le bâtiment pour en faire une maison agréable à vivre, ouverte sur l’extérieur et le parc. La distribution des pièces est totalement repensée et un gros effort est fait sur les qualités environnementales de la maison :\n→ Isolation intérieure en fibre de bois et ouate de cellulose\n→ Remplacement des menuiseries bois et création d’ouvertures en aluminium\n→ Eau chaude sanitaire par panneaux solaires et chaudière à bois pour le chauffage\n→ Récupération des eaux de pluie pour des usages domestiques\n→ Ventilation naturelle\n\nLa luminosité intérieure a été optimisée grâce à l'ajout d’ouverture en toiture et de grandes baies vitrées, qui offrent des vues imprenables sur le jardin et le paysage verdoyant environnant.\n\nUn soin particulier a été apporté à la conception de mobilier sur-mesure et au choix des matériaux, afin d’apporter caractère à l’ensemble de la maison, en adéquation avec la personnalité de la maîtrise d’ouvrage.\n\nEn collaboration avec Anna Le Fur (architecte). Photographies de Simon Genillier Roelsgaard et prôto.architecture.",
    coverImage: project_bag_1,
    images: [project_bag_1, project_bag_2],
    plans: [project_bag_plan_1, project_bag_plan_2, project_bag_plan_3, project_bag_plan_4],
    maitriseOuvrage: "Privée",
    coutTravaux: "275 k€ HT",
    surfaces: "110 m² + 50 m²",
    creditsPhotos: "Simon Genillier Roelsgaard et prôto.architecture",
  },
  {
    id: "modern-apartment-renovation",
    title: "Modern Apartment Renovation",
    category: "Residential Renovation",
    location: "Lyon 6ème",
    year: "2023",
    description:
      "Complete transformation of a 120m² apartment in Lyon's 6th arrondissement. The project involved opening up the living spaces, creating a seamless flow between the kitchen and living room, while preserving the historic Haussmannian features. Custom millwork and carefully selected materials create a perfect balance between contemporary comfort and classic elegance.",
    coverImage: project1,
    images: [project1],
    plans: [],
  },
  {
    id: "contemporary-house",
    title: "Contemporary House",
    category: "New Construction",
    location: "Caluire-et-Cuire",
    year: "2024",
    description:
      "A 200m² contemporary house designed to maximize natural light and create a strong connection with the surrounding landscape. The design features clean lines, generous glazing, and a thoughtful mix of concrete and wood that integrates harmoniously with the natural environment. Sustainable design principles were incorporated throughout.",
    coverImage: project2,
    images: [project2],
    plans: [],
  },
  {
    id: "luxury-kitchen-design",
    title: "Luxury Kitchen Design",
    category: "Interior Renovation",
    location: "Lyon 2ème",
    year: "2023",
    description:
      "High-end kitchen renovation featuring custom cabinetry, marble countertops, and state-of-the-art appliances. The design prioritizes both functionality and aesthetics, creating a space that serves as the heart of the home. Careful attention to lighting and material selection ensures a timeless elegance.",
    coverImage: project3,
    images: [project3],
    plans: [],
  },
  {
    id: "spa-bathroom",
    title: "Spa Bathroom",
    category: "Bathroom Renovation",
    location: "Villeurbanne",
    year: "2023",
    description:
      "A luxurious bathroom transformation that brings spa-like serenity to the home. Natural stone, elegant fixtures, and a carefully designed layout create a peaceful retreat. The walk-in shower features premium finishes, while ambient lighting enhances the relaxing atmosphere.",
    coverImage: project4,
    images: [project4],
    plans: [],
  },
];
