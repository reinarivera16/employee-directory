import React from "react";
import TableRow from "./TableRow/TableRow";

const Table = props => {
    // Map the data from the API and assign it to a var to be rendered
    const tR = props.data.map(employee => (
        <TableRow key={employee.cell} employee={employee} />
    ));

    // Render the table with the mapped rows of employee data
    return (
        <table cellSpacing="0">
            <thead>
                <tr>
                    <th></th>
                    <th>
                        Firstname
                        <i
                            className="fas fa-sort"
                            onClick={() => {
                                props.sort("name", "first");
                            }}
                        ></i>
                    </th>
                    <th>
                        Lastname
                        <i
                            className="fas fa-sort"
                            onClick={() => {
                                props.sort("name", "last");
                            }}
                        ></i>
                    </th>
                    <th>
                        Phone No
                        <i
                            className="fas fa-sort"
                            onClick={() => {
                                props.sort("cell");
                            }}
                        ></i>
                    </th>
                    <th>
                        Email
                        <i
                            className="fas fa-sort"
                            onClick={() => {
                                props.sort("email");
                            }}
                        ></i>
                    </th>
                    <th>
                        DOB
                        <i
                            className="fas fa-sort"
                            onClick={() => {
                                props.sort("dob", "date");
                            }}
                        ></i>
                    </th>
                </tr>
            </thead>
            <tbody>{tR}</tbody>
        </table>
    );
};

export default Table;
