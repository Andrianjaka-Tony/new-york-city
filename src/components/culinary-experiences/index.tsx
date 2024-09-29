import { Link } from "react-router-dom";
import { restaurants } from "../../data/restaurants";

export function CulinaryExperiences() {
  return (
    <section className="my-[40vh]">
      <div className="px-5 flex flex-col gap-5">
        <p className="uppercase w-full text-center text-sm font-light">Culinary Experiences</p>
        <p className="w-2/3 mx-auto tracking-tight leading-tight text-4xl font-semibold text-center">Discover New York's vibrant culinary scene.</p>
        <p className="w-2/3 mx-auto font-light tracking-normal text-center">
          Explore a diverse array of dining options, from iconic street food to world-class restaurants, offering a taste of New York's rich cultural flavors.
        </p>
      </div>
      <div className="w-full px-5 mt-32 flex flex-col gap-12">
        {restaurants.map((restaurant, index) => (
          <Row key={index} {...restaurant} />
        ))}
      </div>
    </section>
  );
}

type RowProps = {
  id: number;
  name: string;
  tags: string[];
};
function Row({ id, name, tags }: RowProps) {
  return (
    <Link to={`/restaurant/${id}`}>
      <div className="w-full relative flex justify-center items-end">
        <p className="absolute left-0 uppercase text-sm sm:max-lg:text-xs mb-1">{tags[0]}</p>
        <p className="tracking-tight uppercase text-6xl sm:max-lg:text-3xl font-semibold">{name}</p>
        <p className="absolute right-0 uppercase text-sm sm:max-lg:text-xs mb-1">{tags[1]}</p>
      </div>
    </Link>
  );
}
