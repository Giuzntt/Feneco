import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header/Header"



export const LayoutUser = () =>{
    return (
        <>
            <Header isLogged={true} isPanel={true} />
            <Outlet />
            <Footer />
        </>
    )

}