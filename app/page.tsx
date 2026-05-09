import HeroSection from "@/components/section/hero.section";
import React from "react";
import FooterSection from "@/components/section/footer.section";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="grow h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 sm:py-36">
          <HeroSection />
          {/*<Projects />*/}
          {/*<WorksSection />*/}
          {/*<CertSection />*/}
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
