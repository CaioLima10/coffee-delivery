import { Minus, Plus } from "phosphor-react";

interface QuantityInputProps {
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function QuantityInput({
  onDecrease,
  onIncrease,
  quantity,
}: QuantityInputProps) {
  return (
    <div className="flex items-center justify-center mx-auto rounded-md">
      <button disabled={quantity <= 1}>
        <Minus
          size={10}
          weight="fill"
          className="bg-baseButton text-brandPurpleDark w-5 h-8 p-0.5
            cursor-pointer hover:bg-baseHover rounded-tl-md rounded-bl-md"
          onClick={onDecrease}
        />
      </button>
      <div className="flex items-center justify-center">
        <input
          type="number"
          readOnly
          value={quantity}
          className="appearance-none w-9 pl-3 h-8 text-base text-center 
          bg-baseButton hover:border-brandPurpleDark"
        />
      </div>
      <Plus
        size={10}
        weight="fill"
        className="bg-baseButton text-brandPurpleDark w-5 h-8 p-0.5
            cursor-pointer hover:bg-baseHover rounded-tr-md rounded-br-md"
        onClick={onIncrease}
      />
    </div>
  );
}
