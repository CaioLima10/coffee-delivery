import { Button } from "../../../../components/Button";
import { QuantityInput } from "../../../../components/quantity/input";
import { Trash } from "phosphor-react";
import ImgCoffee from "../../../../../public/coffees/americano.png";

export function CoffeCartCard() {
  return (
    <div>
      <div className="flex gap-2">
        <img src={ImgCoffee} alt="" className="w-20" />
        <div>
          <p className="text-base text-baseSubtitle">Expresso Tradicional</p>
          <div className="flex gap-2">
            <QuantityInput />
            <Button className="h-8 w-24 uppercase text-[11px] bg-baseButton rounded-md flex items-center justify-center gap-2">
              <Trash size={16} className="text-brandPurple" /> remove
            </Button>
          </div>
        </div>
        <span className="text-end font-balsamiq font-bold ml-6">R$ 9,90</span>
      </div>
      <div className="border border-baseInput shadow-sm w-full my-4" />
    </div>
  );
}
