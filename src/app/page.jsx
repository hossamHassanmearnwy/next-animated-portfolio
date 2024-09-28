"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex items-center	 flex-col lg:flex-row md:flex-row sm:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48  ">
        {/* image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center z-45">
          {/* Titelr */}
          <h1 className="text-4xl font-bold ">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          <p>
            I am a Web Developer (MERN stack ) with previous experience in
            front-end and back-end . I am seeking opportunities to enhance my
            skills and contribute to innovative projects as a software developer
          </p>
          <div className=" flex flex-center gap-8 rounded bg-red">
            {/* buttons */}
            <button className="p-4 rounded-lg ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-black bg-black text-white">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
