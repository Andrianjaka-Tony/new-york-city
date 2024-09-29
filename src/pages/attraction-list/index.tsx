import { Attractions } from "../../components/attractions";
import { Footer } from "../../components/footer";
import { Transition } from "../../components/transition";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export function AttractionList() {
  useScrollToTop();

  return (
    <>
      <Transition />
      <Attractions />
      <Footer />
    </>
  );
}
