import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";



const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/Login" element={<LoginPage />} />
      
    </Routes>
  );
};

export default Router;
