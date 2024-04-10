import CoffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <header className="w-screen max-w-5xl h-24 flex items-center justify-center ">
      <div className="w-full flex items-center justify-between">
        <img className="w-20 h-10" src={CoffeeLogoImg} alt="LOGO-DO-COFFEE" />
        <div className=" flex items-center gap-3">
          <button
            className="flex items-center gap-2 min-w-8 h-10 
                  rounded-md border-none px-2 text-sm relative bg-brandPurple/20 text-brandPurple"
          >
            <MapPin size={20} weight="fill" />
            <span>Porto Alegre, RS</span>
          </button>
          <button
            className="flex items-center justify-center gap-8 min-w-8 h-10 
                  rounded-md border-none px-2 text-base relative bg-brandYellow/20 text-brandYellow"
          >
            <ShoppingCart size={20} weight="fill" />
          </button>
        </div>
      </div>
    </header>
  );
}
