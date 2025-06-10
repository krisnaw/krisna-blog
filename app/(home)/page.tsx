import FrontEndWorkSection from "@/components/section/front-end-work-section";
import HeroSection from "@/components/section/hero-section";
import ExperienceSection from "@/components/section/experience-section";
import TechStackSection from "@/components/section/tech-stack-section";

export default async function Page() {
    return (
        <div className="mx-auto max-w-3xl">
            <HeroSection />

            <FrontEndWorkSection />

            <ExperienceSection />

            <TechStackSection />
        </div>
    )
}
