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
            <div className="flex">
              <div className="mr-4 shrink-0 text-gray-500 w-8">
                <svg viewBox="0 0 81 81" fill="none"><path d="M60.0722 0.258789H20.5557C9.37652 0.258789 0.313965 9.3213 0.313965 20.5005V60.017C0.313965 71.1962 9.37652 80.2587 20.5557 80.2587H60.0722C71.2514 80.2587 80.314 71.1962 80.314 60.017V20.5005C80.314 9.3213 71.2514 0.258789 60.0722 0.258789Z" fill="#00DDB3"/><path d="M61.1157 18.1768C47.3448 18.1768 42.2418 28.0092 38.1385 35.9082L35.458 40.9617C31.113 49.3385 27.8668 54.4305 19.501 54.4305C18.9816 54.4305 18.4673 54.5328 17.9874 54.7316C17.5076 54.9303 17.0716 55.2216 16.7043 55.5889C16.3371 55.9561 16.0456 56.3921 15.8468 56.872C15.6481 57.3518 15.5459 57.8661 15.5459 58.3855V58.3855C15.5474 59.4339 15.9645 60.4391 16.7059 61.1804C17.4473 61.9218 18.4525 62.339 19.501 62.3404V62.3404C33.2774 62.3404 38.3803 52.508 42.4836 44.609L45.1587 39.5555C49.5092 31.1787 52.7554 26.0867 61.1157 26.0867C61.6356 26.0874 62.1504 25.9856 62.6309 25.7872C63.1113 25.5888 63.548 25.2976 63.9159 24.9302C64.2837 24.5629 64.5756 24.1267 64.7747 23.6465C64.9738 23.1663 65.0762 22.6516 65.0762 22.1317V22.1317C65.0747 21.0823 64.6568 20.0764 63.9143 19.3348C63.1717 18.5933 62.1652 18.1768 61.1157 18.1768V18.1768Z" fill="white"/></svg>
              </div>
              <div className="flex-1">
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