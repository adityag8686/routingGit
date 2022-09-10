    import { Link } from "react-router-dom";

    function Header(props) {
    return (
        <div>
        <div >
            <Link to="/">
            <span >Dashboard</span>
            </Link>
        </div>
        <div >
            <input type="search" placeholder="Search Documentation..." />
        </div>
        </div>
    );
    }

    export default Header;
