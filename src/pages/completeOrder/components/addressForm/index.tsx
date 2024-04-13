import { Input } from "../../../../components/input";

export function AddressForm() {
  return (
    <div className="w-full grid my-4">
      <Input
        placeholder="CEP"
        type="number"
        className="w-60 p-2 bg-baseInput border border-baseButton mb-4 rounded-md focus:border-brandYellow"
      />
      <Input
        placeholder="Rua"
        type="text"
        className="w-full p-2 bg-baseInput border border-baseButton rounded-md focus:border-brandYellow"
      />
      <div className="flex my-4 gap-2 w-full">
        <Input
          placeholder="Numero"
          type="text"
          className="w-60 p-2 bg-baseInput border border-baseButton rounded-md focus:border-brandYellow"
        />
        <div className="flex flex-1  border border-baseButton rounded-md focus:border-brandYellow">
          <Input
            placeholder="Complemento"
            type="text"
            className="w-full p-2 bg-baseInput"
          />
          <span
            className="font-thin flex items-center italic text-sm justify-center text-baseLabel
            bg-baseInput px-3 "
          >
            Opcional
          </span>
        </div>
      </div>
      <div className="flex  gap-2 ">
        <Input
          placeholder="Bairro"
          type="text"
          className="w-60 p-2 bg-baseInput border border-baseButton rounded-md focus:border-brandYellow"
        />
        <Input
          placeholder="Cidade"
          type="text"
          className="flex-1 p-2 bg-baseInput border border-baseButton rounded-md focus:border-brandYellow"
        />
        <Input
          placeholder="UF"
          type="UF"
          className="w-14 flex-2 p-2 bg-baseInput border border-baseButton rounded-md placeholder:text-base focus:border-brandYellow"
        />
      </div>
    </div>
  );
}
