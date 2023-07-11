import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/Icons/icon-avator-64.png";
import { useEffect, useState } from "react";




const Navbar = () => {
    const [navScroll, setNavScroll] = useState(false);

    // change navbar style for page scroll
    useEffect(() => {

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const navBarHight = document.getElementById('nav-bar-menu').offsetHeight;
            
            if(scrollPosition > navBarHight) {
                setNavScroll(true)
            } else{
                setNavScroll(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };

    }, []);


    const menuItems = <>
        <ul id="nav-bar-menu" className={navScroll ? 'nav-item-on-scroll' : 'nav-item'}>
            <li>
                <Link to='/' className={"nav-link"}>
                    <img className="h-6" src={icon} alt="" />
                </Link>
            </li>
            <li>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "nav-link-active nav-link" : "nav-link"
                }>Home</NavLink>
            </li>
            <li>
                <NavLink to="/projects" className={({ isActive }) =>
                    isActive ? "nav-link-active nav-link" : "nav-link"
                }>Projects</NavLink>
            </li>

            <li>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? "nav-link-active nav-link" : "nav-link"
                }>About</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive }) =>
                    isActive ? "nav-link-active nav-link" : "nav-link"
                }>Contact</NavLink>
            </li>
        </ul>
    </>
    return (
        <div>
            <nav>
                <div className="flex flex-wrap items-center justify-center mx-auto ">
                    <div className="flex md:fixed md:top-0 items-center md:order-2 p-4">
                        <div className="items-center justify-between w-full flex md:w-auto md:order-1" id="navbar-user">
                            {menuItems}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;