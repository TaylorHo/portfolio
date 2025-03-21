import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Taylor Hoffmann",
  DESCRIPTION: "Portfolio e blog pessoal, contendo artigos e projetos pessoais sobre programação, física e ciência!",
  AUTHOR: "Taylor Hoffmann",
};

// Work Page
export const WORK: Page = {
  TITLE: "Trabalho",
  DESCRIPTION: "Lugares onde trabalhei.",
};

// Posts Page
export const POSTS: Page = {
  TITLE: "Artigos",
  DESCRIPTION: "Escrevendo sobre assuntos pelos quais sou apaixonado.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projetos",
  DESCRIPTION: "Projetos recentes nos quais tenho trabalhado.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Pesquisar todas as postagens e projetos.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Início",
    HREF: "/",
  },
  {
    TEXT: "Trabalho",
    HREF: "/work",
  },
  {
    TEXT: "Livros",
    HREF: "https://uiclap.bio/taylor",
  },
  {
    TEXT: "Artigos",
    HREF: "/posts",
  },
  {
    TEXT: "Projetos",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "taylor@hotay.dev",
    HREF: "mailto:taylor@hotay.dev",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "TaylorHo",
    HREF: "https://github.com/TaylorHo/",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "hoffmann-taylor",
    HREF: "https://www.linkedin.com/in/hoffmann-taylor/",
  },
];
