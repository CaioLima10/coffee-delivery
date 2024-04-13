import { Button } from "../../../../components/Button";
import { CreditCard } from "phosphor-react";

export function PaymentMethodOptions() {
  return (
    <section className="flex items-center gap-2 mt-8">
      <Button>
        <CreditCard size={20} className="text-brandPurple" /> cartão de crédito
      </Button>
      <Button>
        <CreditCard size={20} className="text-brandPurple" /> cartão de debito
      </Button>
      <Button>
        <CreditCard size={20} className="text-brandPurple" /> dinheiro
      </Button>
    </section>
  );
}
