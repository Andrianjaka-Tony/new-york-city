import { About } from "../../components/about";
import { Attractions } from "../../components/attractions";
import { CulinaryExperiences } from "../../components/culinary-experiences";
import { Footer } from "../../components/footer";
import { Hero } from "../../components/hero";
import { Neighborhoods } from "../../components/neighborhoods";
import { Transition } from "../../components/transition";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export function Home() {
  useScrollToTop();

  return (
    <>
      <Transition />
      <Hero />
      <About />
      <Neighborhoods />
      <Attractions />
      <CulinaryExperiences />
      <Footer />
    </>
  );
}
