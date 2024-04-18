import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <input {...props} ref={ref} />
        {error && <p className="text-baseError">{error}</p>}
      </div>
    );
  }
);
