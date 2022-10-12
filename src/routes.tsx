import { Routes, Route } from "react-router-dom";
import LayoutCompany from "./Layouts/Company";
import { LayoutLanding } from "./Layouts/Landing";
import { LayoutUser } from "./Layouts/User";
import CreateOrUpdateJob from "./Pages/CreateOrUpdateJob";
import UpdateTask from './Pages/UpdateTask';
import CreateTask from "./Pages/CreateTask";
import JobPage from "./Pages/JobPage";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import MicroTaskPage from "./Pages/MicroTaskPage";
import PanelPage from "./Pages/PanelPage";
import ProfileCompany from "./Pages/ProfileCompany";
import ProfilePage from "./Pages/ProfilePage";
import RegisterPage from "./Pages/RegisterPage";
import TaskPage from "./Pages/TaskPage";
import { TrainingPage } from "./Pages/TrainingPage";
import { WorkPage } from "./Pages/WorkPage";







const Router = (): JSX.Element => {
  return (
      <Routes>
          <Route path="/" element={<LayoutLanding />}>
              <Route path="" element={<LandingPage />} />
          </Route>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />

          <Route path="/" element={<LayoutUser />}>
              <Route path="vagas">
                  <Route index element={<JobPage />} />
                  <Route path=":id/" element={<WorkPage />} />
              </Route>
              <Route path="microtarefas" element={<TaskPage />} />
              <Route path="training" element={<TrainingPage />} />
              <Route path="perfil" element={<ProfilePage />} />
          </Route>

          <Route path="/" element={<LayoutCompany />}>
              <Route path="create/" element={<CreateOrUpdateJob />} />
              <Route path="/panel">
                  <Route index element={<PanelPage />} />
                  <Route path=":id" element={<CreateOrUpdateJob />} />
              </Route>
              <Route path="/microtask">
                  <Route index element={<PanelPage />} />
                  <Route path=":id" element={<MicroTaskPage />} />
                  {/* <Route path="createTask"> */}
                  <Route path="/microtask/:id/task" element={<CreateTask />} />

                  <Route path="/microtask/:id/updatetask/:updatetask" element={<UpdateTask />} />
              </Route>

              <Route path="/perfil-company" element={<ProfileCompany />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
      </Routes>
  );
};

export default Router;
