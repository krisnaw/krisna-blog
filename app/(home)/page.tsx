import AboutMe from "@/components/section/about-me.section";
import HeroSection from "@/components/section/hero.section";
import WorkExperienceSection from "@/components/section/work-experience.section";
import ProjectSection from "@/components/section/project.section";

export default function Page() {
   return (
       <div>
          <HeroSection />

          <AboutMe />

          <WorkExperienceSection />

          <ProjectSection />
       </div>
   )
}
