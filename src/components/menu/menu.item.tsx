import { Link } from "react-router-dom";

import { motion, Variants } from "framer-motion";
import { ease } from "../../utils/ease";

interface Props {
  link: string;
  name: string;
  index: number;
  toggleMenu: () => void;
}

const variants: Variants = {
  initial: {
    y: "150%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.4,
      ease,
    },
  },
  exit: {
    y: "200%",
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export default function MenuItem({ link, name, index, toggleMenu }: Props) {
  return (
    <Link onClick={toggleMenu} className="relative flex text-4xl sm:max-lg:text-2xl mb-2 w-fit" to={link}>
      <div className="overflow-hidden">
        <motion.div className="flex" variants={variants}>
          <span className="text-xs mt-1">0{index}</span>
          <span className="ml-2">{name}</span>
        </motion.div>
      </div>
    </Link>
  );
}
