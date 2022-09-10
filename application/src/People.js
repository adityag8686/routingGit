import React from "react";

import people from "./data/got.json";

class People extends React.Component {
        state = {
            searchItem: ""
        };
        handleChange = ({ target: { value } }) => {
            this.setState({ searchItem: value });
        };
        render() {
            let allPeople = people.reduce((acc, cv) => {
            acc = acc.concat(cv.people);
            return acc;
            }, []);

            let filteredPeople = allPeople.filter((person) =>
            person.name.toLowerCase().includes(this.state.searchItem)
            );
            return (
            <>
                <input
                placeholder="Search"
                value={this.state.searchItem}
                onChange={this.handleChange}
                />
                <ul>
                {filteredPeople.map((each) => (
                    <SinglePerson {...each} />
                ))}
                </ul>
            </>
            );
        }
}

function SinglePerson(props) {
    return (
        <li >
        <div >
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
        </div>
        <p>{props.description}</p>
        <a href={props.wikiLink}>Learn More!</a>
        </li>
    );
}

export default People;
