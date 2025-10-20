import {SectionTitle} from "@/components/section/section.title";
import React from "react";

export function CertSection() {
  return (
    <div className="mt-16">

      <SectionTitle>
        Recent certifications and open source contributions
      </SectionTitle>

      <div className="flex justify-between items-end pb-4 border-b border-gray-200">
        <div>
          <h3 className="font-semibold">Title</h3>
          <p className="text-gray-500">
            Site of the Day | Developer Award
          </p>
        </div>
        <div>
          <p className="text-gray-500">
            October 23, 2023
          </p>
        </div>
      </div>
    </div>
  )
}