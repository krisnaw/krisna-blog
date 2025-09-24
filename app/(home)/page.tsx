import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import AboutMe from "@/components/section/about-me.section";
import HeroSection from "@/components/section/hero.section";

export default function Page() {
   return (
       <div>
          <SiteHeader />

          <HeroSection />

          <AboutMe />

          <SiteFooter />
       </div>
   )
}
