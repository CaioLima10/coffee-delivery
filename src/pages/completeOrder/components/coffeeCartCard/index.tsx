import { Button } from "../../../../components/Button";
import { QuantityInput } from "../../../../components/quantity/input";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../contexts/cartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCoffeeCart } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemoveCoffee() {
    removeCoffeeCart(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattePrice = formatMoney(coffeeTotal);

  return (
    <div>
      <div className="flex gap-2">
        <img src={`/coffees/${coffee.photo}`} alt="" className="w-20" />
        <div>
          <p className="text-base text-baseSubtitle">{coffee.name}</p>
          <div className="flex gap-2">
            <QuantityInput
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
              quantity={coffee.quantity}
            />
            <Button
              onClick={handleRemoveCoffee}
              className="h-8 w-24 uppercase text-[11px] bg-baseButton rounded-md flex items-center justify-center gap-2"
            >
              <Trash size={16} className="text-brandPurple" /> remove
            </Button>
          </div>
        </div>
        <span className="text-end font-balsamiq font-bold ml-6">
          {formattePrice}
        </span>
      </div>
      <div className="border border-baseInput shadow-sm w-full my-4" />
    </div>
  );
}
