import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://cdn.jsdelivr.net/npm/image-hover/placeholder.png"
        alt="placeholder"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Job title</h4>
        <p className="font-bold text-2xl mt-1">Company</p>
        <div className="flex space-x-2 my-2">
          Tech Stack Tech Stack Tech Stack
        </div>
        <p className="uppercase py-5 text-gray-300">Start date -- End Date</p>
        <ul className="list-disc space-y-4 ml-5 text-md pl-4 h-1/2 overflow-y-scroll scrollbar-none">
          <li>Summary pointsSummary pointsSummary pointsSummary points</li>
          <li>Summary pointsSummary pointsSummary pointsSummary points</li>
          <li>Summary pointsSummary pointsSummary pointsSummary points</li>
          <li>Summary pointsSummary pointsSummary pointsSummary points</li>
          <li>Summary pointsSummary pointsSummary pointsSummary points</li>
        </ul>
      </div>
    </article>
  ); 
}

export default ExperienceCard