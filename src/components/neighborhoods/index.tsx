import { Variants, motion } from "framer-motion";
import manhattan from "../../assets/images/neighborhoods/1.jpg";
import brooklyn from "../../assets/images/neighborhoods/2.jpg";
import queens from "../../assets/images/neighborhoods/3.jpg";
import harlem from "../../assets/images/neighborhoods/4.jpg";
import greenwich from "../../assets/images/neighborhoods/5.jpg";
import soho from "../../assets/images/neighborhoods/6.jpg";
import bronx from "../../assets/images/neighborhoods/7.jpg";
import chinatown from "../../assets/images/neighborhoods/8.jpg";
import { useState } from "react";

export function Neighborhoods() {
  return (
    <section className="my-[40vh]">
      <Title />
      <div className="px-10 flex flex-wrap mt-28 gap-x-4 gap-y-20 sm:max-lg:flex-wrap">
        <Card from="left" image={manhattan} title="Manhattan - The Heart of New York City" description="Times Square - Central Park - Empire State Building - Broadway Theaters" />
        <Card from="right" image={brooklyn} title="Brooklyn - Artistic and Trendy" description="Brooklyn Bridge - DUMBO - Williamsburg - Prospect Park" />
        <Card from="left" image={queens} title="Queens - Cultural Diversity" description="Flushing Meadows-Corona Park - Astoria - Museum of the Moving Image - Jackson Heights" />
        <Card from="right" image={harlem} title="Harlem - Rich History and Jazz" description="Apollo Theater - Harlem Jazz Clubs - Marcus Garvey Park - 125th Street" />
        <Card from="left" image={greenwich} title="Greenwich Village - Bohemian Charm" description="Washington Square Park - New York University - The Stonewall Inn - Bleecker Street" />
        <Card from="right" image={soho} title="SoHo - Fashion and Art" description="Cast Iron Architecture - Designer Boutiques - Art Galleries - Prince Street" />
        <Card from="left" image={bronx} title="The Bronx - Culture and Sports" description="Yankee Stadium - Bronx Zoo - New York Botanical Garden - Arthur Avenue" />
        <Card from="right" image={chinatown} title="Chinatown - Authentic and Vibrant" description="Canal Street - Mott Street - Chinatown Ice Cream Factory - Mahayana Buddhist Temple" />
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
      custom={[0.04]}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="px-10"
    >
      <motion.p variants={childrenVariants} className="uppercase w-full text-center sm:max-lg:text-left text-sm font-light mb-5 sm:max-lg:mb-2">
        Explore Neighborhoods
      </motion.p>
      <div className="w-2/3 sm:max-lg:w-full sm:max-lg:justify-start flex flex-wrap justify-center mx-auto tracking-tight leading-tight text-4xl sm:max-lg:text-3xl font-semibold text-center">
        {"Discover the distinct charm of New York’s iconic neighborhoods, each offering its own unique experience.".split(" ").map((word, index) => (
          <div key={index} className="overflow-hidden">
            <motion.p className="mr-[0.5625rem] sm:max-lg:mr-[0.46875rem]" variants={childrenVariants}>
              {word}
            </motion.p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

type CardProps = {
  image: string;
  title: string;
  description: string;
  from?: string;
};
function Card({ image, title, description, from }: CardProps) {
  const initial = from == "left" ? { y: "100%", x: "-100%", rotate: "-15deg" } : { y: "100%", x: "100%", rotate: "15deg" };
  const transformOrigin = from == "left" ? "0 0" : "100% 0";

  return (
    <motion.div
      initial={initial}
      whileInView={{ y: 0, x: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ transformOrigin }}
      viewport={{ once: true }}
      className="w-[calc(50%-0.5rem)] sm:max-lg:w-full"
    >
      <img src={image} className="w-full aspect-[16/10] object-cover rounded" />
      <p className="text-lg tracking-tight mt-3 font-bold">{title}</p>
      <p className="mt-0.5 font-normal text-sm leading-normal">{description}</p>
    </motion.div>
  );
}
