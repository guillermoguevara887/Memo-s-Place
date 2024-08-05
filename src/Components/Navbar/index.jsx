import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex justify-between bg-red-500 text-white mb-2 border-b pb-3 pt-6">
            <ul>
                <li className="pl-20 justify-start ">
                    <h1 className=" mt-2 text-lg font-semibold ">Memo's Dinner</h1>
                </li>
            </ul>
            <ul className="flex justify-end gap-12  pr-20 font-semibold mt-2 text-lg ">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/delivery">Delivery</NavLink>
                </li>
                <li>
                    <NavLink to="/games">Games</NavLink>
                </li>
                <li>
                    <NavLink to="/management">Management</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart</NavLink>
                </li>


            </ul>
        </nav>
    )
}

export default NavBar