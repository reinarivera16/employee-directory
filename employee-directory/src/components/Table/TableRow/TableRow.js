import React from "react";

const TableRow = props => {
    return (
        <tr>
            <td>
                <img src={props.employee.picture.large} alt="employee" />
            </td>
            <td>{props.employee.name.first}</td>
            <td>{props.employee.name.last}</td>
            <td>{props.employee.cell}</td>
            <td>{props.employee.email}</td>
            <td>
                {new Date(props.employee.dob.date).toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                })}
            </td>
        </tr>
    );
};

export default TableRow;
