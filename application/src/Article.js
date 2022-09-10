    import { Link, withRouter } from "react-router-dom";

    function Article(props) {
    return (
        <>
        <Link to="/articles">
            <h4>
            Go back to articles
            </h4>
        </Link>
        <h1>
            The slug of the article is::: <b>{props.match.params.slug}</b>!
        </h1>
        </>
    );
    }

    export default withRouter(Article);