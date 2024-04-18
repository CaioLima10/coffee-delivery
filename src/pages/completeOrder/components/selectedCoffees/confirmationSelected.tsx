import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSelected() {
  const { cartItemTotal, cartQuantity } = useCart();

  const cartTotal = DELIVERY_PRICE + cartItemTotal;

  const formattedItemsTotal = formatMoney(cartItemTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm">
        <p>Total itens</p>
        <span>{formattedItemsTotal}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <p>Entrega</p>
        <span>R$ {formattedDeliveryPrice}</span>
      </div>
      <div className="flex items-center justify-between font-balsamiq font-bold text-xl uppercase">
        <p>Total</p>
        <span>r$ {formattedCartTotal}</span>
      </div>
      <Button
        className="bg-brandYellow text-baseWhite w-full mt-2 rounded-md 
      uppercase font-bold h-12 text-sm hover:bg-brandYellow/90 duration-300"
        disabled={cartQuantity <= 0}
        type="submit"
      >
        Confirmar pedido
      </Button>
    </div>
  );
}
