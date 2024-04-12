import { coffees } from "../../data/coffees";
import { CoffeeCard } from "./components/coffeeCard";
import { Intro } from "./components/intro";
import { OurCoffees } from "./components/ourCoffees";

export function HomePage() {
  return (
    <div className="bg-baseBackground">
      <Intro />
      <OurCoffees />
      <div className="max-w-6xl grid grid-cols-4 gap-8 grid-rows-1 my-12">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
