"use client"
import React from "react";
import {SectionTitle} from "@/components/section/section.title";
import {motion} from "framer-motion";
import {Badge} from "@/components/ui/badge";
import {ExternalLink} from "lucide-react";

export default function WorksSection() {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 20}}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: "easeInOut",
      }}
      className="mt-16">

      <SectionTitle>
        <div className="flex justify-between items-center">
          <div>
            Work Experiences
          </div>
          <div className="text-sm font-light inline-flex items-baseline gap-1">
            View Resume to Learn More
            <ExternalLink size={13}/>
          </div>
        </div>
      </SectionTitle>

      <ul className="grid grid-cols-1 gap-4">
        {WORKS.map((work) => (
          <li key={work.id} className=" pb-4">
            <div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-bold text-gray-900">
                    <a href={work.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {work.company}
                    </a>
                  </h4>
                  <p className="mt-1 font-medium text-gray-500">
                    {work.title}
                  </p>
                </div>
                <div className="sm:flex justify-between items-baseline">
                  <p>
                    {work.location}
                  </p>
                  <p className="mt-1 text-gray-500">
                    {work.date}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="text-gray-600 font-medium">Key Achievements:</h5>
                <ul className="mt-1.5 list-disc text-gray-500 flex flex-col gap-2 pl-3">
                  {work.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h5 className="text-gray-600 font-medium">Key Responsibilities:</h5>
                <ul className="mt-1.5 list-disc text-gray-500 flex flex-col gap-2 pl-3">
                  {work.responsibilities.map((responsibilities, index) => (
                    <li key={index} className="text-sm">
                      {responsibilities}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1 mt-2.5">
                {work.tools.split(",").map((tool, index) => (
                  <Badge key={index} variant="outline">{tool}</Badge>
                ))}
              </div>

            </div>
          </li>
        ))}
      </ul>

    </motion.div>
  )
}

const WORKS = [
  {
    id: 1,
    company: "HaupCar",
    image: "/haupcar.jpg",
    url: "https://www.haupcar.com/",
    title: "Frontend developer",
    date: "January - March 2025",
    location: "Remote, Thailand",
    description: "Lead designer for tv for bars & restaurants",
    tools: "Next, React, TypeScript, AntDesign, Zustand, Tailwind CSS, Docker, Postman, Figma, REST API",
    responsibilities: [
      "Developed responsive UI for long term booking system, a feature enabled customers to rent vehicles for extended duration.",
      "Implemented Zustand to manage front-end state more efficiently, improving code maintainability and reducing complexity.",
      "Created flexible UI systems in React, TypeScript, and AntDesign to enforce consistent design standards and simplify project workflows.",
      "Maintained and optimized legacy code to align with current best practices.",
      "Collaborated directly with designers and QA’s engineers to deliver a polished, bug-free product responsibilitieserience."
    ],
    achievements: [
      "Refactor ",
      "Implement internationalization"
    ]
  },
  {
    id: 2,
    company: "C2 Media",
    image: "/c2media.png",
    url: "https://www.linkedin.com/company/c2media-asia/about/",
    title: "Full-stack developer",
    date: "June 2016 - Mar 2024",
    location: "Jakarta, Indonesia",
    description: "Lead designer for tv for bars & restaurants",
    tools: "Laravel, Vue, Tailwind CSS, " +
      "AWS, EC2, S3, SES, Load Balancer, VPN," +
      "Redis, MySQL, Lambda, Dynamo DB, Route 53, Stripe, Pusher, Memcached, beanstalkd, supervisord, Jenkins, Ubuntu, PHP, HTML, JavaScript, CSS",
    responsibilities: [
      "Developed responsive UI for long term booking system, a feature enabled customers to rent vehicles for extended duration.",
    ],
    achievements: [
      "Refactor "
    ]
  },
]