import { motion, Variants } from "framer-motion";
import { useState } from "react";

export function About() {
  return (
    <section className="my-[40vh]">
      <div className="flex justify-between px-10 sm:max-lg:flex-wrap sm:max-lg:gap-4">
        <Title />
        <motion.div
          initial={{ y: "100%", x: "100%", rotate: "15deg" }}
          whileInView={{ y: 0, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "100% 0%" }}
          viewport={{ once: true }}
          className="w-[45%] sm:max-lg:w-full flex flex-col justify-between p-5 rounded-lg bg-orange-200"
        >
          <p className="text-8xl font-semibold">8.4M</p>
          <p className="mt-24 text-2xl leading-normal font-light">
            <p>New York City is the most</p>
            <p>populous city in the United States,</p>
            <p>with 8.4 million residents.</p>
          </p>
        </motion.div>
      </div>
      <div className="flex gap-4 mt-4 px-10 sm:max-lg:flex-wrap">
        <motion.div
          initial={{ y: "100%", x: "-100%", rotate: "-15deg" }}
          whileInView={{ y: 0, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "0 0" }}
          viewport={{ once: true }}
          className="w-3/5 sm:max-lg:w-full p-5 rounded-lg bg-violet-200"
        >
          <p className="text-8xl font-semibold">800+</p>
          <p className="mt-24 text-2xl leading-normal font-light">
            <p>Over 800 languages are spoken</p>
            <p>in New York, making it the most linguistically</p>
            <p>diverse city globally.</p>
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "100%", x: "100%", rotate: "15deg" }}
          whileInView={{ y: 0, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "100% 0%" }}
          viewport={{ once: true }}
          className="w-2/5 sm:max-lg:w-full p-5 rounded-lg bg-yellow-200"
        >
          <p className="text-8xl font-semibold">4.3M</p>
          <p className="mt-24 text-2xl leading-normal font-light">
            <p>Times Square attracts around</p>
            <p>4.3 million visitors monthly, making it one</p>
            <p>of the world’s top attractions.</p>
          </p>
        </motion.div>
      </div>
      <div className="flex gap-4 mt-4 px-10 sm:max-lg:flex-wrap">
        <motion.div
          initial={{ y: "100%", x: "-100%", rotate: "-15deg" }}
          whileInView={{ y: 0, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "0 0" }}
          viewport={{ once: true }}
          className="w-1/2 sm:max-lg:w-full p-5 rounded-lg bg-gray-950 text-white"
        >
          <p className="text-8xl font-semibold">93k</p>
          <p className="mt-24 text-2xl leading-normal font-light">
            <p>New York has approximately</p>
            <p>93,000 restaurants, offering a culinary experience</p>
            <p>that spans all cultures and tastes.</p>
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "100%", x: "100%", rotate: "15deg" }}
          whileInView={{ y: 0, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "100% 0%" }}
          viewport={{ once: true }}
          className="w-1/2 sm:max-lg:w-full p-5 rounded-lg bg-green-200"
        >
          <p className="text-8xl font-semibold">36M</p>
          <p className="mt-24 text-2xl leading-normal font-light">
            <p>Central Park, the city’s green oasis,</p>
            <p>welcomes around 36 million visitors annually, providing</p>
            <p>a peaceful retreat amidst the bustling city.</p>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Title() {
  const [isInView, setIsInView] = useState(false);

  const titleVariants: Variants = {
    animate: ([staggerChildren]) => ({
      transition: { staggerChildren, delayChildren: 0.2 },
    }),
  };
  const childrenVariants: Variants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      onViewportEnter={() => {
        setIsInView(true);
      }}
      viewport={{ once: true }}
      variants={titleVariants}
      custom={[0.08]}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="text-4xl sm:max-lg:text-3xl sm:max-lg:mb-10 w-1/2 sm:max-lg:w-full font-semibold tracking-tight leading-[1.2]"
    >
      <motion.div variants={childrenVariants} className="uppercase text-sm font-light mb-5 sm:max-lg:mb-2">
        About
      </motion.div>
      <motion.div>
        <div className="overflow-hidden">
          <motion.p variants={childrenVariants}>New York is a vibrant, cultural</motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p variants={childrenVariants}>metropolis known for its skyscrapers</motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p variants={childrenVariants}>and diverse atmosphere.</motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
