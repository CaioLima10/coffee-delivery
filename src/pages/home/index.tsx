import { CoffeeCard } from "./components/coffeeCard";
import { Intro } from "./components/intro";
import { OurCoffees } from "./components/ourCoffees";

export function HomePage() {
  return (
    <div className="bg-baseBackground">
      <Intro />
      <OurCoffees />
      <CoffeeCard />
    </div>
  );
}
