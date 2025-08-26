"use client"
import React from "react";
import {cn} from "@/lib/utils";

const skills = [
  { name: 'JavaScript', category: "frontend" },
  { name: 'TypeScript', category: "frontend" },
  { name: 'React', category: "frontend" },
  { name: 'Next.js', category: "frontend" },
  { name: 'Node.js', category: "backend" },
  { name: 'Express', category: "backend" },
  { name: 'MongoDB', category: "backend" },
  { name: 'PostgreSQL', category: "backend" },
  { name: 'Docker', category: "devops" },
  { name: 'Kubernetes', category: "devops" },
  { name: 'AWS', category: "devops" },
  { name: 'Figma', category: "design" },
];

interface Skill {
  name: string;
  category: string;
}

interface CategoryCount {
  category: string;
  count: number;
}

export function SkillSection() {

  const [selectedTab, setSelectedTab] = React.useState('all');

  const result: CategoryCount[] = Object.entries(
    skills.reduce((acc: Record<string, number>, skill: Skill) => {
      acc[skill.category] = (acc[skill.category] ?? 0) + 1;
      return acc;
    }, {})
  ).map(([category, count]: [string, number]) => ({ category, count }));

  result.push({category: 'all', count: skills.length});
  result.sort((a, b) => b.count - a.count);

  console.log(result);

  const filteredSkills = skills.filter(skill => skill.category === selectedTab || selectedTab === 'all');

  return (
    <div className="py-24">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h2 className="text-xl/8 font-semibold ">Skills</h2>

        <div className="mt-10">

          <div>
            <div>
              Sort by
            </div>
            <div className="flex space-x-2.5">


              {result.map((categoryCount, index) => (
                <button
                  type="button" key={categoryCount.category}
                        onClick={() => setSelectedTab(categoryCount.category)}
                        className={cn(
                  "border border-gray-200 px-3.5 py-1 rounded-full capitalize text-sm cursor-pointer",
                  categoryCount.category === selectedTab ? "bg-gray-200" : ""
                )}>
                  <span>{categoryCount.category}</span> <span>({categoryCount.count})</span>
                </button>
              ))}

            </div>
          </div>

          <div>

            <ul className="divide-y divide-gray-200 mt-4">
              {filteredSkills.map((skill, index) => (
                <li key={skill.name} className="flex justify-between items-center space-x-2.5 py-2.5">
                  <div className="flex space-x-2.5">
                    <div>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      {skill.name}
                    </div>
                  </div>
                  <div>
                    {skill.category}
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>


      </div>
    </div>
  )
}