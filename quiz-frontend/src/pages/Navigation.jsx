import { NavLink } from "react-router";

export default function Navigation() {
    return (
        <nav className="">
            <ul className="nav">
                <li class="nav-item">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link  active" : "nav-link "}
                    >
                        Összes Quiz
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/ujquiz"
                        className={({ isActive }) =>
                            isActive ? "nav-link  active" : "nav-link "
                        }
                    >
                        Új kérdés
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}


