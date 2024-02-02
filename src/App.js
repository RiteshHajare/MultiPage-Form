import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicDetails from "./pages/BasicDetails";
import Address from "./pages/Address";
import ProfessionalDetails from "./pages/ProfessionalDetails";
import PaymentDetails from "./pages/PaymentDetails";
import "./App.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicDetails />} />
        <Route path="/address" element={<Address />} />
        <Route path="/professionaldetails" element={<ProfessionalDetails />} />
        <Route path="/paymentdetails" element={<PaymentDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
