import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";


const LayoutCompany = () => {
    return (<>
         <Header isLogged={true} isPanel={false} />
            <Outlet />
            <Footer />
    </>
    );
    }


export default LayoutCompany;