import { CompleteOrderForm } from "./components/completeOrderForm";
import { SelectedCoffees } from "./components/selectedCoffees";

export function CompleteOrderPage() {
  return (
    <div className=" max-w-6xl min-h-screen flex gap-6 mb-6 bg-baseBackground">
      <CompleteOrderForm />
      <SelectedCoffees />
    </div>
  );
}
