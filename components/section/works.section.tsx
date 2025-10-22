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
          <h3>
            Work Experiences
          </h3>
          <div className="text-sm font-light inline-flex items-baseline gap-1">
            <a href={resume_link}
               className="flex items-baseline gap-1"
               target="_blank" rel="noopener noreferrer">
              View Resume to Learn More
              <ExternalLink size={13}/>
            </a>
          </div>
        </div>
      </SectionTitle>

      <ul className="grid grid-cols-1 gap-4">
        {WORKS.map((work) => (
          <li key={work.id} className="pb-4 ">
            <div>
              <div className=" border-b border-dashed border-gray-300 pb-2">

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

              <div className="mt-2.5">
                <p className="font-light text-gray-500">{work.description}</p>
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

const resume_link = "https://drive.google.com/file/d/1i72s-ddUdk5nuSWEninafgSW0CSdE9ep/view"

const WORKS = [
  {
    id: 1,
    company: "HaupCar",
    image: "/haupcar.jpg",
    url: "https://www.haupcar.com/",
    title: "Frontend developer",
    date: "January - March 2025",
    location: "Remote, Thailand",
    description: "HaupCar, thailand car rental company is working on new features called " +
      "Long Term Car Rental that allow customers to rent vehicles for extended duration. " +
      "My responsibilities building interfaces for the new features from Figma design and connecting with their new REST API.",
    tools: "Next, React, TypeScript, AntDesign, Zustand, Tailwind CSS, Docker, Postman, Figma, REST API, JIRA, Bitbucket, TanStack Query",
    responsibilities: [
      "Developer reusable components using AntDesign as a design system.",
      "Implemented responsive user interfaces from Figma design specifications",
      "Implemented Zustand for state management.",
      "Integrated TanStack Query to manage API requests and optimize data handling in UI components",
      "Utilized Playwright to automate browser testing, verifying UI behavior and API integrations",
      "Collaborated directly with designers and QA’s engineers."
    ],
    achievements: [
      "Refactor legacy React component to be more reusable.",
      "Implement internationalization so the site can be used in English and Thai.",
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
    description: "C2 Media, a media and marketing companies powering the top brands and publishers. I led for the development of ContentGrow, a web application that connects freelance talent with global content teams and streamlines editorial workflows.",
    tools: "Laravel, Vue, Tailwind CSS, " +
      "AWS, EC2, S3, SES, Load Balancer, VPN, nginx," +
      "Redis, MySQL, Lambda, Dynamo DB, Route 53, Stripe, Pusher, Memcached, beanstalkd, supervisord, Jenkins, Ubuntu, PHP, HTML, JavaScript",
    responsibilities: [
      "Configured and managed AWS infrastructure to host app deployments using EC2, RDS, Application Load Balancer, S3, SES, Route 53.",
      "Building payment system using Stripe to allow payment via Bank Transfer and Credit Card and payout directly to user bank accounts across multiple countries and currencies.",
      "Utilized Pusher to send real-time notifications to users and build realtime chat feature.",
      "Implemented automated cron jobs to aggregate and store reporting data in DynamoDB on daily, weekly, and monthly schedules."
    ],
    achievements: [
      "Developed ContentGrow, a web application that connects freelance talent with global content teams and streamlines editorial workflows, contributing to the company’s revenue growth. "
    ]
  },
]