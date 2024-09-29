import { useRef } from "react";
import { motion, MotionValue, useMotionTemplate, useScroll, useTransform, Variants } from "framer-motion";
import image from "../../assets/images/hero-image.webp";
import { ease } from "../../utils/ease";

export function Hero() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <motion.section ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 left-0 w-screen h-screen">
        <Image progress={scrollYProgress} />
        <Text />
      </div>
    </motion.section>
  );
}

type ImageProps = {
  progress: MotionValue<number>;
};
function Image({ progress }: ImageProps) {
  const point1 = useTransform(progress, [0, 1], ["40%", "0%"]);
  const point2 = useTransform(progress, [0, 1], ["60%", "100%"]);
  const point3 = useTransform(progress, [0, 1], ["30%", "0%"]);
  const point4 = useTransform(progress, [0, 1], ["70%", "100%"]);
  const clipPath = useMotionTemplate`polygon(${point1} ${point3}, ${point2} ${point3}, ${point2} ${point4}, ${point1} ${point4})`;

  const scale = useTransform(progress, [0, 1], [1.6, 1]);

  return (
    <motion.div style={{ clipPath }} className="absolute z-10 w-full h-full overflow-hidden">
      <motion.img src={image} style={{ scale }} alt="Hero image" className="w-full h-full object-cover" />;
    </motion.div>
  );
}

function Text() {
  const parentVariants: Variants = {
    animate: ([staggerDirection]: [number]) => ({
      transition: { staggerChildren: 0.03, staggerDirection },
    }),
  };

  const childrenVariants: Variants = {
    initial: { y: "200%" },
    animate: {
      y: 0,
      transition: { duration: 1.2, ease },
    },
  };

  return (
    <motion.div initial="initial" animate="animate" className="absolute flex justify-between w-full bottom-0 p-4 text-center text-8xl">
      <motion.div variants={parentVariants} custom={[1]} className="flex family-bu overflow-hidden tracking-tight">
        {Array.from("New").map((character, index) => (
          <motion.span key={index} variants={childrenVariants} className="parent-font">
            {character}
          </motion.span>
        ))}
      </motion.div>
      <motion.div variants={parentVariants} custom={[-1]} className="flex family-bu overflow-hidden tracking-tight">
        {Array.from("York").map((character, index) => (
          <motion.span key={index} variants={childrenVariants} className="parent-font">
            {character}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
