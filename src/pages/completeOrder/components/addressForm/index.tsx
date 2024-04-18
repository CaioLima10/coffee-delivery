import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/input";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <div className="w-full grid">
      <Input
        placeholder="CEP"
        type="number"
        {...register("cep")}
        className="w-60 p-2 bg-baseInput border border-baseButton mb-2 rounded-md focus:border-brandYellow"
      />
      <span className="text-baseError mb-2">{errors.cep?.message}</span>
      <Input
        placeholder="Rua"
        type="text"
        className="w-full p-2 bg-baseInput border border-baseButton rounded-md focus:border-brandYellow"
        {...register("street")}
      />
      <span className="text-baseError mb-2">{errors.street?.message}</span>

      <div className="flex my-4 gap-2 w-full">
        <div className="flex flex-col">
          <Input
            placeholder="Numero"
            type="text"
            className="w-60 p-2 bg-baseInput border border-baseButton rounded-md focus:border-brandYellow"
            {...register("number")}
          />
          <span className="text-baseError">{errors.number?.message}</span>
        </div>

        <div className="flex flex-col w-full">
          <div className=" w-full max-w-sm flex items-center">
            <Input
              placeholder="Complemento"
              type="text"
              className="w-full flex-1 p-2 bg-baseInput flex border-t-baseButton
                border-b-baseButton border-l-baseButton border-r-baseInput  
                          border rounded-tl-md rounded-bl-md focus:border-brandYellow"
              {...register("complement")}
            />
            <span
              className="text-base italic text-baseLabel p-[11.5px] bg-baseInput
                  border border-t-baseButton border-b-baseButton border-r-baseButton border-l-baseInput 
                  rounded-tr-md rounded-br-md
              "
            >
              opcional
            </span>
          </div>
          <span className="text-baseError mb-2">
            {errors.complement?.message}
          </span>
        </div>
      </div>
      <div className="flex  gap-2 ">
        <div className="flex flex-col">
          <Input
            placeholder="Bairro"
            type="text"
            className="w-60 p-2 bg-baseInput border border-baseButton rounded-md focus:border-brandYellow"
            {...register("district")}
          />
          <span className="text-baseError mb-2">
            {errors.district?.message}
          </span>
        </div>

        <div className="flex flex-col">
          <Input
            placeholder="Cidade"
            type="text"
            className="flex-1 p-2 bg-baseInput border border-baseButton rounded-md focus:border-brandYellow"
            {...register("city")}
          />
          <span className="text-baseError mb-2">{errors.city?.message}</span>
        </div>

        <div className="flex flex-col">
          <Input
            placeholder="UF"
            type="UF"
            className="w-14 flex-2 p-2 bg-baseInput border border-baseButton rounded-md placeholder:text-base focus:border-brandYellow"
            {...register("uf")}
          />
          <span className="text-baseError mb-2">{errors.uf?.message}</span>
        </div>
      </div>
    </div>
  );
}
