"use client";
import { AnimatePresence, delay, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const TransitionPrividor = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div
        key={pathname}
        className=" w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="w-screen h-screen  fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default  z-50 w-fit h-fit "
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathname.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black-500 rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transtion: { delay: 0.8 } }}
        />

        <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionPrividor;
