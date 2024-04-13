import { CoffeCartCard } from "../coffeeCartCard";
import { ConfirmationSelected } from "./confirmationSelected";

export function SelectedCoffees() {
  return (
    <div className="flex flex-col items-start w-full">
      <h1 className="flex text-start font-2xl font-bold font-balsamiq text-baseTitle my-6">
        Cafés selecionados
      </h1>
      <div className="text-base bg-baseCard w-full p-10 rounded-md rounded-tr-[40px] rounded-bl-[40px]">
        <CoffeCartCard />
        <CoffeCartCard />
        <CoffeCartCard />
        <ConfirmationSelected />
      </div>
    </div>
  );
}
