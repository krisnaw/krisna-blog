import RecentProjectSection from "@/components/new-section/recent-project-section";
import ExpSection from "@/components/new-section/exp-section";
import ExploreSection from "@/components/new-section/explore-section";
import AboutSection from "@/components/new-section/about-section";

export default function Page() {
  return (
    <div>

      <AboutSection />

      <RecentProjectSection/>

      <ExpSection />

      <ExploreSection />

    </div>
  )
}
