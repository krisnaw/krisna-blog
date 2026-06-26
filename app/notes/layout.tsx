import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Krisna Wijaya | Notes",
  description: "A collection of complete ideas, thoughts, articles, and writings",
};

export default function NotesLayout({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}