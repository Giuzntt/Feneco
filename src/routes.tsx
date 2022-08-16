import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages";



const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Landing" element={<LandingPage />} />
      
    </Routes>
  );
};

export default Router;
