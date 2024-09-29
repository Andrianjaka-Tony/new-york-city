import { useParams } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { attractions } from "../../data/attractions";
import { Footer } from "../../components/footer";
import { Transition } from "../../components/transition";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export function Attraction() {
  const { id } = useParams();
  const attraction = attractions.filter((attraction) => attraction.id === Number(id))[0];
  const { title, description, tags, image, images } = attraction;

  return (
    <>
      <Transition />
      <div>
        <Hero title={title} description={description} tags={tags} image={image} />
        <Images images={images} />
        <Footer />
      </div>
    </>
  );
}

type HeroProps = {
  title: string;
  description: string[];
  tags: string[];
  image: string;
};
function Hero({ title, description, tags, image }: HeroProps) {
  return (
    <section className="relative w-screen h-screen">
      <img src={image} className="brightness-[0.3] w-full h-full object-cover" />
      <HeroTitle title={title} description={description} tags={tags} />
    </section>
  );
}

function HeroTitle({ title, description, tags }: { title: string; description: string[]; tags: string[] }) {
  const variants: Variants = {
    animate: {
      transition: { staggerChildren: 0.05 },
    },
  };
  const childrenVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div variants={variants} initial="initial" animate="animate" className="absolute top-0 flex flex-col justify-center px-10 h-full text-white">
      <motion.h1 variants={childrenVariants} className="tracking-tight font-semibold text-4xl">
        {title}
      </motion.h1>
      <div className="mt-16">
        <motion.p variants={childrenVariants} className="text-2xl mb-4 font-light">
          Description
        </motion.p>
        {description.map((desc, index) => (
          <motion.p variants={childrenVariants} key={index} className="text leading-relaxed tracking-tight text-gray-400">
            {desc}
          </motion.p>
        ))}
      </div>
      <div className="mt-16">
        <motion.p variants={childrenVariants} className="text-2xl mb-4 font-light">
          Tags
        </motion.p>
        {tags.map((tag, index) => (
          <motion.p variants={childrenVariants} key={index} className="text leading-relaxed tracking-tight text-gray-400">
            {tag}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

type ImagesProps = {
  images: string[];
};
function Images({ images }: ImagesProps) {
  useScrollToTop();

  return (
    <div className="fw-full px-5 flex flex-col gap-5 my-[40vh]">
      {images.map((image, index) => (
        <motion.img
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }}
          viewport={{ once: true }}
          src={image}
          className="w-full object-cover"
        />
      ))}
    </div>
  );
}
