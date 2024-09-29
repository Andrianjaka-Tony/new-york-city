import { motion, Variants } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { useParams } from "react-router-dom";
import { restaurants } from "../../data/restaurants";
import { ease } from "../../utils/ease";
import { Transition } from "../../components/transition";
import { useScrollToTop } from "../../hooks/useScrollToTop";

import r1 from "../../assets/images/restau/1.jpg";
import r2 from "../../assets/images/restau/2.jpg";
import r3 from "../../assets/images/restau/3.jpg";
import r4 from "../../assets/images/restau/4.jpg";
import r5 from "../../assets/images/restau/5.jpg";
import r6 from "../../assets/images/restau/6.jpg";

export function Restaurant() {
  useScrollToTop();

  const { id } = useParams();
  const restaurant = restaurants.filter((restaurant) => restaurant.id === Number(id))[0];
  const { name, tags, description, location } = restaurant;

  return (
    <>
      <Transition />
      <div className="px-5">
        <Hero name={name} tags={tags} description={description} location={location} />
        <Images />
      </div>
      <Footer />
    </>
  );
}

type HeroProps = {
  name: string;
  tags: string[];
  description: string;
  location: string;
};
function Hero({ name, tags, description, location }: HeroProps) {
  return (
    <section className="w-full">
      <HeroTitle name={name} />
      <HeroDescription description={description} tags={tags} location={location} />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.9, duration: 0.4 } }} className="mt-12">
        <Button text="Book a table" leftIcon={<UtensilsCrossed className="w-3 h-3" />} rightIcon={<UtensilsCrossed className="w-3 h-3" />} />
      </motion.div>
    </section>
  );
}

function HeroTitle({ name }: { name: string }) {
  const parentVariants: Variants = {
    animate: {
      transition: { staggerChildren: 0.02 },
    },
  };

  const childrenVariants: Variants = {
    initial: { y: "150%" },
    animate: {
      y: 0,
      transition: { duration: 2, ease },
    },
  };

  return (
    <motion.h1
      variants={parentVariants}
      initial="initial"
      animate="animate"
      className="w-full flex flex-wrap justify-center sm:max-lg:justify-start mt-40 text-center text-8xl sm:max-lg:text-4xl uppercase tracking-tight"
    >
      {Array.from(name).map((character, index) =>
        character != " " ? (
          <div key={index} className="overflow-hidden flex">
            <motion.span variants={childrenVariants}>{character}</motion.span>
          </div>
        ) : (
          <div key={index} className="ml-6 sm:max-lg:ml-[0.625rem]"></div>
        )
      )}
    </motion.h1>
  );
}

function HeroDescription({ description, tags, location }: { description: string; tags: string[]; location: string }) {
  const parentVariants: Variants = {
    animate: {
      transition: { staggerChildren: 0.2, delayChildren: 1.5 },
    },
  };

  const childrenVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div variants={parentVariants} initial="initial" animate="animate" className="w-full mt-48 sm:max-lg:mt-24 flex sm:max-lg:flex-col sm:max-lg:items-start gap-5">
      <motion.div variants={childrenVariants} className="w-1/3 sm:max-lg:w-full text-sm  leading-normal">
        <p className="text-lg uppercase mb-1">Description</p>
        <p className="font-light">{description}</p>
      </motion.div>
      <motion.div variants={childrenVariants} className="w-1/4 sm:max-lg:w-full ml-auto text-sm leading-normal">
        <p className="font-semibold text-lg uppercase mb-1">Tags</p>
        <p className="font-light">{tags.join(", ")}</p>
      </motion.div>
      <motion.div variants={childrenVariants} className="w-1/4 sm:max-lg:w-full text-sm leading-normal">
        <p className="font-semibold text-lg uppercase mb-1">Location</p>
        <p className="font-light">{location}</p>
      </motion.div>
    </motion.div>
  );
}

function Images() {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0, transition: { delay: 2, duraiton: 0.4 } }} className="flex flex-col gap-5 mt-24 mb-[40vh]">
      <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }} viewport={{ once: true }} src={r1} className="w-full object-cover" />
      <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }} viewport={{ once: true }} src={r2} className="w-full object-cover" />
      <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }} viewport={{ once: true }} src={r3} className="w-full object-cover" />
      <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }} viewport={{ once: true }} src={r4} className="w-full object-cover" />
      <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }} viewport={{ once: true }} src={r5} className="w-full object-cover" />
      <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }} viewport={{ once: true }} src={r6} className="w-full object-cover" />
    </motion.div>
  );
}
