import { AddressForm } from "../addressForm";
import { PaymentMethodOptions } from "../paymentMethodOptions";
import { SectionTitle } from "../sectionTitle";

import { MapPinLine, CurrencyDollar } from "phosphor-react";

export function CompleteOrderForm() {
  return (
    <form className="w-full">
      <h1 className="font-2xl font-bold font-balsamiq text-baseTitle my-6">
        Complete seu pedido
      </h1>
      <SectionTitle
        icon={<MapPinLine size={22} className="text-brandYellowDark" />}
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        className="text-base bg-baseCard w-full p-10 rounded-md"
      >
        <AddressForm />
      </SectionTitle>
      <SectionTitle
        icon={<CurrencyDollar size={22} className="text-brandPurpleDark" />}
        title="Pagamento"
        subtitle="O pagamento é feito na entrega, Escolha a forma que deseja pagar."
        className="text-base bg-baseCard w-full p-10 rounded-md mt-4"
      >
        <PaymentMethodOptions />
      </SectionTitle>
    </form>
  );
}
