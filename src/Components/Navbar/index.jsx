import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";


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
                    <NavLink to="/"
                        className={({ isActive }) => (isActive ? 'underline' : '')}>Home</NavLink>

                </li>
                <li>
                    <NavLink to="/menu"
                        className={({ isActive }) => (isActive ? 'underline' : '')}>Menu</NavLink>

                </li>
                <li>
                    <NavLink to="/delivery"
                        className={({ isActive }) => (isActive ? 'underline' : '')}>Delivery</NavLink>

                </li>
                <li>
                    <NavLink to="/games"
                        className={({ isActive }) => (isActive ? 'underline' : '')}>Games</NavLink>

                </li>
                <li>
                    <NavLink to="/management"
                        className={({ isActive }) => (isActive ? 'underline' : '')}>Management</NavLink>

                </li>
                <li>
                    <div className="flex items-center">
                        <NavLink to="/cart"><BsCart3 size={24} /></NavLink>
                        <p className="ml-2 text-lg">0</p>

                    </div>

                </li>


            </ul>
        </nav>
    )
}

export default NavBar