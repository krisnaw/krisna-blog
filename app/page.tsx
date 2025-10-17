import HeroSection from "@/components/section/hero.section";
import React, {Suspense} from "react";
import HeaderSection from "@/components/section/header.section";

export default function Page() {
  return (

    <div>
      <Suspense>
        <HeaderSection/>
      </Suspense>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        <HeroSection />

        {/*<section id="animation">*/}
        {/*  <div>*/}
        {/*    <h5 className="mt-16 pb-2 text-lg sm:text-xl border-b border-gray-200">*/}
        {/*      Animation for the web*/}
        {/*    </h5>*/}
        {/*  </div>*/}

        {/*  <div className="mt-6 rounded-3xl outline-1 outline-gray-200 sm:flex p-2">*/}
        {/*    <img src="https://static.sizu.me/images/contents/editor.png" alt="image" className="rounded-2xl"/>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*<section className="py-20">*/}

        {/*  <div>*/}
        {/*    <h5 className="pb-2 text-lg sm:text-xl border-b border-gray-200">*/}
        {/*      Featured work*/}
        {/*    </h5>*/}
        {/*  </div>*/}

        {/*  <div className="mt-6 bg-gradient-to-l from-slate-50 via-slate-100 to-slate-200 outline-1 outline-neutral-200 rounded-3xl p-2">*/}

        {/*    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3">*/}

        {/*      <div className="sm:col-span-2">*/}
        {/*        /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
        {/*        <img className="rounded-2xl outline-1 outline-neutral-200"*/}
        {/*             src="https://cdn.prod.website-files.com/6624669425dcd1e5513fb862/6677748e2a6f276c22d0e1ef_feature-work-img__asi.webp" alt=""/>*/}
        {/*      </div>*/}

        {/*      <div className="px-2 sm:px-6 py-1 flex flex-col space-y-2.5 justify-between">*/}
        {/*        <h2 className="text-3xl font-light">*/}
        {/*          Aggregate Singularity*/}
        {/*        </h2>*/}

        {/*        <p className="text-gray-500 text-xs">*/}
        {/*          I created a 3d visual language that emphasizes what the ASI&nbsp;software does on behalf of utility accounting and tax teams.*/}
        {/*        </p>*/}

        {/*      </div>*/}
        {/*    </div>*/}

        {/*  </div>*/}
        {/*</section>*/}

      </div>
    </div>


  )
}