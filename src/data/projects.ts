import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

// BAG  Images
import bag_img_1 from "@/assets/BAG/images/maison_bigorre_01-interieur.webp";
import bag_img_2 from "@/assets/BAG/images/maison_bigorre_02-interieur.webp";
import bag_img_4 from "@/assets/BAG/images/maison_bigorre_04-interieur.webp";
import bag_img_5 from "@/assets/BAG/images/maison_bigorre_05-interieur.webp";
import bag_img_6 from "@/assets/BAG/images/maison_bigorre_06-interieur.webp";
import bag_img_7 from "@/assets/BAG/images/maison_bigorre_07-interieur.webp";
import bag_img_8 from "@/assets/BAG/images/maison_bigorre_08-interieur.webp";
import bag_img_9 from "@/assets/BAG/images/maison_bigorre_09-interieur.webp";
import bag_img_10 from "@/assets/BAG/images/maison_bigorre_10-interieur.webp";
import bag_img_11 from "@/assets/BAG/images/maison_bigorre_11-facade.webp";
import bag_img_12 from "@/assets/BAG/images/maison_bigorre_12-facade.webp";
import bag_img_13 from "@/assets/BAG/images/maison_bigorre_13-travaux.webp";
import bag_img_14 from "@/assets/BAG/images/maison_bigorre_14-travaux.webp";
import bag_img_15 from "@/assets/BAG/images/maison_bigorre_15-travaux.webp";

// BAG Plan
import bag_plan_1 from "@/assets/BAG/plan/maison_bigorre_plan RDC.webp";
import bag_plan_2 from "@/assets/BAG/plan/maison_bigorre_plan R+1.webp";
import bag_plan_3 from "@/assets/BAG/plan/maison_bigorre_PM.webp";
import bag_plan_4 from "@/assets/BAG/plan/maison_bigorre_facade Sud.webp";
import bag_plan_5 from "@/assets/BAG/plan/maison_bigorre_facade Est.webp";

// 123 Images
import project123_img_1 from "@/assets/123/images/proto architecture_amenagement interieur_Lyon_01.webp";
import project123_img_2 from "@/assets/123/images/proto architecture_amenagement interieur_Lyon_02.webp";
import project123_img_3 from "@/assets/123/images/proto architecture_amenagement interieur_Lyon_03.webp";
import project123_img_4 from "@/assets/123/images/proto architecture_amenagement interieur_Lyon_04.webp";

// 123 Plans
import project123_plan_1 from "@/assets/123/plan/proto architecture_renovation appartement_Lyon 7_cuisine elevation 1.webp";
import project123_plan_2 from "@/assets/123/plan/proto architecture_renovation appartement_Lyon 7_cuisine elevation 2.webp";
import project123_plan_3 from "@/assets/123/plan/proto architecture_renovation appartement_Lyon 7_cuisine elevation 3.webp";
import project123_plan_4 from "@/assets/123/plan/proto architecture_renovation appartement_Lyon 7_cuisine.webp";

// CHV Images
import chv_img_1 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_01-facade.webp";
import chv_img_2 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_02-interieur.webp";
import chv_img_3  from "@/assets/CHV/images/proto architecture_renovation maison_bugey_03-interieur.webp";
import chv_img_4 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_04-interieur.webp";
import chv_img_5 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_05-interieur.webp";
import chv_img_6 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_06-interieur.webp";
import chv_img_7 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_07-interieur.webp";
import chv_img_8 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_08-facade.webp";  
import chv_img_9 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_09-facade.webp";
import chv_img_10 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_10-facade.webp";
import chv_img_11 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_11-existant.webp";
import chv_img_12 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_12-existant.webp";
import chv_img_13 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_13-travaux.webp";
import chv_img_14 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_14-travaux.webp";
import chv_img_15 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_15-travaux.webp";
import chv_img_16 from "@/assets/CHV/images/proto architecture_renovation maison_bugey_16-travaux.webp";

