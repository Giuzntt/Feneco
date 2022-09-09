import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";




export const Layout = () =>(
<>
    <Header/>
    
    <Outlet/>
    <Footer/>    
</>
)
    
        
    


