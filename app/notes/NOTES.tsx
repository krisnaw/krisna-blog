export type Note = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export const NOTES: Note[] = [
  {
    id: crypto.randomUUID(),
    slug: "scroll-driven-animation",
    title: "CSS Scroll driven animation",
    date: "16 October 2025",
    excerpt: "CSS scroll-driven animations module provides functionality that builds on top of the CSS animations module and Web Animations API.",
  },
  {
    id: crypto.randomUUID(),
    slug: "book",
    title: "Book I've read",
    date: "13 October 2025",
    excerpt: "Communication comes first. High‑quality results depend on both individual skill and\n" +
      "                  seamless collaboration with directors, designers, and the rest of the team."
  }
];