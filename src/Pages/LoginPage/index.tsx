import { Outlet } from "react-router-dom";





export default function LoginPage() {
    return (
        <>
        <div className="login">
        <h1>Login</h1>
        </div>
        <Outlet/>
        </>
    );
    }