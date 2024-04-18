import { NavLink } from "react-router-dom";
import CoffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <header
      className="w-screen max-w-6xl h-24 flex items-center justify-center 
      sticky top-0 left-0 z-10 bg-baseBackground"
    >
      <div className="w-full flex items-center justify-between">
        <NavLink to="/">
          <img className="w-20 h-10" src={CoffeeLogoImg} alt="LOGO-DO-COFFEE" />
        </NavLink>
        <div className=" flex items-center gap-3">
          <button
            className="flex items-center gap-2 min-w-8 h-10 
                  rounded-md border-none px-2 text-sm relative bg-brandPurple/20 text-brandPurple"
          >
            <MapPin size={20} weight="fill" />
            <span>Porto Alegre, RS</span>
          </button>
          <div className="relative">
            <NavLink
              to="/completeOrder"
              className="flex items-center justify-center gap-8 min-w-8 h-10 
                  rounded-md border-none px-2 text-base relative bg-brandYellow/20 text-brandYellow"
            >
              <ShoppingCart size={20} weight="fill" />
            </NavLink>
            {cartQuantity > 0 && (
              <span
                className="absolute flex items-center justify-center text-baseWhite 
                    p-0.5 w-8 h-8 text-sm -top-4 -right-4 bg-brandYellowDark rounded-full"
              >
                {cartQuantity}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
