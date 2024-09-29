import { CulinaryExperiences } from "../../components/culinary-experiences";
import { Footer } from "../../components/footer";
import { Transition } from "../../components/transition";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export function RestaurantList() {
  useScrollToTop();

  return (
    <>
      <Transition />
      <CulinaryExperiences />
      <Footer />
    </>
  );
}
