import { Button } from "../../../../components/Button";

export function ConfirmationSelected() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm">
        <p>Total itens</p>
        <span></span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </div>
      <div className="flex items-center justify-between font-balsamiq font-bold text-xl uppercase">
        <p>Total</p>
        <span>r$ 13,40</span>
      </div>
      <Button className="bg-brandYellow text-baseWhite w-full mt-2 rounded-md uppercase font-bold h-12 text-sm hover:bg-brandYellow/90 duration-300">
        Confirmar pedido
      </Button>
    </div>
  );
}
