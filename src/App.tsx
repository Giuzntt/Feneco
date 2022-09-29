import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/globalStyle";
import Routes from "./routes";
import { VagasProvider } from "./Hooks/useVagas";
import { TaskProvider } from "./Hooks/useTask";



const App = (): JSX.Element => {
  
  
  return (
<VagasProvider>
    <TaskProvider>

      <BrowserRouter>
        
        <Routes />
       
      </BrowserRouter>
      <GlobalStyles />
    </TaskProvider>
</VagasProvider>
 
  );
};

export default App;
