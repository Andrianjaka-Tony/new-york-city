import { motion, Variants } from "framer-motion";
import { ease } from "../../utils/ease";
import MenuItem from "./menu.item";
import image from "../../assets/images/hero-image.webp";

interface Props {
  toggleMenu: () => void;
}

const clipVariants: Variants = {
  initial: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  animate: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 1,
      ease,
    },
  },
  exit: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    transition: {
      duration: 1,
      ease,
      delay: 0.1,
    },
  },
};

const items = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/attractions",
    name: "Attractions",
  },
  {
    link: "/restaurants",
    name: "Restaurants",
  },
];

const itemContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.04,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export default function Menu({ toggleMenu }: Props) {
  return (
    <motion.div variants={clipVariants} initial="initial" animate="animate" exit="exit" className="fixed inset-0 z-10 bg-gray-950 text-white">
      <button onClick={toggleMenu} className="absolute top-4 left-[50%] -translate-x-[50%] text">
        Close
      </button>
      <motion.div variants={itemContainerVariants} className="w-full flex py-32 pl-72 sm:max-lg:pl-10">
        <div className="flex flex-col">
          {items.map((item, index) => (
            <MenuItem key={item.link} toggleMenu={toggleMenu} index={index + 1} {...item} />
          ))}
        </div>
        <div className="flex flex-col ml-80 sm:max-lg:ml-60 text-xs">
          <div className="at-hauss-light">Instagram</div>
          <div className="at-hauss-light">WhatsApp</div>
        </div>
      </motion.div>
      <motion.img variants={clipVariants} className="absolute bottom-10 left-10 w-[30rem]" src={image} alt="" />
    </motion.div>
  );
}
