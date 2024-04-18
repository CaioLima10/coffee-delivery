import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../paymentMethodInput";
import { useFormContext } from "react-hook-form";

export const paymentMethods = {
  credit: {
    icon: <CreditCard size={24} />,
    label: "Cartão de Crédito",
    value: "credit",
  },
  debit: {
    icon: <Bank size={24} />,
    label: "Cartão de Débito",
    value: "debit",
  },
  money: {
    icon: <Money size={24} />,
    label: "Dinheiro",
    value: "money",
  },
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <section className="flex flex-col items-center mt-8">
      <div className="flex gap-8 items-start">
        {Object.entries(paymentMethods).map(([key, { label, icon, value }]) => (
          <PaymentMethodInput
            key={key}
            id={key}
            icon={icon}
            label={label}
            value={value}
            {...register("paymentMethod")}
          />
        ))}
      </div>
      <div>
        {paymentMethodError && (
          <span className="text-baseError">{paymentMethodError}</span>
        )}
      </div>
    </section>
  );
}
