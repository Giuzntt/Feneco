import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header/Header"



const LayoutUser = () =>{
    return (
        <>
        <Header/>
            <Outlet />
        <Footer />
        </>

    )
}