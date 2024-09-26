// import Navbar from "@/components/navbar";
const Homepage = () => {
  return (
    <div className=" flex items-center	 flex-col lg:flex-row md:flex-row sm:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48  ">
      {/* image container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative z-45">
        <img src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* text container */}
      <div className="h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center z-45">
      {/* Titelr */}
        <h1 className="text-4xl font-bold ">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        <p>
          I am a junior software developer with a passion for the MERN stack and
          previous experience in front-end development. I am seeking
          opportunities to enhance my skills and contribute to innovative
          projects as a junior software developer.
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
  );
};

export default Homepage;
