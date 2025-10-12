import FloatingMenu from "@/app/floating-menu";
import HeroSection from "@/components/section/hero.section";
import FooterSection from "@/components/section/footer.section";
import HeaderSection from "@/components/section/header.section";

export default function Page() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col">

      <HeaderSection />

      <HeroSection />

      <FooterSection />

      <FloatingMenu/>


    </div>
  )
}