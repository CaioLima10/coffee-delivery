import { FormProvider, useForm } from "react-hook-form";
import { CompleteOrderForm } from "./components/completeOrderForm";
import { SelectedCoffees } from "./components/selectedCoffees";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  const handleConfirmForm = (data: ConfirmOrderFormData) => {
    navigate("/orderConfirmed", {
      state: data,
    });
  };

  return (
    <FormProvider {...confirmOrderForm}>
      <form
        className="max-w-6xl min-h-screen flex gap-6 mb-6 bg-baseBackground"
        onSubmit={handleSubmit(handleConfirmForm)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </form>
    </FormProvider>
  );
}
