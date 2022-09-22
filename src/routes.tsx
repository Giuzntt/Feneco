import { Routes, Route } from "react-router-dom";
import { LayoutLanding } from "./Layouts/Landing";
import { LayoutUser } from "./Layouts/User";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";




const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LayoutLanding />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route path="/Login" element={<LoginPage />}/>
      <Route path="/Register" element={<RegisterPage />}/>
      <Route path="/" element={<LayoutUser />}>
        <Route path="/Homepage" element={<HomePage />} />
      </Route>
     
    </Routes>
  );
};

export default Router;
