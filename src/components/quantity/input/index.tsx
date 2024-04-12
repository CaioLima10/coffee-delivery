import { Minus, Plus } from "phosphor-react";

export function QuantityInput() {
  return (
    <div className="flex items-center justify-center mx-auto rounded-md">
      <Minus
        size={10}
        weight="fill"
        className="bg-baseHover text-brandPurpleDark w-6 h-8 p-1
    cursor-pointer hover:bg-baseButton rounded-tl-md rounded-bl-md"
      />
      <div className="flex items-center justify-center">
        <input
          type="number"
          readOnly
          value={99}
          className="appearance-none w-12 pl-3.5 h-8 text-lg text-center bg-baseHover hover:border-brandPurpleDark"
        />
      </div>
      <Plus
        size={10}
        weight="fill"
        className="bg-baseHover text-brandPurpleDark w-6 h-8 p-1
    cursor-pointer hover:bg-baseButton rounded-tr-md rounded-br-md"
      />
    </div>
  );
}
