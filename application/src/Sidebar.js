import { NavLink } from "react-router-dom";

function Sidebar(){
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" exact>
                        <span>
                            Home
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articles" exact>
                        <span>
                            Articles
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/books" exact>
                        <span>
                            Books
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/people" exact>
                        <span>
                            People
                        </span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;