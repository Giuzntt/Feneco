import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/globalStyle";
import Routes from "./routes";
import { VagasProvider } from "./Hooks/useVagas";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const App = (): JSX.Element => {
  
  
  return (
      <VagasProvider>
          <BrowserRouter>
              <Routes />
          <ToastContainer />
          </BrowserRouter>
          <GlobalStyles />
      </VagasProvider>
  );
};

export default App;
