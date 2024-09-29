import { motion, Variants } from "framer-motion";
import { ease } from "../../utils/ease";

const clipVariants: Variants = {
  initial: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  animate: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    transition: {
      duration: 1,
      ease,
      delay: 1,
    },
  },
  animate2: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  exit: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 1,
      ease,
      delay: 0.1,
    },
  },
};

export function Transition() {
  return (
    <>
      <motion.div variants={clipVariants} initial="initial" animate="animate" className="fixed bg-gray-950 top-0 left-0 h-screen w-screen z-20"></motion.div>
      <motion.div variants={clipVariants} animate="animate2" exit="exit" className="fixed bg-gray-950 top-0 left-0 h-screen w-screen z-20"></motion.div>
    </>
  );
}
