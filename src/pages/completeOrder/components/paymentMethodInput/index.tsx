import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <section className="flex flex-col items-start">
      <input
        className="hidden appearance-none"
        id={id}
        type="radio"
        {...props}
        name="paymentMethod"
        ref={ref}
      />
      <div className="flex gap-6">
        <label
          htmlFor={id}
          className="cursor-pointer focus:ring-1 focus:ring-brandPurple rounded-md"
          tabIndex={0}
        >
          <div
            className="flex items-center gap-2 bg-baseButton hover:bg-baseHover duration-300 
                p-2.5 rounded-md hover:ring-1 hover:ring-brandPurple "
          >
            {icon}
            {label}
          </div>
        </label>
      </div>
    </section>
  );
});
