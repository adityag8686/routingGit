    import { Link } from "react-router-dom";

    function Home() {
    return (
        <>
        <h1>🚀 Welcome to Homepage!</h1>
        <ul>
            {["articles", "books", "people"].map((path) => {
            return (
                <li >
                <Link to={"/" + path}>
                    <div>
                    <h2>{path.toUpperCase() + " PAGE"}</h2>
                    </div>
                </Link>
                </li>
            );
            })}
        </ul>
        </>
    );
    }

    export default Home;