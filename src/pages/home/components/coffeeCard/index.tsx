import { ShoppingCart } from "phosphor-react";
import { InfoWithIcon } from "../../../../components/infoWithIcon";
import { QuantityInput } from "../../../../components/quantity/input";
import { formatMoney } from "../../../../utils/formatMoney";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeCardData {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeCardData) {
  const formatPrice = formatMoney(coffee.price);

  return (
    <div className="mt-10">
      <div
        className="w-full rounded-tr-[36px] rounded-bl-[36px] p-6 
        flex flex-col items-center justify-center bg-baseCard pt-0 "
      >
        <img src={`/coffees/${coffee.photo}`} alt="COFFEE" className="-mt-8" />
        <div className="w-full flex items-center justify-center gap-1 mt-4 mb-6 flex-wrap ">
          {coffee.tags.map((tag) => (
            <span
              key={`${coffee.id}${tag}`}
              className="bg-brandYellowLight text-brandYellowDark flex items-center justify-center
                  text-[9.5px] h-6 font-bold rounded-full px-2 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-balsamiq font-bold text-baseSubtitle text-xl">
          {coffee.name}
        </h3>
        <p className="w-full text-baseLabel text-xs flex text-center my-3">
          {coffee.description}
        </p>
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center text-xs gap-1">
            R${" "}
            <p className="font-sans font-bold text-baseSubtitle text-2xl">
              {formatPrice}
            </p>
          </span>
          <div className="flex items-center gap-2">
            <QuantityInput />
            <InfoWithIcon
              icon={<ShoppingCart size={20} weight="fill" />}
              className="bg-brandPurpleDark hover:bg-brandPurple text-baseWhite rounded-md w-8 h-8 
              flex items-center justify-center cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
