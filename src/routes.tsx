import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

import { Layout } from "./Layouts";
import LoginPage from "./Pages/LoginPage";



const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route  path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route path="/Login" element={<LoginPage />}>
      
        
      </Route>
    </Routes>
  );
};

export default Router;
