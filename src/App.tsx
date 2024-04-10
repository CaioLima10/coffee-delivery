import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";

export function App() {
  return (
    <main className="bg-baseBackground text-baseText antialiased font-roboto text-2xl">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  );
}
