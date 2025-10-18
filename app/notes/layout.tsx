import type {Metadata} from "next";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Krisna Wijaya | Notes",
  description: "A collection of complete ideas, thoughts, articles, and writings",
};


export default function NotesLayout({children}: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen`}>
      {children}
    </div>
  )
}