import ImgCoffeDelivery from "../../../../assets/img-coffee-delivery.svg";
import { InfoWithIcon } from "../../../../components/infoWithIcon";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

export function Intro() {
  return (
    <section className="flex items-center justify-between max-w-6xl gap-8 mx-auto mt-10">
      <div>
        <h1 className="font-balsamiq text-5xl font-bold text-baseTitle">
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p className="text-xl mt-4 ">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ul className="grid grid-cols-2 gap-8 mt-16 mb-4 text-base">
          <InfoWithIcon
            className="bg-brandYellowDark text-baseWhite w-8 h-8 rounded-full flex items-center justify-center"
            text="Compra simples e segura"
            icon={<ShoppingCart size={20} weight="fill" />}
          />
          <InfoWithIcon
            className="bg-baseText text-baseWhite w-8 h-8 rounded-full flex items-center justify-center"
            text="Embalagem mantém o café intacto"
            icon={<Package size={20} weight="fill" />}
          />
          <InfoWithIcon
            className="bg-brandYellow text-baseWhite w-8 h-8 rounded-full flex items-center justify-center"
            text="Entrega rápida e rastreada"
            icon={<Timer size={20} weight="fill" />}
          />
          <InfoWithIcon
            className="bg-brandPurple text-baseWhite w-8 h-8 rounded-full flex items-center justify-center"
            text="O café chega fresquinho até você"
            icon={<Coffee size={20} weight="fill" />}
          />
        </ul>
      </div>
      <img src={ImgCoffeDelivery} alt="IMG-COFFEE" />
    </section>
  );
}
