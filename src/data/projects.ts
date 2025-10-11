import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

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
}

export const projects: Project[] = [
  {
    id: "modern-apartment-renovation",
    title: "Modern Apartment Renovation",
    category: "Residential Renovation",
    location: "Lyon 6ème",
    year: "2023",
    description: "Complete transformation of a 120m² apartment in Lyon's 6th arrondissement. The project involved opening up the living spaces, creating a seamless flow between the kitchen and living room, while preserving the historic Haussmannian features. Custom millwork and carefully selected materials create a perfect balance between contemporary comfort and classic elegance.",
    coverImage: project1,
    images: [project1],
    plans: []
  },
  {
    id: "contemporary-house",
    title: "Contemporary House",
    category: "New Construction",
    location: "Caluire-et-Cuire",
    year: "2024",
    description: "A 200m² contemporary house designed to maximize natural light and create a strong connection with the surrounding landscape. The design features clean lines, generous glazing, and a thoughtful mix of concrete and wood that integrates harmoniously with the natural environment. Sustainable design principles were incorporated throughout.",
    coverImage: project2,
    images: [project2],
    plans: []
  },
  {
    id: "luxury-kitchen-design",
    title: "Luxury Kitchen Design",
    category: "Interior Renovation",
    location: "Lyon 2ème",
    year: "2023",
    description: "High-end kitchen renovation featuring custom cabinetry, marble countertops, and state-of-the-art appliances. The design prioritizes both functionality and aesthetics, creating a space that serves as the heart of the home. Careful attention to lighting and material selection ensures a timeless elegance.",
    coverImage: project3,
    images: [project3],
    plans: []
  },
  {
    id: "spa-bathroom",
    title: "Spa Bathroom",
    category: "Bathroom Renovation",
    location: "Villeurbanne",
    year: "2023",
    description: "A luxurious bathroom transformation that brings spa-like serenity to the home. Natural stone, elegant fixtures, and a carefully designed layout create a peaceful retreat. The walk-in shower features premium finishes, while ambient lighting enhances the relaxing atmosphere.",
    coverImage: project4,
    images: [project4],
    plans: []
  }
];
