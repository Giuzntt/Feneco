
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import HeaderLanding from "../../components/Header/Header";




export const LayoutLanding = () => (
    <>
        <HeaderLanding isLogged={false} />

        <Outlet />
        <Footer />
    </>
)





