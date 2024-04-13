import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { CompleteOrderPage } from "./pages/completeOrder";
import { DefaultLayout } from "./layout/defaultLayout";
import { OrderConfirmed } from "./pages/onderConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/orderConfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  );
}
