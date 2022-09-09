import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/globalStyle";
import Routes from "./routes";



const App = (): JSX.Element => {
  
  
  return (

      <BrowserRouter>
        
        <Routes />
        <GlobalStyles />
       
      </BrowserRouter>
 
  );
};

export default App;
