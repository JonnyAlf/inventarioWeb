import { Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";


function CustomRoutes () {
    return (
        <Routes>
            <Route path="*" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    )
}

export default CustomRoutes;