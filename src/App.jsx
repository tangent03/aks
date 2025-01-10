import { Route, Routes } from "react-router-dom";
import "./App.css";
import GetStartedPage from "./pages/GetStartedPage";
import LoginPage from "./pages/LoginPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import VerifyPhonePage from "./pages/VerifyPhonePage";
import PhoneAuth from "./pages/PhoneAuthPage";
import SelectCountry from "./pages/SelectCountryPage";
import SelectDob from "./pages/SelectDobPage";
import WelcomeScreen from "./pages/WelcomeScreenPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import ShoppingCart from "./pages/ShoppingCart";
import Ordercompleted from "./pages/OrderCompleted";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStartedPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/verify-phone" element={<VerifyPhonePage />} />
      <Route path="/phone-auth" element={<PhoneAuth />} />
      <Route path="/select-country" element={<SelectCountry />} />
      <Route path="/select-dob" element={<SelectDob />} />
      <Route path="/welcome-to-aks" element={<WelcomeScreen />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/order-completion" element={<Ordercompleted />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
