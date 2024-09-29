import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ease } from "../../utils/ease";
import { attractions } from "../../data/attractions";
import { Link } from "react-router-dom";

export function Attractions() {
  return (
    <section className="my-[40vh]">
      <div className="w-full px-10">
        <p className="tracking-tight leading-tight text-6xl font-semibold">Top attractions</p>
      </div>
      <div className="w-full mt-16 flex flex-col px-10">
        {attractions.map((attraction, index) => (
          <Row key={index} {...attraction} />
        ))}
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>
    </section>
  );
}

type RowProps = {
  id: number;
  title: string;
  description: string[];
  tags: string[];
  image: string;
  left: string;
  height: string;
};
function Row({ id, title, description, tags, image, left, height }: RowProps) {
  const [isHovered, setIsHovered] = useState(false);

  const variants: Variants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const handleHover = () => {
    setIsHovered((previous) => !previous);
  };

  return (
    <Link to={`/attraction/${id}`}>
      <motion.div onMouseOver={handleHover} onMouseOut={handleHover} className="relative overflow-hidden flex gap-4 pt-6 pb-12 border-t-[1px] border-gray-300 sm:max-lg:flex-wrap">
        <motion.img
          src={image}
          style={{ left, height }}
          variants={variants}
          initial="initial"
          animate={isHovered ? "animate" : "initial"}
          transition={{ duration: 0.4, ease }}
          className="absolute bottom-0 h-full object-cover"
        />
        <div className="w-1/2 sm:max-lg:w-full sm:max-lg:text-2xl">
          <p className="font-semibold tracking-tight">{title}</p>
        </div>
        <div className="w-1/4 sm:max-lg:w-1/4">
          {tags.map((tag, index) => (
            <p className="text-xs leading-normal uppercase" key={index}>
              {tag}
            </p>
          ))}
        </div>
        <div className="w-1/4 sm:max-lg:1/2 sm:max-lg:ml-auto">
          {description.map((desc, index) => (
            <p className="text-xs leading-normal" key={index}>
              {desc}
            </p>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
