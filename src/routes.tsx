import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages";
import { Layout } from "./Layouts";



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
