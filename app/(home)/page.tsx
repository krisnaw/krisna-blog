import RecentProjectSection from "@/components/new-section/recent-project-section";
import AboutSection from "@/components/new-section/about-section";

export default function Page() {

  return (
    <div className="mx-auto max-w-7xl border-r border-l border-gray-300">
      <AboutSection />
      <RecentProjectSection/>
    </div>
  )
}
