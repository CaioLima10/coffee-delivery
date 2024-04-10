import ImgCoffeDelivery from "../../../../assets/img-coffee-delivery.svg";

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
          <li>Compra simples e segura</li>
          <li>Embalagem mantém o café intacto</li>
          <li>Entrega rápida e rastreada</li>
          <li>O café chega fresquinho até você</li>
        </ul>
      </div>
      <img src={ImgCoffeDelivery} alt="IMG-COFFEE" />
    </section>
  );
}
