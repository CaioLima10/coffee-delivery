import { useLocation } from "react-router-dom";
import ImgConfirmedIllustration from "../../assets/Illustration.svg";
import { InfoWithIcon } from "../../components/infoWithIcon";
import { Timer, MapPin, CurrencyDollar } from "phosphor-react";
import { OrderData } from "../completeOrder";
import { paymentMethods } from "../completeOrder/components/paymentMethodOptions";

interface LocationProps {
  state: OrderData;
}

export function OrderConfirmed() {
  const { state } = useLocation() as unknown as LocationProps;

  return (
    <div className="max-w-6xl container flex flex-col gap-6 mb-6 bg-baseBackground">
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-brandYellowDark font-balsamiq">
          Uhu! Pedido confirmado
        </h1>
        <h2 className="text-lg text-baseTitle tracking-wide">
          Agora é só aguardar que logo o café chegará até você
        </h2>
      </div>
      <section className="flex items-center justify-between gap-16">
        <div
          className="flex flex-col gap-8 border border-brandPurple p-8
          w-full rounded-tr-[40px] rounded-bl-[40px]"
        >
          <InfoWithIcon
            icon={
              <MapPin
                size={22}
                className="bg-brandPurple text-baseWhite w-10 h-10 p-2 rounded-full"
              />
            }
            className="flex text-sm"
            text={`Entrega em`}
            subtext={`${state.district}- ${state.city}- ${state.uf}`}
          >
            {" "}
            <strong>
              {state.street}, {state.number}
            </strong>
          </InfoWithIcon>

          <InfoWithIcon
            icon={
              <Timer
                size={22}
                className="bg-brandYellow text-baseWhite w-10 h-10 p-2 rounded-full"
              />
            }
            text="Previsão de entrega"
            subtext={
              <span style={{ fontWeight: "bold" }}>20 min - 30 min</span>
            }
            className="flex text-sm"
          />
          <InfoWithIcon
            icon={
              <CurrencyDollar
                size={22}
                className="bg-brandYellowDark text-baseWhite w-10 h-10 p-2 rounded-full"
              />
            }
            text="Previsão de entrega"
            subtext={
              <span style={{ fontWeight: "bold" }}>
                {paymentMethods[state.paymentMethod].label}
              </span>
            }
            className="flex text-sm"
          />
        </div>
        <img src={ImgConfirmedIllustration} alt="IMAGE-PESSOA-MOTO-ENTREGA" />
      </section>
    </div>
  );
}
