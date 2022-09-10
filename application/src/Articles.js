import React from "react";
import { Link, withRouter } from "react-router-dom";
import articles from "./data/articles.json";

class Articles extends React.Component {
    state = {
        searchItem: ""
    };
    handleChange = ({ target: { value } }) => {
        this.setState({ searchItem: value });
    };
    render() {
        let filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(this.state.searchItem)
        );
        return (
        <>
            <input
            placeholder="Search"
            value={this.state.searchItem}
            onChange={this.handleChange}
            />
            <ul>
            {filteredArticles.map((article) => (
                <li>
                <Link to={"articles/" + article.slug}>
                    <h3>{article.title}</h3>
                </Link>
                <span>{article.author}</span>
                </li>
            ))}
            </ul>
        </>
        );
    }
}

export default withRouter(Articles);