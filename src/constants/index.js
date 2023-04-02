import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Conocimientos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "C++",
    icon: web,
  },
  {
    title: "Java",
    icon: mobile,
  },
  {
    title: "Javascript",
    icon: backend,
  },
  {
    title: "C#",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  /*{
    name: "TypeScript",
    icon: typescript,
  },*/
  {
    name: "React JS",
    icon: reactjs,
  },
  /*{
    name: "Redux Toolkit",
    icon: redux,
  },*/
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  /*{
    name: "MongoDB",
    icon: mongodb,
  },*/
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "CCNA R&S : INTRODUCTION TO NETWORKS",
    company_name: "Cisco",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Octubre 2019",
    points: [
      "Aprendí como funcionan las tecnologías de red en dispositivos como routers y switchers. Esta información me ayudó a ampliar mis conocimientos sobre redes de ordenadores.",
    ],
  },
  {
    title: "PYTHON SIN FRONTERAS: HTML CSS,FLASK Y MYSQL",
    company_name: "Nicolas Shurmann",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Febrero 2020 - Abril 2020",
    points: [
      "Gracias a mi interés por aprender nuevos lenguajes de programación, realicé el curso de python sin fronteras. Para saber como estos lenguajes pueden ser utilizados en diferentes sectores, el curso me enseñó el desarrollo básico de páginas webs, creación de aplicaciones web con Python y ver como funcionan las bases de datos relacionales.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "React Native",
    icon: shopify,
    iconBg: "#383E56",
    date: "Marzo 2023",
    points: [
      "En estos momentos me encuentro desarrollando y mejorando esta website como proyecto personal, así como comenzando mi aprendizaje en React Native y Javascript.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shooter Videogame",
    description:
      "Shooter creado para una asignatura de la universidad en la que aprendí y profundice en el desarrollo de videojuegos en unity.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D website",
    description:
      "3D website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "purple-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  /*{
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },*/
];

export { services, technologies, experiences, testimonials, projects };
