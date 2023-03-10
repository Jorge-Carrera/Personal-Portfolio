import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://cdn.jsdelivr.net/npm/image-hover/placeholder.png"
              alt="placeholder"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}
                </span>
                : Name {project}
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                non tortor lacinia nibh sagittis mattis a ac velit. Sed rutrum,
                risus vitae consectetur volutpat, nisl sem accumsan sapien, sed
                auctor massa ligula eu erat. Proin eget bibendum elit. Nunc urna
                risus, porttitor in hendrerit gravida, tincidunt ut ex. Proin
                vehicula sem magna, vitae iaculis erat porttitor nec. Praesent
                ac congue leo. In hac habitasse platea dictumst. Cras sapien
                nulla, sollicitudin sit amet ex non, faucibus fringilla lectus.
                Phasellus viverra tincidunt est ac vestibulum. Aliquam elementum
                purus tellus, et imperdiet nulla fringilla ac. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Sed ac diam justo. Curabitur vehicula a risus
                vitae elementum. Morbi quis dolor quis sapien viverra aliquet.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
