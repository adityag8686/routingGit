import React from "react";
import books from "./data/books.json";

class Books extends React.Component {
    state = {
        searchItem: ""
    };
    handleChange = ({ target: { value } }) => {
        this.setState({ searchItem: value });
    };
    render() {
        let filteredBooks = books.filter((article) =>
        article.title.toLowerCase().includes(this.state.searchItem)
        );
        return (
        <div>
            <input
            placeholder="Search"
            value={this.state.searchItem}
            onChange={this.handleChange}
            />
            <ul >
            {filteredBooks.map((book) => (
                <Book {...book} />
            ))}
            </ul>
        </div>
        );
    }
    }

    function Book(props) {
    return (
        <li>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>
            Author:<span>{props.author}</span>
        </p>
        <a href={props.website}>
            <button>Buy Now</button>
        </a>
        </li>
    );
}

export default Books;
