import HeroSection from "@/components/section/hero.section";
import React from "react";
import {getPosts} from "@/app/notes/getPosts";

export default function Page() {
  const posts = getPosts();
  return (
    <div className="flex flex-col">
      <div className="grow min-h-screen">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 sm:py-36">
          <div className="space-y-18">
            <HeroSection />
            {/*<Projects />*/}
            {/*<Building />*/}
            {/*<Writing />*/}
            {/*<WorksSection />*/}
            {/*<CertSection />*/}
          </div>
        </div>
      </div>
    </div>
  );
}
