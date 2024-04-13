import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      className="uppercase text-xs flex items-center hover:bg-baseHover
              justify-center gap-2 bg-baseButton h-14 w-48 rounded-md focus:border 
            focus:border-brandPurple"
      {...props}
    />
  );
}