// CHV Plans
import chv_plan_1 from "@/assets/CHV/plan/proto architecture_renovation maison_Valromey_01-coupe.webp";
import chv_plan_2 from "@/assets/CHV/plan/proto architecture_renovation maison_Valromey_02-plan RDC.webp";
import chv_plan_3 from "@/assets/CHV/plan/proto architecture_renovation maison_Valromey_03-facade Sud.webp";
import chv_plan_4 from "@/assets/CHV/plan/proto architecture_renovation maison_Valromey_04-facade Est.webp";
import chv_plan_5 from "@/assets/CHV/plan/proto architecture_renovation maison_Valromey_05-facade Nord.webp";
import chv_plan_6 from "@/assets/CHV/plan/proto architecture_renovation maison_Valromey_06-detail cuisine.webp";

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
  type: string;
  projectManagement?: string;
  cost?: string;
  surfaces?: string;
  imgCredit?: string;
  imgCreditUrl?: string;
  collaboration?: string;
  collaborationUrl?: string;
}

export const projects: Project[] = [
  {
    id: "bag",
    title: "Maison Bigourdane",
    category: "Rénovation (y.c énergétique) d'une ancienne conciergerie et de son annexe",
    location: "Bagnère-de-Bigorre",
    year: "2024",
    description:
      "Située dans le parc arboré d’une villa bourgeoise, cette ancienne conciergerie fait l’objet d’un projet de rénovation intégrale. L’intervention vise à transformer ce petit bâti au charme patrimonial en une habitation contemporaine, fonctionnelle et performante sur le plan énergétique, tout en préservant ses proportions harmonieuses et son identité architecturale.\n\nIl s'agit d'une grange bigourdane typique de la région : toiture en ardoises, encadrements en bois autour des ouvertures et une galerie filante au premier étage qui servait à sécher le foin. Le bâtiment, abandonné depuis une dizaine d’années, avait subi quelques aménagements sommaires réalisés à la hâte. Un curage complet a donc été nécessaire avant de commencer les travaux.\n\nL'objectif principal du projet a été de \"réparer\" le bâtiment pour mettre en valeur les éléments architecturaux qui lui confèrent son caractère unique.\n\nPar exemple, le balcon extérieur a été renforcé plutôt que remplacé. Les volets ont été soit réparés, soit remplacés à l’identique, respectant ainsi l’esthétique originelle.\n\nLe projet a consisté à rénover de fond en comble le bâtiment pour en faire une maison agréable à vivre, ouverte sur l’extérieur et le parc. La distribution des pièces est totalement repensée et un gros effort est fait sur les qualités environnementales de la maison :\n→ Isolation intérieure en fibre de bois et ouate de cellulose\n→ Remplacement des menuiseries bois et création d’ouvertures en aluminium\n→ Eau chaude sanitaire par panneaux solaires et chaudière à bois pour le chauffage\n→ Récupération des eaux de pluie pour des usages domestiques\n→ Ventilation naturelle\n\nLa luminosité intérieure a été optimisée grâce à l'ajout d’ouverture en toiture et de grandes baies vitrées, qui offrent des vues imprenables sur le jardin et le paysage verdoyant environnant.\n\nUn soin particulier a été apporté à la conception de mobilier sur-mesure et au choix des matériaux, afin d’apporter caractère à l’ensemble de la maison, en adéquation avec la personnalité de la maîtrise d’ouvrage.",
    coverImage: bag_img_1,
    images: [
      bag_img_1,
      bag_img_2,
      bag_img_4,
      bag_img_5,
      bag_img_6,
      bag_img_7,
      bag_img_8,
      bag_img_9,
      bag_img_10,
      bag_img_11,
      bag_img_12,
      bag_img_13,
      bag_img_14,
      bag_img_15,
    ],
    plans: [bag_plan_1, bag_plan_2, bag_plan_3, bag_plan_4, bag_plan_5],
    type: "Mission complète",
    projectManagement: "Privée",
    cost: "275 k€ HT",
    surfaces: "110 m² + 50 m²",
    collaboration: "Anna Le Fur (architecte)",
    collaborationUrl: "https://alfarchitecte.com/",
    imgCredit: "Simon Genillier Roelsgaard et prôto.architecture",
    imgCreditUrl: "https://www.instagram.com/simongenillieroelsgaard/",
  },
  {
    id: "123",
    title: "123",
    category: "Mobilier sur mesure",
    location: "Lyon 7",
    year: "2021",
    description:
      "1, 2, 3 comme le nombre d’interventions réalisées afin d’aménager cet appartement construit dans les années 60, à partir d’un seul et même matériau. Grâce au valchromat, panneau de fibre bois teinté dans la masse, les différentes pièces de mobilier viennent colorer les espaces de vie.\n L’effort principal est porté sur la cuisine qui se veut épurée et simple d’utilisation. Partant d’un plan très biscornu, à cause de nombreuses gaines, le but était d’en faire un espace de cuisine fonctionnel, adapté à la modernité.\n Pas de porte, pas de meuble haut, les étagères se suivent et offrent de grands plans de travail et des rangements en quantité. Rien n’est caché, la convivialité s’exprime aussi par le fait que tout le monde peut s’approprier la cuisine et son fonctionnement d’un seul regard.",
    coverImage: project123_img_1,
    images: [project123_img_1, project123_img_2, project123_img_3, project123_img_4],
    plans: [project123_plan_1, project123_plan_2, project123_plan_3, project123_plan_4],
    type: "Mission complète",
    projectManagement: "Privée",
    cost: "-- € HT",
    surfaces: "-- m²",
    imgCredit: "prôto.architecture",
  },
  {
    id: "chv",
    title: "Ossy",
    category: "Transformation d'un ancienn atelier dans une ferme de l'Ain",
    location: "Champagne-en-Valromey, Auvergne-Rhône-Alpes",
    year: "2025",
    description:
      "Située dans une ancienne longère bugiste, l’ex-atelier devient un logement autonome, discret dans prolongement de la ferme. Le projet accompagne la métamorphose de ce bâti rural en une habitation lumineuse, chaleureuse et sobre en énergie, attentive à l’héritage familial qui l’habite.\nLes larges ouvertures au sud sont préservées pour capter pleinement de l’ensoleillement. Une nouvelle baie s’ouvre à l’est sur le pré, tandis qu’une ouverture au nord est agrandie pour diffuser une lumière douce dans la chambre.\nLa qualité environnementale guide l’ensemble des choix afin de créer un espace peu énergivore et confortable : isolation intérieure en laine de bois, menuiseries extérieures en aluminium, chauffage au bois et ventilation naturelle.\nLe projet révèle enfin l’existant : portes en bois sablées et réemployées, pierre apparente mise en valeur dans les murs et les seuils, laissant dialoguer mémoire du lieu et usage contemporain.",
    coverImage: chv_img_1,
    images: [
      chv_img_1,
      chv_img_2,
      chv_img_3,
      chv_img_4,
      chv_img_5,
      chv_img_6,
      chv_img_7,
      chv_img_8,
      chv_img_9,
      chv_img_10,
      chv_img_11,
      chv_img_12,
      chv_img_13,
      chv_img_14,
      chv_img_15,
      chv_img_16,
    ],
    plans: [chv_plan_1, chv_plan_2, chv_plan_3, chv_plan_4, chv_plan_5],
    type: "Mission complète",
    projectManagement: "Privée",
    cost: "100 k€ HT",
    surfaces: "60 m²",
    imgCredit: "Simon Genillier Roelsgaard et prôto.architecture",
    imgCreditUrl: "https://www.instagram.com/simongenillieroelsgaard/",
  },
];
