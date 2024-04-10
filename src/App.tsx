import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";

export function App() {
  return (
    <main
      className="bg-baseBackground text-baseText 
                  antialiased font-roboto text-2xl w-full flex items-center justify-center mx-auto"
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  );
}