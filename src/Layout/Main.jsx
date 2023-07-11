import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";



const Main = () => {
    return (
        <div className="bg-gradient-to-r from-[#2c3e50] to-[#4ca1af]">
            <Navbar></Navbar>
            <div className="my-20">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;