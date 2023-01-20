import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        //placeholder image
        src="https://source.unsplash.com/random/?Nature&2"
        alt="empty for now"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[520px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4x font-semibold">
          Here is a{" "}
          <span className="underline decoration-2 underline-offset-2 decoration-[#F7Ab0A]/40">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          mattis bibendum. Sed urna enim, aliquet ac aliquam a, congue vitae
          sem. Suspendisse nisl velit, placerat quis nulla sit amet, maximus
          ornare enim. Nulla eleifend ante ac magna faucibus, non ultrices
          ligula tristique. Curabitur suscipit rutrum ornare. Nulla facilisi.
          Suspendisse id tellus volutpat tellus accumsan sagittis. Curabitur
          semper nisi pellentesque lorem tincidunt, sed venenatis magna
          faucibus. Nam at massa bibendum, ullamcorper nisi et, sodales sem.
          Cras eget lectus ante. Suspendisse potenti.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
