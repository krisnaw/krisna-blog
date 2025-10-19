import HeroSection from "@/components/section/hero.section";
import React from "react";
import FooterSection from "@/components/section/footer.section";

export default function Page() {
  return (
    <div className="flex flex-col h-svh">
      <div className="flex-grow">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <HeroSection/>

          <div>
            <div className="mb-6">
              Experiences
            </div>

            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_2fr]">
                <div>
                  <div className="text-lg font-medium text-gray-500">2024-Now</div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-950">
                    Senior Product Designer at Atmosphere TV
                  </h4>
                  <p className="text-gray-500">
                    Lead designer for tv for bars & restaurants
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <FooterSection/>
    </div>

  )
}