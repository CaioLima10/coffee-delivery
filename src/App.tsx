import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { CartProvider } from "./contexts/cartContext";

export function App() {
  return (
    <main
      className="bg-baseBackground text-baseText 
                  antialiased font-roboto text-2xl w-full flex items-center justify-center mx-auto"
    >
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
    </main>
  );
}
