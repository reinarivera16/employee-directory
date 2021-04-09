import React, { Component } from "react";
import { DataStore } from "../dataStore/DataStore";
import Table from "../components/Table/Table";
import Search from "../components/Search/Search";

let isSorted = true;

class Container extends Component {
    state = {
        employees: [],
        database: [],
        search: "",
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const users = await DataStore.fetch();
            const { results } = users.data;
            this.setState({ employees: results, database: results });
        } catch (err) {
            console.error(err);
        }
    };

    sortData = (key, key2) => {
        if (isSorted) {
            if (key2 === undefined) {
                this.setState(
                    this.state.employees.sort((a, b) =>
                        a[key] > b[key] ? 1 : -1
                    )
                );
            } else {
                this.setState(
                    this.state.employees.sort((a, b) =>
                        a[key][key2] > b[key][key2] ? 1 : -1
                    )
                );
            }
        } else {
            if (key2 === undefined) {
                this.setState(
                    this.state.employees.sort((a, b) =>
                        a[key] > b[key] ? -1 : 1
                    )
                );
            } else {
                this.setState(
                    this.state.employees.sort((a, b) =>
                        a[key][key2] > b[key][key2] ? -1 : 1
                    )
                );
            }
        }

        isSorted = !isSorted;
    };

    handleInputChange = e => {
        e.preventDefault();

        const { name, value } = e.target;
        const { database } = this.state;

        this.setState({ [name]: value });

        const updateResults = async () => {
            await this.setState({ employees: database });

            let filteredData = await this.state.employees.filter(search => {
                const fullName = `${search.name.first} ${search.name.last}`;
                const phoneNo = search.cell.replace(/[()-]/g, "");

                return (
                    fullName
                        .toLowerCase()
                        .includes(this.state.search.toLowerCase()) ||
                    phoneNo.includes(this.state.search)
                );
            });

            this.setState({ employees: filteredData });
        };

        updateResults();
    };

    render() {
        return (
            <div className="table-users">
                <div className="header">Employee Directory</div>
                <Search
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <Table data={this.state.employees} sort={this.sortData} />
            </div>
        );
    }
}

export default Container;
