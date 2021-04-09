import React from "react";

const SearchBar = props => {
    return (
        <form className="search-form">
            <input
                className="search"
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                placeholder="Search by Name & Phone"
            />
        </form>
    );
};

export default SearchBar;
