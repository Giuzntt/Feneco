import { Routes, Route } from "react-router-dom";
import { LayoutLanding } from "./Layouts/Landing";
import { LayoutUser } from "./Layouts/User";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import TaskPage from "./Pages/TaskPage";
import { TrainingPage } from "./Pages/TrainingPage";
import { WorkPage } from "./Pages/WorkPage";







const Router = (): JSX.Element => {
  return (
      <Routes>
          <Route  path="/" element={<LayoutLanding />}>
              <Route path="" element={<LandingPage />} />
          </Route>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />

          <Route path="/" element={<LayoutUser />}>
              <Route path="vagas" element={<HomePage />}>
                  <Route path=":id/work" element={<WorkPage />}></Route>
              </Route>
              <Route path="microtarefas" element={<TaskPage />} />
              <Route path="training" element={<TrainingPage />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
      </Routes>
  );
};

export default Router;
