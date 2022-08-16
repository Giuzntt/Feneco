import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/globalStyle";
import Header from "./components/Header/Header";


import Routes from "./routes";

const App = (): JSX.Element => {
  return (

      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
        {/* <Footer /> */}
      </BrowserRouter>
 
  );
};

export default App;
