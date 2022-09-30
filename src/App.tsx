import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/globalStyle";
import Routes from "./routes";
import { VagasProvider } from "./Hooks/useVagas";



const App = (): JSX.Element => {
  
  
  return (
<VagasProvider>

      <BrowserRouter>
        
        <Routes />
       
      </BrowserRouter>
      <GlobalStyles />
</VagasProvider>
 
  );
};

export default App;
