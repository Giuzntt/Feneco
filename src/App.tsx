import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/globalStyle";
import Header from "./components/Header/Header";


import Routes from "./routes";
import { useEffect } from "react";
import { sendRequest } from "./api/api";



const App = (): JSX.Element => {

  useEffect(() => {
    // getUsers("https://jsonplaceholder.typicode.com/users");
  } , []);
 
  
 
 
    
  
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
