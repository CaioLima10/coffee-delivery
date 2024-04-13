import { Minus, Plus } from "phosphor-react";

export function QuantityInput() {
  return (
    <div className="flex items-center justify-center mx-auto rounded-md">
      <Minus
        size={10}
        weight="fill"
        className="bg-baseButton text-brandPurpleDark w-5 h-8 p-0.5
            cursor-pointer hover:bg-baseHover rounded-tl-md rounded-bl-md"
      />
      <div className="flex items-center justify-center">
        <input
          type="number"
          readOnly
          value={1}
          className="appearance-none w-9 pl-3 h-8 text-base text-center 
          bg-baseButton hover:border-brandPurpleDark"
        />
      </div>
      <Plus
        size={10}
        weight="fill"
        className="bg-baseButton text-brandPurpleDark w-5 h-8 p-0.5
            cursor-pointer hover:bg-baseHover rounded-tr-md rounded-br-md"
      />
    </div>
  );
}
